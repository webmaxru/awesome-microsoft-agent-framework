/**
 * Enable, disable, and ignore messages with comments.
 *
 * @param {Readonly<Options>} options
 *   Configuration (required).
 * @returns
 *   Transform.
 */
export default function remarkMessageControl(options: Readonly<Options>): (tree: Root, file: VFile) => undefined;
export type Root = import('mdast').Root;
export type MessageOptions = import('unified-message-control').Options;
export type VFile = import('vfile').VFile;
/**
 * Configuration.
 */
export type Options = Omit<MessageOptions, 'file' | 'marker' | 'test'>;
