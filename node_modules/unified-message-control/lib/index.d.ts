/**
 * Let comment markers control messages.
 *
 * @param {Node} tree
 *   Tree.
 * @param {Options} options
 *   Configuration (required).
 * @returns {undefined}
 *   Nothing.
 */
export function messageControl(tree: Node, options: Options): undefined;
export type Node = import('unist').Node;
export type Parent = import('unist').Parent;
export type Point = import('unist').Point;
export type Test = import('unist-util-is').Test;
export type VFile = import('vfile').VFile;
export type VFileMessage = import('vfile-message').VFileMessage;
/**
 * Toggle.
 */
export type Mark = {
    /**
     *   Where to toggle; this is where a marker exists.
     */
    point: Point | undefined;
    /**
     *   Whether to enable (`true`) or disable (`false`).
     */
    state: boolean;
};
/**
 * Comment marker.
 *
 * ###### Notes
 *
 * The **disable** keyword turns off messages.
 * For example:
 *
 * ```markdown
 * <!--lint disable list-item-bullet-indent strong-marker-->
 *
 * *   **foo**
 *
 * A paragraph, and now another list.
 *
 * * __bar__
 * ```
 *
 * The **enable** keyword turns on messages.
 * For example:
 *
 * ```markdown
 * <!--lint enable strong-marker-->
 *
 * **foo** and __bar__.
 * ```
 *
 * The **ignore** keyword turns off messages in the following node.
 * After the end of the following node, messages are turned on again.
 * For example:
 *
 * ```markdown
 * <!--lint ignore list-item-bullet-indent strong-marker-->
 *
 * *   **foo**
 *   * __bar__
 * ```
 */
export type Marker = {
    /**
     *   Name of marker.
     */
    name: string;
    /**
     *   Raw values (space-separated); the first should be `enable`, `disable`, or
     *  `ignore`, the rest are optional rule identifiers.
     */
    attributes: string;
};
/**
 * Parse a possible comment marker.
 */
export type MarkerParser = (node: Node) => Marker | null | undefined | void;
/**
 * Configuration.
 *
 * ###### Notes
 *
 * The given `name` defines which comments work.
 * Assuming there’s a `marker` configured that parses HTML comments such as
 * `<!--x y z-->` to a mark with `name: 'x'`, then giving `name: 'x'` will
 * use comments such as:
 *
 * ```html
 * <!--alpha ignore-->
 * ```
 *
 * When `known` is given, a warning is shown when unknown rules are
 * controlled.
 * For example, `{name: 'alpha', known: ['bravo']}` results in a warning
 * (for `charlie`):
 *
 * ```html
 * <!--alpha ignore charlie-->
 * ```
 */
export type Options = {
    /**
     * List of `ruleId`s to initially turn on (optional); used if `reset` is
     * `true`.
     */
    enable?: Array<string> | null | undefined;
    /**
     * List of `ruleId`s to turn off (optional); used if `reset` is not
     * `true`.
     */
    disable?: Array<string> | null | undefined;
    /**
     * List of allowed `ruleId`s (optional).
     */
    known?: Array<string> | null | undefined;
    /**
     *   Corresponding file (required).
     */
    file: VFile;
    /**
     *   Parse nodes to `Marker` objects (required).
     */
    marker: MarkerParser;
    /**
     *   Name of markers that can control the message sources (required).
     */
    name: string;
    /**
     * Whether to treat all messages as turned off initially.
     */
    reset?: boolean | null | undefined;
    /**
     * Sources that can be controlled with markers (default: `options.name`).
     */
    source?: Array<string> | string | null | undefined;
    /**
     * Test for possible markers (optional).
     */
    test?: Test;
};
