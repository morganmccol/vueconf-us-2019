# Rahul Kadyan

## Demystifying: The Dark Art of SFC Compilation

View [slides](https://vueconf19-compiler.surge.sh/).

- Compilation process
  - parse SFC to blocks
  - compile each block (script style template)
  - combine all blocks
- Testable components

    ```html
    <button data-test="login button">
    ```

  - data-test has no meaning in production
  - is there a way to avoid doing this or remove it in production?
- What is SFC
  - An html like file with a .vue extension (script, template, style)
- Benefits of SFC
  - one file per component
  - style in the same file
  - it's a mini application
- Browsers don't understand SFC
  - convert, not compile, no transpile into JS
- Compilation process
  - parse sfc to blocks
    - vue-template-compiler
  - compile
    - script block
      - JSX extends JS, inherently flexible, empowers end user
    - style block
    - template block
      - Templates extends HTML, inherently declarative, empowers build tools
      - Template -> parse it -> AST -> codegen(AST) -> Render function
  - convert into render function
  - combine all blocks
    - every vue file expects script with render function in it
- Handwriting render functions
  - https://template-explorer.vuejs.org

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

- Summary
  - compiler is a series of simple steps
  - override/extend compiler (postTransformNode)
  - vue cli config allows extending compiler
  - everything is possible!
- New in Vue 3.0
  - Changing compiler behavior a little bit
  - Can debug your templates