# unified-message-control

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[unified][] utility to enable, disable, and ignore messages.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`messageControl(tree, options)`](#messagecontroltree-options)
    *   [`Marker`](#marker)
    *   [`MarkerParser`](#markerparser)
    *   [`Options`](#options)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a lego block that is meant to be extended, such as is done by
[`remark-message-control`][remark-message-control], so that lint messages can be
controlled from content.

## When should I use this?

You can use this if you’re building an ecosystem like remark for some different
content type, and want to let authors control messages from that content.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install unified-message-control
```

In Deno with [`esm.sh`][esmsh]:

```js
import {messageControl} from 'https://esm.sh/unified-message-control@5'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {messageControl} from 'https://esm.sh/unified-message-control@5?bundle'
</script>
```

## Use

Say our document `example.md` contains:

```markdown
<!--foo ignore-->

## Heading
```

…and our module `example.js` looks as follows:

```js
import {commentMarker} from 'mdast-comment-marker'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import {read} from 'to-vfile'
import {unified} from 'unified'
import {messageControl} from 'unified-message-control'
import {reporter} from 'vfile-reporter'

const file = await read('example.md')

await unified()
  .use(remarkParse)
  .use(remarkStringify)
  .use(function () {
    return function (tree, file) {
      file.message('Whoops!', tree.children[1], 'foo:thing')
    }
  })
  .use(messageControl, {
    marker: commentMarker,
    name: 'foo',
    test: 'html'
  })
  .process(file)

console.error(reporter(file))
```

…now running `node example.js` yields:

```markdown
example.md: no issues found
```

## API

This package exports no identifiers.
It exports the identifier [`messageControl`][api-message-control].

### `messageControl(tree, options)`

Let comment markers control messages.

###### Parameters

*   `tree` ([`Node`][node])
    — tree
*   `options` ([`Options`][api-options])
    — configuration (required)

###### Returns

Nothing (`undefined`).

### `Marker`

Comment marker (TypeScript type).

###### Notes

The **disable** keyword turns off messages.
For example:

```markdown
<!--lint disable list-item-bullet-indent strong-marker-->

*   **foo**

A paragraph, and now another list.

  * __bar__
```

The **enable** keyword turns on messages.
For example:

```markdown
<!--lint enable strong-marker-->

**foo** and __bar__.
```

The **ignore** keyword turns off messages in the following node.
After the end of the following node, messages are turned on again.
For example:

```markdown
<!--lint ignore list-item-bullet-indent strong-marker-->

*   **foo**
    * __bar__
```

###### Fields

*   `name` (`string`)
    — name of marker
*   `attributes` (`string`)
    — raw values (space-separated); the first should be `enable`, `disable`, or
    `ignore`, the rest are optional rule identifiers

### `MarkerParser`

Parse a possible comment marker (TypeScript type).

###### Parameters

*   `node` ([`Node`][node])
    — potential marker

###### Returns

`Marker` ([`Marker`][marker], optional).

### `Options`

Configuration (TypeScript type).

###### Notes

The given `name` defines which comments work.
Assuming there’s a `marker` configured that parses HTML comments such as
`<!--x y z-->` to a mark with `name: 'x'`, then giving `name: 'x'` will
use comments such as:

```html
<!--alpha ignore-->
```

When `known` is given, a warning is shown when unknown rules are controlled.
For example, `{name: 'alpha', known: ['bravo']}` results in a warning (for
`charlie`):

```html
<!--alpha ignore charlie-->
```

###### Fields

*   `enable` (`Array<string>`, optional)
    — list of `ruleId`s to initially turn on; used if `reset` is `true`
*   `disable` (`Array<string>`, optional)
    — list of `ruleId`s to initially turn off; used if `reset` is not `true`
*   `known` (`Array<string>`, optional)
    — list of allowed `ruleId`s
*   `file` ([`VFile`][vfile], **required**)
    — corresponding file
*   `marker` ([`MarkerParser`][api-marker-parser], **required**)
    — parse nodes to [`Marker`][api-marker] objects
*   `name` (`string`, **required**)
    — name of markers that can control the message sources
*   `reset` (`boolean`, default: `false`)
    — whether to treat all messages as turned off initially
*   `source` (`Array<string>` or `string`, default: `options.name`)
    — [sources][vfile-message-fields] that can be controlled with markers
*   `test` ([`Test`][unist-util-is-test], optional)
    — test for possible markers

## Types

This package is fully typed with [TypeScript][].
It exports the additional types
[`Marker`][api-marker],
[`MarkerParser`][api-marker-parser], and
[`Options`][api-options].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`unified-message-control@^5`, compatible with Node.js 16.

## Contribute

See [`contributing.md`][contributing] in [`unifiedjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/unifiedjs/unified-message-control/workflows/main/badge.svg

[build]: https://github.com/unifiedjs/unified-message-control/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/unifiedjs/unified-message-control.svg

[coverage]: https://codecov.io/github/unifiedjs/unified-message-control

[downloads-badge]: https://img.shields.io/npm/dm/unified-message-control.svg

[downloads]: https://www.npmjs.com/package/unified-message-control

[size-badge]: https://img.shields.io/bundlejs/size/unified-message-control

[size]: https://bundlephobia.com/result?p=unified-message-control

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/unifiedjs/unified/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[health]: https://github.com/unifiedjs/.github

[contributing]: https://github.com/unifiedjs/.github/blob/main/contributing.md

[support]: https://github.com/unifiedjs/.github/blob/main/support.md

[coc]: https://github.com/unifiedjs/.github/blob/main/ncode-of-conduct.md

[license]: license

[author]: https://wooorm.com

[marker]: https://github.com/syntax-tree/mdast-comment-marker#marker

[unified]: https://github.com/unifiedjs/unified

[remark-message-control]: https://github.com/remarkjs/remark-message-control

[vfile]: https://github.com/vfile/vfile

[node]: https://github.com/syntax-tree/unist#node

[unist-util-is-test]: https://github.com/syntax-tree/unist-util-is#api

[vfile-message-fields]: https://github.com/vfile/vfile-message/tree/main#fields

[api-marker]: #marker

[api-marker-parser]: #markerparser

[api-message-control]: #messagecontroltree-options

[api-options]: #options
