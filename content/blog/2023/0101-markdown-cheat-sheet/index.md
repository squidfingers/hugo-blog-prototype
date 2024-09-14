---
title: Markdown cheatsheet
date: 2023-01-01T00:00:00Z
tags:
  - cheatsheet
keywords:
  - markdown
params:
  author: john
---

This Markdown cheat sheet provides a quick overview of Markdown syntax elements.

## Headings

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Emphasis

---

_Emphasis_, aka _italics_, with asterisks or underscores.

**Strong emphasis** aka **bold**, with two asterisks or underscores.

**_Combined emphasis_** with asterisks and underscores.

~~Strikethrough~~ with two tildes.

## Images

---

{{< blog-img image.jpg >}}Virginia opossum, _Didelphis virginiana_, (mother with
nine young){{< /blog-img >}}

## Lists

---

### Ordered:

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
   1. 1st.
   1. 2nd.
   1. 3rd.

### Unordered:

- This is a list item
  - This is a nested list item
    - This is a nested list item
  - This is another list item
- This is another list item

## Links

---

[This is a link](https://www.example.com).

[This link](https://www.example.com "Link Title") has a title attribute.

## Tables

---

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

## Blockquotes

---

> Perfection is achieved, not when there is nothing more to add, but when there
> is nothing left to take away.

You can reference a footnote like this.

> If you don't have time to do it right, when will you have time to do it over?
> [^1]

[^1]: https://www.brainyquote.com/quotes/john_wooden_384653

## Code

---

`Inline code` has back-ticks around it.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Horizontal Rules

---

Horizontal rule uses three or more hyphens (`---`), asterisks (`***`), or
underscores (`___`).

## Footnotes
