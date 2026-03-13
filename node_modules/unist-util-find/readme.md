# unist-util-find

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[unist][] utility to find a node.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`find(tree, condition)`](#findtree-condition)
    *   [`TestFn`](#testfn)
    *   [`TestObj`](#testobj)
    *   [`TestStr`](#teststr)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a utility that takes any [unist][] (whether mdast, hast, etc)
node and returns the first node that matches a given condition.

## When should I use this?

This utility is the simplest way to find a single node in a tree.

For much more powerful tree walking, see [`unist-util-visit`][visit].

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install unist-util-find
```

In Deno with [`esm.sh`][esmsh]:

```js
import {find} from 'https://esm.sh/unist-util-find@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {find} from 'https://esm.sh/unist-util-find@3?bundle'
</script>
```

## Use

```js
import {fromMarkdown} from 'mdast-util-from-markdown'
import {find} from 'unist-util-find'

const tree = fromMarkdown('Some _emphasis_, **strongness**, and `code`.')

// String condition:
console.log(find(tree, 'value'))

// Object condition:
console.log(find(tree, {value: 'emphasis'}))

// Function condition:
console.log(
  find(tree, function (node) {
    return node.type === 'inlineCode'
  })
)
```

Yields:

```js
// string condition: 'value'
{
  type: 'text',
  value: 'Some ',
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 6, offset: 5 }
  }
}

// object condition: { value: 'emphasis' }
{
  type: 'text',
  value: 'emphasis',
  position: {
    start: { line: 1, column: 7, offset: 6 },
    end: { line: 1, column: 15, offset: 14 }
  }
}

// function condition: function (node) { return node.type === 'inlineCode' }
{
  type: 'inlineCode',
  value: 'code',
  position: {
    start: { line: 1, column: 38, offset: 37 },
    end: { line: 1, column: 44, offset: 43 }
  }
}
```

## API

This package exports the identifier [`find`][api-find].
There is no default export.

### `find(tree, condition)`

Find a node in `tree` matching `condition`.

###### Parameters

*   `tree` ([`Node`][node])
    — tree to search in
*   `condition` ([`TestFn`][api-test-fn], [`TestObj`][api-test-obj], or
    [`TestStr`][api-test-str])
    — condition used to test each node

###### Returns

The first node ([`Node`][node]) that matches condition, or `undefined` if no
node matches

### `TestFn`

Find the first node for which function returns `true` when passed node as
argument (TypeScript type).

###### Parameters

*   `node` ([`Node`][node])
    — node to check

###### Returns

Whether `node` matches your condition (`boolean`).

### `TestObj`

Find the first node that has matching values for all properties of object
(TypeScript type).

###### Type

```ts
type TestObj = Record<string, unknown>;
```

### `TestStr`

Find the first node with a truthy property matching `string` (TypeScript type).

###### Type

```ts
type TestStr = string;
```

## Types

This package is fully typed with [TypeScript][].
It exports the additional types [`TestFn`][api-test-fn],
[`TestObj`][api-test-obj], and [`TestStr`][api-test-str].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `unist-util-find@^3`,
compatible with Node.js 16.

## Security

This project is safe.

## Related

*   [`unist-util-visit`](https://github.com/syntax-tree/unist-util-visit)
    — visit nodes

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Richard Smith-Unna][author]

<!-- Definition -->

[build-badge]: https://github.com/syntax-tree/unist-util-find/workflows/main/badge.svg

[build]: https://github.com/syntax-tree/unist-util-find/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/unist-util-find.svg

[coverage]: https://codecov.io/github/syntax-tree/unist-util-find

[downloads-badge]: https://img.shields.io/npm/dm/unist-util-find.svg

[downloads]: https://www.npmjs.com/package/unist-util-find

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=unist-util-find

[size]: https://bundlejs.com/?q=unist-util-find

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://twitter.com/blahah404

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contributing]: https://github.com/syntax-tree/.github/blob/main/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/main/support.md

[coc]: https://github.com/syntax-tree/.github/blob/main/code-of-conduct.md

[unist]: https://github.com/syntax-tree/unist

[visit]: https://github.com/syntax-tree/unist-util-visit

[node]: https://github.com/syntax-tree/unist#node

[api-find]: #findtree-condition

[api-test-fn]: #testfn

[api-test-obj]: #testobj

[api-test-str]: #teststr
