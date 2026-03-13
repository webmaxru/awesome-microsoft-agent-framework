/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('unified-message-control').Options} MessageOptions
 * @typedef {import('vfile').VFile} VFile
 */

/**
 * @typedef {Omit<MessageOptions, 'file' | 'marker' | 'test'>} Options
 *   Configuration.
 */

import {commentMarker} from 'mdast-comment-marker'
import {messageControl} from 'unified-message-control'

const test = [
  'comment', // In MDX@1, comments have their own node.
  'html', // Comments are `html` nodes in mdast.
  'mdxFlowExpression', // In MDX@2, comments exist in bracketed expressions.
  'mdxTextExpression'
]

/**
 * Enable, disable, and ignore messages with comments.
 *
 * @param {Readonly<Options>} options
 *   Configuration (required).
 * @returns
 *   Transform.
 */
export default function remarkMessageControl(options) {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree, file) {
    messageControl(tree, {...options, file, marker: commentMarker, test})
  }
}
