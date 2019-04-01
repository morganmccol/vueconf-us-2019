# Lightning Talks

## Chris DeMars

### Accessibility for Everyone Or Accessibility 101

20% of people have impairments
Web accessibility means that people with disabilities can use the Web
- Web accessibility means that **everyone** can use the web

Types of impairments:
- Hearing
  - two types
- Vision
  - color blindness, field of vision
- Cognitive
  - math & reading comprehension
- Mobility
- Temporary
  - parent of new born child, broken hand, etc

HTML
- semantic markup is accessible by default
- if you have to retroactively add in that's still good to do
- alt attributes needed for images and the info to convey with the image is suppose to say
  - should be short AND descriptive
- aria-label for non-contextual elements
  - screen readers use these to mark close x and so on
  - social media icons should have them too, otherwise user won't know what is there
- colors matter!
  - check contrast of foreground and background
- screen readers
- axe the accessibility engine
  - web.dev in browswer
  - chrome (lighthouse dev tools)
- eslint-plugin-vue-a11y
 Accessibility is a must, you should care

## Casie Siekman

### Vue + i18n = Fun!

Why make the effort to translate?
- Duh. Why wouldn't you
- aside from the obvious - it helps make you a better developer
  - can't compare strings if you are translating it
  - so you'll need a more dynamic approach
- could be a good first project for a new team member or greener dev

Setup:
- npm install vue-i18n
- setup in main.js
- create a way to choose the correct browser language (for exmaple, create an i19n index file)
- wwroot folder -> languages -> en.lang.son, es.lang.json, etc
  - keys in file same, languge text as value
- `$t` is the moniker for translating with i18n framework
- Can insert variables into string
  - component interpolation
    - in vue-i18n docs `: (variable) :`

## Doug Steinberg

### Trying Out Cloudinary's New Vue SDK

What is Cloudinary? 
- It's like Amazon S3 and photoshoped combined
- You can upload and then crop, add watermarks, etc

## Lucas Still

### Sub-second Vue

Full Stack Architect, Modus Create
Tech:
- Service Worker (won't increase first page load, but increases subsequent ones)
  - PWA uses them
- Webpack (job is to bundle your code)
  - remove dead code
  - minify
  - chunk
- CDN
  - Amazon cloudfront
  - Why?
    - Might not be able to serve files fast enough to customers and latency can be an issue
    - Servers positioned in key locations around the world
      - take static files and serve them to clients as requested
      - so that browser won't have to hit your servers but can hit the closest
- Compression (CDNs often will compress for you)
  - gzip, brotli, graphics
    - brotli algorithm is smaller (30-40 kb instead of 50 with gzip). Takes longer. Gzip better for dynamic content
    - PNG is already compressed
      - SVG is better though
- SSR (server side rendering)
  - First paint
    - Go from white to see website
  - Time to first interact
  - inline critical css
  - time to interactive
- Edge Computing
  - Like CDN, but serves dynamic files
- https://github.com/modusCreateOrg/vue-lambda

## Charles Villard

### Ramp up to Vue

- Talked about how much he appreciates the vue community

## Jennifer Bland

### Using Graphs and Charts in Vue.js

- Talked about a plugin for graphs
