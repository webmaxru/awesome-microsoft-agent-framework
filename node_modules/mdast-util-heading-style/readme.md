# mdast-util-heading-style

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[mdast][] utility to get the style of a heading.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`headingStyle(node[, relative])`](#headingstylenode-relative)
    *   [`Style`](#style)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a tiny utility to figure out if a heading was written as ATX or
as setext.

```markdown
## ATX uses hashes

Setext uses an underline
------------------------
```

## When should I use this?

Probably not a lot!
It’s used in [`remark-lint`][remark-lint].

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install mdast-util-heading-style
```

In Deno with [`esm.sh`][esmsh]:

```js
import {headingStyle} from 'https://esm.sh/mdast-util-heading-style@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {headingStyle} from 'https://esm.sh/mdast-util-heading-style@3?bundle'
</script>
```

## Use

```js
import {unified} from 'unified'
import {fromMarkdown} from 'mdast-util-from-markdown'
import {headingStyle} from 'mdast-util-heading-style'

headingStyle(fromMarkdown('# ATX').children[0]) // => 'atx'
headingStyle(fromMarkdown('# ATX #\n').children[0]) // => 'atx-closed'
headingStyle(fromMarkdown('ATX\n===').children[0]) // => 'setext'

headingStyle(fromMarkdown('### ATX').children[0]) // => undefined
headingStyle(fromMarkdown('### ATX').children[0], 'setext') // => 'setext'
```

## API

This package exports the identifier [`headingStyle`][api-headingstyle].
There is no default export.

### `headingStyle(node[, relative])`

Get the heading style of a heading, optionally `relative` to a preferred
style.

This is because ATX headings with a depth of three or more could be
considered setext.

###### Parameters

*   `node` ([`Heading`][heading])
    — heading node to check
*   `style` ([`Style`][api-style], optional)
    — relative style

###### Returns

Style ([`Style`][api-style]) if it can be inferred, `undefined` otherwise.

### `Style`

Style of heading (TypeScript type).

###### Type

```ts
type Style = 'atx' | 'atx-closed' | 'setext'
```

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Style`][api-style].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`mdast-util-heading-style@^3`, compatible with Node.js 16.

## Security

Use of `mdast-util-heading-style` does not involve **[hast][]** so there are
no openings for [cross-site scripting (XSS)][xss] attacks.

## Related

*   [`mdast-normalize-headings`](https://github.com/syntax-tree/mdast-normalize-headings)
    — make sure there is no more than a single top-level heading
*   [`mdast-util-heading-range`](https://github.com/syntax-tree/mdast-util-heading-range)
    — use headings as ranges

## Contribute

See [`contributing.md`][contributing] in [`syntax-tree/.github`][health] for
ways to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/syntax-tree/mdast-util-heading-style/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-util-heading-style/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-util-heading-style.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-util-heading-style

[downloads-badge]: https://img.shields.io/npm/dm/mdast-util-heading-style.svg

[downloads]: https://www.npmjs.com/package/mdast-util-heading-style

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=mdast-util-heading-style

[size]: https://bundlejs.com/?q=mdast-util-heading-style

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[license]: license

[author]: https://wooorm.com

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[heading]: https://github.com/syntax-tree/mdast#heading

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast

[remark-lint]: https://github.com/remarkjs/remark-lint

[api-headingstyle]: #headingstylenode-relative

[api-style]: #style
