# vfile-to-eslint

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Convert [VFiles][vfile] to [ESLint][] formatter compatible output.

![][screenshot]

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`toESLint(files)`](#toeslintfiles)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package turns a file into the `LintResult` schema that ESLint uses for its
formatters

## When should I use this?

While vfile and ESLint results are different, they do overlap in some places.
This package can be used to integrate with ESLint in those cases.
In other cases, a custom vfile utility might be a better solution.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install vfile-to-eslint
```

In Deno with [`esm.sh`][esmsh]:

```js
import {toESLint} from 'https://esm.sh/vfile-to-eslint@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {toESLint} from 'https://esm.sh/vfile-to-eslint@4?bundle'
</script>
```

## Use

```js
import {remark} from 'remark'
import remarkPresetLintRecommended from 'remark-preset-lint-recommended'
import eslintFormatterPretty from 'eslint-formatter-pretty'
import {toESLint} from 'vfile-to-eslint'

const file = await remark()
  .use(remarkPresetLintRecommended)
  .process('## Hello world!')

console.log(eslintFormatterPretty(toESLint([file])))
```

## API

This package exports the identifier [`toESLint`][api-to-eslint].
There is no default export.

### `toESLint(files)`

Turn virtual files into a ESLint results that can be passed directly to an
[ESLint formatter][eslint-formatter].

###### Parameters

*   `files` ([`Array<VFile>`][vfile])
    — list of files

###### Returns

Lint results ([`Array<LintResult>`][lintresult])

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`LintResult`][lintresult].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `vfile-to-eslint@^4`,
compatible with Node.js 16.

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Sindre Sorhus][author]

<!-- Definitions -->

[build-badge]: https://github.com/vfile/vfile-to-eslint/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile-to-eslint/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-to-eslint.svg

[coverage]: https://codecov.io/github/vfile/vfile-to-eslint

[downloads-badge]: https://img.shields.io/npm/dm/vfile-to-eslint.svg

[downloads]: https://www.npmjs.com/package/vfile-to-eslint

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=vfile-to-eslint

[size]: https://bundlejs.com/?q=vfile-to-eslint

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/vfile/vfile/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contributing]: https://github.com/vfile/.github/blob/main/contributing.md

[support]: https://github.com/vfile/.github/blob/main/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/main/code-of-conduct.md

[license]: license

[author]: https://sindresorhus.com

[screenshot]: screenshot.png

[vfile]: https://github.com/vfile/vfile

[eslint]: https://eslint.org

[eslint-formatter]: https://npms.io/search?term=eslint-formatter

[lintresult]: https://eslint.org/docs/latest/integrate/nodejs-api#-lintresult-type

[api-to-eslint]: #toeslintfiles
