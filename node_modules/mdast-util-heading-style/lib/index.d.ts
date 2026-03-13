/**
 * @typedef {import('mdast').Heading} Heading
 */
/**
 * @typedef {'atx' | 'atx-closed' | 'setext'} Style
 *   Style of heading.
 */
/**
 * Get the heading style of a heading, optionally `relative` to a preferred
 * style.
 *
 * This is because ATX headings with a depth of three or more could be
 * considered setext.
 *
 * @param {Readonly<Heading>} node
 *   Heading node to check.
 * @param {Style | null | undefined} [relative]
 *   Relative style (preferred style).
 * @returns {Style | undefined}
 *   Style, if it can be inferred, `undefined` otherwise.
 */
export function headingStyle(
  node: Readonly<Heading>,
  relative?: Style | null | undefined
): Style | undefined
export type Heading = import('mdast').Heading
/**
 * Style of heading.
 */
export type Style = 'atx' | 'atx-closed' | 'setext'
