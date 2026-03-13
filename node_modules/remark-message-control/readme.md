<!--lint disable no-html-->

# remark-message-control

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[remark][]** plugin to enable, disable, and ignore messages with comments.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(remarkMessageControl, options)`](#unifieduseremarkmessagecontrol-options)
    *   [`Options`](#options)
*   [Syntax](#syntax)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin that lets authors write
comments in markdown to show and hide messages.

## When should I use this?

You can use this package when you’re building a linter such as
[`remark-lint`][remark-lint].
But you probably don’t need to, because `remark-lint` already exists and it uses
this package.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install remark-message-control
```

In Deno with [`esm.sh`][esmsh]:

```js
import remarkMessageControl from 'https://esm.sh/remark-message-control@8'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkMessageControl from 'https://esm.sh/remark-message-control@8?bundle'
</script>
```

## Use

Say we have the following file `example.md`:

```markdown
<!--foo ignore-->

## Neptune
```

…and a module `example.js`:

```js
/**
 * @typedef {import('mdast').Root} Root
 */

import {remark} from 'remark'
import remarkMessageControl from 'remark-message-control'
import {read} from 'to-vfile'
import {reporter} from 'vfile-reporter'

const file = await remark()
  .use(function () {
    /** @param {Root} tree */
    return function (tree, file) {
      file.message('Whoops!', {
        place: tree.children[1]?.position,
        ruleId: 'thing',
        source: 'foo'
      })
    }
  })
  .use(remarkMessageControl, {name: 'foo'})
  .process(await read('example.md'))

console.error(reporter(file))
```

…then running `node example.js` yields:

```markdown
example.md: no issues found
```

> 👉 **Note**: without `remarkMessageControl`, we’d see:
>
> ```txt
> example.md
> 3:1-3:11 warning Whoops! thing foo
>
> ⚠ 1 warning
> ```

## API

This package exports no identifiers.
The default export is [`remarkMessageControl`][api-remark-message-control].

### `unified().use(remarkMessageControl, options)`

Enable, disable, and ignore messages with comments.

###### Parameters

*   `options` ([`Options`][api-options], **required**)
    — configuration

###### Returns

Transform ([`Transformer`][unified-transformer]).

### `Options`

Configuration (TypeScript type).

###### Fields

*   `enable` (`Array<string>`, optional)
    — list of `ruleId`s to initially turn on;
    used if `reset` is `true`
*   `disable` (`Array<string>`, optional)
    — list of `ruleId`s to initially turn off;
    used if `reset` is not `true`
*   `known` (`Array<string>`, optional)
    — list of allowed `ruleId`s
*   `name` (`string`, **required**)
    — name of markers that can control the message sources
*   `reset` (`boolean`, default: `false`)
    — whether to treat all messages as turned off initially
*   `source` (`Array<string>` or `string`, default: `options.name`)
    — [sources][vfile-message-fields] that can be controlled with markers

<!--Old name of section-->

<a name="markers"></a>

## Syntax

This plugin looks for comments in markdown (MDX is also supported).
If the first word in those comments does not match `options.name`, the comment
is skipped.
The second word is expected to be `disable`, `enable`, or `ignore`.
Further words are rule identifiers of messages which are configurated.

In EBNF, the grammar looks as follows:

<pre><code class=language-ebnf><a id=s-marker href=#s-marker>marker</a> ::= <a href=#s-identifier>identifier</a> <a href=#s-whitespace>whitespace</a>+ <a href=#s-keyword>keyword</a> <a href=#s-ruleidentifiers>ruleIdentifiers</a>?
<a id=s-identifier href=#s-identifier>identifier</a> ::= <a href=#s-word>word</a>+ /* restriction: must match `options.name` */
<a id=s-keyword href=#s-keyword>keyword</a> ::= 'enable' | 'disable' | 'ignore'
<a id=s-ruleidentifiers href=#s-ruleidentifiers>ruleIdentifiers</a> ::= <a href=#s-word>word</a>+ (<a href=#s-whitespace>whitespace</a>+ <a href=#s-word>word</a>+)*
<a id=s-whitespace href=#s-whitespace>whitespace</a> ::= ' ' | '\t' | '\r' | '\n' | '\f'
<a id=s-word href=#s-word>word</a> ::= <a href=#s-letter>letter</a> | <a href=#s-digit>digit</a> | <a href=#s-punctuation>punctuation</a>
<a id=s-letter href=#s-letter>letter</a> ::= <a href=#s-letterlowercase>letterLowercase</a> | <a href=#s-letteruppercase>letterUppercase</a>
<a id=s-punctuation href=#s-punctuation>punctuation</a> ::= '-' | '_'
<a id=s-letterlowercase href=#s-letterlowercase>letterLowercase</a> ::= 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
<a id=s-letteruppercase href=#s-letteruppercase>letterUppercase</a> ::= 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
<a id=s-digit href=#s-digit>digit</a> ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
</code></pre>

Which keyword is used defines how messages with those rule identifiers are
handled:

###### `disable`

The **disable** keyword turns off all messages of the given rule identifiers.
When without identifiers, all messages are turned off.

For example, to turn off certain messages:

```markdown
<!--lint disable list-item-bullet-indent strong-marker-->

*   **foo**

A paragraph, and now another list.

  * __bar__
```

###### `enable`

The **enable** keyword turns on all messages of the given rule identifiers.
When without identifiers, all messages are turned on.

For example, to enable certain messages:

```markdown
<!--lint enable strong-marker-->

**foo** and __bar__.
```

###### `ignore`

The **ignore** keyword turns off all messages of the given `ruleId`s occurring
in the following node.
When without `ruleId`s, all messages are ignored.

Messages are turned on again after the end of the following node.

For example, to turn off certain messages for the next node:

```markdown
<!--lint ignore list-item-bullet-indent strong-marker-->

*   **foo**
  * __bar__
```

## Types

This package is fully typed with [TypeScript][].
It exports the additional type [`Options`][api-options].

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line, `remark-message-control@^8`,
compatible with Node.js 16.

This plugin works with `unified` version 6+ and `remark` version 7+.

## Security

Use of `remark-message-control` does not involve **[rehype][]** (**[hast][]**)
or user content so there are no openings for [cross-site scripting
(XSS)][wiki-xss] attacks.
Messages may be hidden from user content though, causing builds to fail or pass,
or changing a report.

## Related

*   [`remark-lint`][remark-lint]
    — plugin to lint code style
*   [`mdast-comment-marker`](https://github.com/syntax-tree/mdast-comment-marker)
    — mdast utility to parse comment markers

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/remarkjs/remark-message-control/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-message-control/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-message-control.svg

[coverage]: https://codecov.io/github/remarkjs/remark-message-control

[downloads-badge]: https://img.shields.io/npm/dm/remark-message-control.svg

[downloads]: https://www.npmjs.com/package/remark-message-control

[size-badge]: https://img.shields.io/bundlejs/size/remark-message-control

[size]: https://bundlejs.com/?q=remark-message-control

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[hast]: https://github.com/syntax-tree/hast

[rehype]: https://github.com/rehypejs/rehype

[remark]: https://github.com/remarkjs/remark

[remark-lint]: https://github.com/remarkjs/remark-lint

[typescript]: https://www.typescriptlang.org

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified#transformer

[vfile-message-fields]: https://github.com/vfile/vfile-message#fields

[wiki-xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-options]: #options

[api-remark-message-control]: #unifieduseremarkmessagecontrol-options
