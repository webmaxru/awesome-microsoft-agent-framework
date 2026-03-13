/**
 * @typedef {import('eslint').ESLint.LintResult} LintResult
 * @typedef {import('eslint').Linter.LintMessage} LintMessage
 * @typedef {import('vfile').VFile} VFile
 * @typedef {import('vfile-message').VFileMessage} VFileMessage
 */

import {statistics} from 'vfile-statistics'

/**
 * Turn virtual files into a ESLint results that can be passed directly to an
 * ESLint formatter.
 *
 * @param {Array<VFile>} files
 *   Virtual files.
 * @returns {Array<LintResult>}
 *   Lint results.
 */
export function toESLint(files) {
  return files.map(function (file) {
    return transformFile(file)
  })
}

/**
 * Map a file.
 *
 * @param {VFile} file
 *   Virtual file.
 * @returns {LintResult}
 *   ESLint result.
 */
function transformFile(file) {
  const stats = statistics(file)

  return {
    filePath: file.path,
    messages: file.messages.map(function (message) {
      return transformMessage(message)
    }),
    fatalErrorCount: stats.fatal,
    errorCount: stats.fatal,
    warningCount: stats.nonfatal,
    fixableErrorCount: 0,
    fixableWarningCount: 0,
    usedDeprecatedRules: [],
    suppressedMessages: []
  }
}

/**
 * Map a message.
 *
 * @param {VFileMessage} message
 *   Virtual message.
 * @returns {LintMessage}
 *   ESLint message.
 */
function transformMessage(message) {
  /** @type {VFileMessage['place']} */
  // @ts-expect-error `position` is the old name.
  const position = message.place || message.position

  const end = (position && 'end' in position ? position.end : undefined) || {
    line: 0,
    column: 0
  }

  return {
    fatal: message.fatal === true ? true : undefined,
    severity: message.fatal ? 2 : 1,
    ruleId: [message.source, message.ruleId].filter(Boolean).join(':') || null,
    line: message.line || 0,
    column: message.column || 0,
    endLine: end.line || undefined,
    endColumn: end.column || undefined,
    message: message.reason
  }
}
