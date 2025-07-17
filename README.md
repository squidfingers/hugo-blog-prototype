## Local development

```bash
npm run dev
```

## Blog post thumbnail and cover images

To associate a cover, thumbnail, or feature image to a blog post, you do not
have to specify them in the frontmatter. You can simply name them `cover`,
`thumbnail`, or `feature`, place them in the page bundle, and they will
automattically be used. The images will be processed to the appropriate size.
For example:

```text
blog/
└── 2024/
    └── 0102-my-blog-post
        ├── cover.jpg
        ├── index.md
        └── thumbnail.jpg
```

If a thumbnail image is not present in the page bundle, then the cover image
will be used, and the image will be cropped into a square.

If the blog post is featured on the home page, and the feature image is not
present in the page bundle, then the cover image will be used.

If you need to name your images another way, you can reference the image names
in the frontmatter:

```yaml
params:
  cover: hero.png
  feature: hero-cropped.png
  thumbnail: tn.png
```

If `.Params.cover` or `.Params.thumbnail` are not set, and `cover.*` and
`thumbnail.*` images are not present in the page bundle, then default images
located in the `/assets/blog/` directory will be used.

## Blog post content images

To show an image in the content of a blog post, just use Markdown syntax. The
image will be scaled down to the appropriate size if it is too large. For
example:

```markdown
![My image](image.jpg)
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
