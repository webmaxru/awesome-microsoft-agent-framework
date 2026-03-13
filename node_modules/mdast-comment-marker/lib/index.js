/**
 * @typedef {import('mdast').Html} Html
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast-util-mdx-expression').MdxFlowExpression} MdxFlowExpression
 * @typedef {import('mdast-util-mdx-expression').MdxTextExpression} MdxTextExpression
 */

/**
 *
 * @typedef {number | string | boolean} MarkerParameterValue
 *   Value.
 *
 *   If it looks like a number (to JavaScript), it’s cast as number.
 *   The strings `true` and `false` are turned into their corresponding
 *   booleans.
 *   The empty string is also considered the `true` boolean.
 * @typedef {Record<string, MarkerParameterValue>} MarkerParameters
 *   Parameters.
 *
 * @typedef Marker
 *   Comment marker.
 * @property {string} name
 *   Name of marker.
 * @property {string} attributes
 *   Value after name.
 * @property {MarkerParameters} parameters
 *   Parsed attributes.
 * @property {Html | MdxFlowExpression | MdxTextExpression} node
 *   Reference to given node.
 */

const commentExpression = /\s*([a-zA-Z\d-]+)(\s+([\s\S]*))?\s*/
const esCommentExpression = new RegExp(
  '(\\s*\\/\\*' + commentExpression.source + '\\*\\/\\s*)'
)
const markerExpression = new RegExp(
  '(\\s*<!--' + commentExpression.source + '-->\\s*)'
)

/**
 * Parse a comment marker.
 *
 * @param {unknown} value
 *   Thing to parse, typically `Node`.
 * @returns {Marker | undefined}
 *   Info when applicable or `undefined`.
 */
export function commentMarker(value) {
  if (
    isNode(value) &&
    (value.type === 'html' ||
      value.type === 'mdxFlowExpression' ||
      value.type === 'mdxTextExpression')
  ) {
    const match = value.value.match(
      value.type === 'html' ? markerExpression : esCommentExpression
    )

    if (match && match[0].length === value.value.length) {
      const parameters = parseParameters(match[3] || '')

      if (parameters) {
        return {
          name: match[2],
          attributes: (match[4] || '').trim(),
          parameters,
          node: value
        }
      }
    }
  }
}

/**
 * Parse a string of “attributes”.
 *
 * @param {string} value
 *   Attributes.
 * @returns {MarkerParameters | undefined}
 *   Parameters.
 */
function parseParameters(value) {
  /** @type {MarkerParameters} */
  const parameters = {}

  return value
    .replace(
      /\s+([-\w]+)(?:=(?:"((?:\\[\s\S]|[^"])*)"|'((?:\\[\s\S]|[^'])*)'|((?:\\[\s\S]|[^"'\s])+)))?/gi,
      replacer
    )
    .replace(/\s+/g, '')
    ? undefined
    : parameters

  /**
   * @param {string} _
   * @param {string} $1
   * @param {string} $2
   * @param {string} $3
   * @param {string} $4
   * @returns {string}
   */
  // eslint-disable-next-line max-params
  function replacer(_, $1, $2, $3, $4) {
    /** @type {MarkerParameterValue} */

    let value = $2 === undefined ? ($3 === undefined ? $4 : $3) : $2
    const number = Number(value)

    if (value === 'true' || value === undefined) {
      value = true
    } else if (value === 'false') {
      value = false
    } else if (value.trim() && !Number.isNaN(number)) {
      value = number
    }

    parameters[$1] = value

    return ''
  }
}

/**
 * Check if something looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   It’s a node!
 */
function isNode(value) {
  return Boolean(value && typeof value === 'object' && 'type' in value)
}
