## Local development

```bash
npm run dev
```

## Blog post thumbnail and cover images

Thumbnail and cover images for a blog post can be defined as frontmatter params.
These images will be processed to the appropriate size, so the same source image
can be use for both images. For example:

```yaml
params:
  thumbnail: image.jpg
  cover: image.jpg
```

If `.Params.thumbnail` or `.Params.cover` are not set, Hugo will look for a page
resource named `thumbnail.*` or `cover.*`.

If page resources do not exist for the thumbnail and cover images, then they
will fallback to default images located `/static/blog/` directory.

## Blog post content images

If you need to insert an image into the content of a blog post, you can use the
`blog-img` shortcode. This shortcode will process the image to the appropriate
size. For example:

Without caption

```markdown
{{< blog-img image.jpg />}}
```

With caption

```markdown
{{< blog-img image.jpg >}}Image **caption**{{< /blog-img >}}
```

## Author images

An author avatar can be defined by adding an image resource to the page bundle,
and referencing it in the `avatar` frontmatter param. The image will be
processed to the appropriate size.

```yaml
params:
  avatar: image.jpg
```

## Open Graph images

Open Graph images for a page can be defined in a couple ways.

An image can be defined in the frontmatter `images` array. It can reference a
page resource, or can also be an absolute url from the static directory. For
example:

```yaml
images: [image.jpg]
```

If the `images` array is empty or undefined, and there is a page resource image
with file name matching `feature.*`, `cover.*`, or `thumbnail.*`, it will be
used as the Open Graph image.
