# vfile-reporter-pretty

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[vfile][] utility to create a pretty report.

![][screenshot]

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`reporterPretty(files)`](#reporterprettyfiles)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is like [`vfile-reporter`][vfile-reporter] but a bit prettier.

## When should I use this?

You can use this when you like
[`eslint-formatter-pretty`][eslint-formatter-pretty], use `vfile-reporter`
itself otherwise.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install vfile-reporter-pretty
```

In Deno with [`esm.sh`][esmsh]:

```js
import {reporterPretty} from 'https://esm.sh/vfile-reporter-pretty@7'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {reporterPretty} from 'https://esm.sh/vfile-reporter-pretty@7?bundle'
</script>
```

## Use

```js
import {VFile} from 'vfile'
import {reporterPretty} from 'vfile-reporter-pretty'

const file = new VFile({path: '~/example.md'})

file.message('`braavo` is misspelt; did you mean `bravo`?', {line: 1, column: 8})
file.info('This is perfect', {line: 2, column: 1})

try {
  file.fail('This is horrible', {line: 3, column: 5})
} catch (error) {}

console.log(reporterPretty([file]))
```

## API

This package exports the identifier [`reporterPretty`][api-reporter-pretty].
That identifier is also the default export.

### `reporterPretty(files)`

Create a pretty report from files.

###### Parameters

*   `files` ([`Array<VFile>`][vfile])
    — files to report

###### Returns

Report (`string`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `vfile-reporter-pretty@^7`,
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

[build-badge]: https://github.com/vfile/vfile-reporter-pretty/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile-reporter-pretty/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile-reporter-pretty.svg

[coverage]: https://codecov.io/github/vfile/vfile-reporter-pretty

[downloads-badge]: https://img.shields.io/npm/dm/vfile-reporter-pretty.svg

[downloads]: https://www.npmjs.com/package/vfile-reporter-pretty

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=vfile-reporter-pretty

[size]: https://bundlejs.com/?q=vfile-reporter-pretty

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

[vfile-reporter]: https://github.com/vfile/vfile-reporter

[eslint-formatter-pretty]: https://github.com/sindresorhus/eslint-formatter-pretty

[api-reporter-pretty]: #reporterprettyfiles
