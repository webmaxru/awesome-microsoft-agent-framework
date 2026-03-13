/**
 * @typedef {import('unist').Node} Node
 */

/**
 * @callback TestFn
 *   Find the first node for which function returns `true` when passed node as
 *   argument.
 * @param {Node} node
 *   Node to check.
 * @returns {boolean}
 *   Whether `node` matches your condition.
 *
 * @typedef {Record<string, unknown>} TestObj
 *   Find the first node that has matching values for all properties of object.
 *
 * @typedef {string} TestStr
 *   Find the first node with a truthy property matching `string`.
 */

import iteratee from 'lodash.iteratee'
import {visit} from 'unist-util-visit'

/**
 * Find a node in `tree` matching `condition`.
 *
 * @template {Node} V
 *   Node to search for.
 * @param {Node} tree
 *   Tree to search in.
 * @param {TestFn | TestObj | TestStr} condition
 *   Condition used to test each node, which matches `V`.
 * @returns {V | undefined}
 *   The first node that matches condition, or `undefined` if no node matches.
 */
export function find(tree, condition) {
  if (!tree) throw new Error('unist-util-find requires a tree to search')
  if (!condition) throw new Error('unist-util-find requires a condition')

  const predicate = iteratee(condition)
  /** @type {V | undefined} */
  let result

  visit(tree, function (node) {
    if (predicate(node)) {
      // @ts-expect-error: assume `predicate` checks for `V`.
      result = node
      return false
    }
  })

  return result
}
