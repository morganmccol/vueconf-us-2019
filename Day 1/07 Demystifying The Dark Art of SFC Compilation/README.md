# Rahul Kadyan

## Demystifying: The Dark Art of SFC Compilation

View [slides](https://vueconf19-compiler.surge.sh/).

Compilation process
- parse SFC to blocks
- Compile each block (script style template)
- combine all blocks

Testable components
```javascript
<button data-test="login button">
...
```
data-test has no meaning in production, is there a way to avoid doing this or remove it in production?

What is SFC:
- An html like file with a .vue extension (script, template, style)

Benefits of SFC
- one file per component
- style in the same file
- it's mini application
- ...

Browsers don't understand SFC
- convert, not compile, no transpile into JS
- Compilation process
  - parse sfc to blocks
    - vue-template-compiler
  - compile 
    - script block
    - style block
    - template block
      - There is some similar/different concepts between:
        - JSX extends JS, inherently flexible, empowers end user
        - Templates extends HTML, inherently declarative, empowers build tools
      - Template -> parse it -> AST -> codegen(AST) -> Render function
        - parsing
          - into AST
            - root div
              - has attributes
              - has children
                - they have tokens
                - text
        - convert into render function
  - combine all blocks
    - every vue file expects script with render function in it
- testable components
  ```javascript
  function postTransformNode(node) {
    if (node.attrs) {
      node.attrs = node.attrs.filter(
        ({ name}) => {
          remove test-data
        }
    }
  },
  // do recursively for all nodes
  ```
- Handwriting render function
  - https://template-explorer.vuejs.org

Summary
- Compiler is a series of simple steps
- override/extend compiler (postTransformNode)
- vue cli config allows extending compiler
- everything is possible!

New in Vue 3.0
- Changing compiler behavior a little bit. Can debug your templates. 
  - vueconf19-compiler.surge.sh
  - github.com/znck/talks
  - znck.dev
  - twitter.com/znck0
