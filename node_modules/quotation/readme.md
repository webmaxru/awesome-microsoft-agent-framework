# quotation

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Quote a value.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`quotation(value[, open[, close]])`](#quotationvalue-open-close)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package makes it quite easy to quote one or more values.

## When should I use this?

Use this package if you need to quote one or more strings with straight or smart
quotes.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install quotation
```

In Deno with [`esm.sh`][esmsh]:

```js
import {quotation} from 'https://esm.sh/quotation@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {quotation} from 'https://esm.sh/quotation@2?bundle'
</script>
```

## Use

```js
import {quotation} from 'quotation'

quotation('one') // => '"one"'
quotation(['one', 'two']) // => ['"one"', '"two"']
quotation('one', "'") // => "'one'"
quotation('one', '“', '”') // => '“one”'
```

## API

This package exports the identifier `quotation`.
There is no default export.

### `quotation(value[, open[, close]])`

Quote a value.

###### Parameters

*   `value` (`string` or `string[]`)
    — value to wrap in quotes
*   `open` (`string`, default: `"`)
    — character to add at start of `value`
*   `close` (`string`, default: `open` or `"`)
    — character to add at end of `value`

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/quotation/workflows/main/badge.svg

[build]: https://github.com/wooorm/quotation/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/quotation.svg

[coverage]: https://codecov.io/github/wooorm/quotation

[downloads-badge]: https://img.shields.io/npm/dm/quotation.svg

[downloads]: https://www.npmjs.com/package/quotation

[size-badge]: https://img.shields.io/bundlephobia/minzip/quotation.svg

[size]: https://bundlephobia.com/result?p=quotation

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
