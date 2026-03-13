# mdast-comment-marker

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[mdast][] utility to parse comment markers.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`commentMarker(value)`](#commentmarkervalue)
    *   [`Marker`](#marker)
    *   [`MarkerParameters`](#markerparameters)
    *   [`MarkerParameterValue`](#markerparametervalue)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that tries to parse a structured marker from a
comment.

## When should I use this?

Comments are a hidden part of markdown, so they can be used as processing
instructions.
For example, this utility is used in [`remark-lint`][remark-lint] to control
whether lint rules are turned on or ignored, and by [`mdast-zone`][mdast-zone]
to replace sections between two markers.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install mdast-comment-marker
```

In Deno with [`esm.sh`][esmsh]:

```js
import {commentMarker} from 'https://esm.sh/mdast-comment-marker@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {commentMarker} from 'https://esm.sh/mdast-comment-marker@3?bundle'
</script>
```

## Use

```js
import {commentMarker} from 'mdast-comment-marker'

console.log(commentMarker({type: 'html', value: '<!--foo-->'}));

console.log(commentMarker({
  type: 'html',
  value: '<!--foo bar baz=12.4 qux="test test" quux=\'false\'-->'
}));

console.log(commentMarker({type: 'html', value: '<!doctype html>'}));

// Also supports MDX expressions:
console.log(commentMarker({
  type: 'mdxFlowExpression',
  value: '/* lint disable heading-style */'
}));
```

Yields:

```js
{
  name: 'foo',
  attributes: '',
  parameters: {},
  node: { type: 'html', value: '<!--foo-->' }
}
{
  name: 'foo',
  attributes: `bar baz=12.4 qux="test test" quux='false'`,
  parameters: { bar: true, baz: 12.4, qux: 'test test', quux: false },
  node: {
    type: 'html',
    value: `<!--foo bar baz=12.4 qux="test test" quux='false'-->`
  }
}
undefined
{
  name: 'lint',
  attributes: 'disable heading-style',
  parameters: { disable: true, 'heading-style': true },
  node: {
    type: 'mdxFlowExpression',
    value: '/* lint disable heading-style */'
  }
}
```

## API

This package exports the identifier [`commentMarker`][api-comment-marker].
There is no default export.

### `commentMarker(value)`

Parse a comment marker.

###### Parameters

*   `value` (`unknown`)
    — thing to parse, typically [`Node`][node]

###### Returns

Info ([`Marker`][api-marker]) when applicable or `undefined`.

### `Marker`

Comment marker (TypeScript type).

###### Properties

*   `name` (`string`)
    — name of marker
*   `attributes` (`string`)
    — value after name
*   `parameters` ([`MarkerParameters`][api-marker-parameters])
    — parsed attributes
*   `node` ([`Node`][node])
    — reference to given node

### `MarkerParameters`

Parameters (TypeScript type).

###### type

```ts
type MarkerParameters = Record<string, MarkerParameterValue>
```

### `MarkerParameterValue`

Value (TypeScript type).

If it looks like a number (to JavaScript), it’s cast as number.
The strings `true` and `false` are turned into their corresponding
booleans.
The empty string is also considered the `true` boolean.

###### type

```ts
type MarkerParameterValue = number | string | boolean
```

## Types

This package is fully typed with [TypeScript][].
This package exports the types [`Marker`][api-marker],
[`MarkerParameters`][api-marker-parameters], and
[`MarkerParameterValue`][api-marker-parameter-value]

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `mdast-comment-marker@^3`,
compatible with Node.js 16.

## Security

Use of `mdast-comment-marker` does not involve [hast][], user content, or change
the tree, so there are no openings for [cross-site scripting (XSS)][xss]
attacks.

## Related

*   [`mdast-zone`](https://github.com/syntax-tree/mdast-zone)
    — change or replace a section marked by comments

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

[build-badge]: https://github.com/syntax-tree/mdast-comment-marker/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/mdast-comment-marker/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-comment-marker.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-comment-marker

[downloads-badge]: https://img.shields.io/npm/dm/mdast-comment-marker.svg

[downloads]: https://www.npmjs.com/package/mdast-comment-marker

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=mdast-comment-marker

[size]: https://bundlejs.com/?q=mdast-comment-marker

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[license]: license

[author]: https://wooorm.com

[health]: https://github.com/syntax-tree/.github

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[node]: https://github.com/syntax-tree/unist#node

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[hast]: https://github.com/syntax-tree/hast

[remark-lint]: https://github.com/remarkjs/remark-lint

[mdast-zone]: https://github.com/syntax-tree/mdast-zone

[api-comment-marker]: #commentmarkervalue

[api-marker]: #marker

[api-marker-parameters]: #markerparameters

[api-marker-parameter-value]: #markerparametervalue
