# Sarah Drasner

## The Future of Web Animation

Microsoft

Web is for communicating
- Why concerned about animation?
- Think about animation as a kid that made you feel fappy, sad, fearful, curious?
  - Probably was a pixar film
  - Emotions are attached to our limbic system and makes it easier to recall
  - cartoons give color and shape and bring life to our internal worlds
  - anything can happen

Hooks:
- Reusing pieces of animation across our application
- Hooks moving over to composition components, so syntax is changing, but concept is the same
- "Dinner's on me" food app
- Why aren't we just using mixins?
  - With hooks:
    - They allow us to pass state from one another and can't do this mixins, components are aware of each other
    - THey make it explict where logic is coming from
    - CSS-Tricks.com/what-hooks-mean-for-vue

Page transitions
- Cognitive load needs to be reduced for the user
- Jira's new layout uses animation to show how to remap grouped components
- going to use Nuxt to show how to do this (Recall: Nuxt is good for static pages)
- `<Transition-Group />`
  - Flip under the hood to prevent repainting to make it performant (first last invert play)
    - pain in the butt to impliment, and this is abstracted away by vue
  - page-transitions.com

Responsive Webdesign
- Flexbox, media queries, ...
- Make 3D animations on the web?
  - what if browser's had a spec to do this?
- 3.dj
- What's not important is how to do this right now, but focus on the what ifs on what we could do in the near future
  - Josh Carpenter on Twitter, some up and coming chrome dev tools has features support VR primitives to make 3d experiences
    - made only with HTML elements
    - Augmented VR (ARKIT 2.0)
      - what if this was available to us in the browser
      - AR Chemistry
      - Notice this is easier to recall with animation than reading from a textbook
        - reduces cognitive load to nothing
      - what if you were trying to learn the piano and had AR to help you learn it like guitar hero mapping notes to that style
- Static 2D is an abstraction of 3D
  - using motion and 3D is a lot more intuitive

Voice controlled experiences on the web:
- hands free experiences on the web
  - machine learning cognitive services to try out that connects a vue application to luis (language understanding)
    - map words to emotions
      - and animations
- [GitHub - sdras/three-vue-pattern: A biofeedback visualization made with Three.js, Vue, and LUIS (cognitive services)](https://github.com/sdras/three-vue-pattern)

Why are we in a rut:
- why do we make the same site over and over
- why do we feel nothing and no emotions tied to it
- why do we still use table like layouts when we can do so much more?
- time to expand our minds beyond the rectangles of the past
- Think bigger on the things you're going to build next
- how to create something that doesn't already exist
