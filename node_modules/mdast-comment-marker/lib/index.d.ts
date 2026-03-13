/**
 * Parse a comment marker.
 *
 * @param {unknown} value
 *   Thing to parse, typically `Node`.
 * @returns {Marker | undefined}
 *   Info when applicable or `undefined`.
 */
export function commentMarker(value: unknown): Marker | undefined
export type Html = import('mdast').Html
export type Nodes = import('mdast').Nodes
export type MdxFlowExpression =
  import('mdast-util-mdx-expression').MdxFlowExpression
export type MdxTextExpression =
  import('mdast-util-mdx-expression').MdxTextExpression
/**
 * Value.
 *
 * If it looks like a number (to JavaScript), it’s cast as number.
 * The strings `true` and `false` are turned into their corresponding
 * booleans.
 * The empty string is also considered the `true` boolean.
 */
export type MarkerParameterValue = number | string | boolean
/**
 * Parameters.
 */
export type MarkerParameters = Record<string, MarkerParameterValue>
/**
 * Comment marker.
 */
export type Marker = {
  /**
   *   Name of marker.
   */
  name: string
  /**
   *   Value after name.
   */
  attributes: string
  /**
   *   Parsed attributes.
   */
  parameters: MarkerParameters
  /**
   *   Reference to given node.
   */
  node: Html | MdxFlowExpression | MdxTextExpression
}
