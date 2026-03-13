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
export function find<V extends import("unist").Node>(tree: Node, condition: TestFn | TestObj | TestStr): V | undefined;
export type Node = import('unist').Node;
/**
 * Find the first node for which function returns `true` when passed node as
 * argument.
 */
export type TestFn = (node: Node) => boolean;
/**
 * Find the first node that has matching values for all properties of object.
 */
export type TestObj = Record<string, unknown>;
/**
 * Find the first node with a truthy property matching `string`.
 */
export type TestStr = string;
