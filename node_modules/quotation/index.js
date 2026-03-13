/**
 * Quote a value.
 *
 * @param value
 *   Value(s) to wrap in quotes
 * @param [open='"']
 *   Opening quote
 * @param [close=open]
 *   Closing quote
 */
export const quotation =
  /**
   * @type {{
   *   (value: string, open?: string | null | undefined, close?: string | null | undefined): string
   *   (value: ReadonlyArray<string>, open?: string | null | undefined, close?: string | null | undefined): string[]
   * }}
   */
  (
    /**
     * @param {ReadonlyArray<string> | string} value
     * @param {string | null | undefined} open
     * @param {string | null | undefined} close
     * @returns {Array<string> | string}
     */
    function (value, open, close) {
      const start = open || '"'
      const end = close || start
      let index = -1

      if (Array.isArray(value)) {
        const list = /** @type {ReadonlyArray<string>} */ (value)
        /** @type {Array<string>} */
        const result = []

        while (++index < list.length) {
          result[index] = start + list[index] + end
        }

        return result
      }

      if (typeof value === 'string') {
        return start + value + end
      }

      throw new TypeError('Expected string or array of strings')
    }
  )
