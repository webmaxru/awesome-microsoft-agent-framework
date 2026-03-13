/**
 * @typedef {import('vfile').VFile} VFile
 */

import pretty from 'eslint-formatter-pretty'
import {toESLint} from 'vfile-to-eslint'

/**
 * Create a pretty report from files.
 *
 * @param {Array<VFile>} vfiles
 *   Files to report.
 * @returns {string}
 *   Pretty report.
 */
export function reporterPretty(vfiles) {
  const report = toESLint(vfiles)
  // @ts-expect-error: `eslint-formatter-pretty` types are out of date.
  return pretty(report)
}
