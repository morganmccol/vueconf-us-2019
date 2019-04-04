# Rahul Kadyan

## Demystifying: The Dark Art of SFC Compilation

View [slides](https://vueconf19-compiler.surge.sh/).

* Compilation Process
  * Parse SFC to blocks
  * Compile each block (script, style, template)
  * Combine all blocks
* Testable Components
* What is SFC?
  * An HTML like file with `.vue` extension
  * One file per component
  * Stlye in the same file
  * Uses just HTML, CSS, and JS
* Browsers don’t under SFC
  * We compile/convert SFC to JavaScript
* JSX
  * Extends JavaScript
  * Inherently Flexible
  * Empowers the end user
* Templates
  * Extends HTML
  * Inherently declarative
  * Empowers build tools
  * Interpolation or Directives
  * Template -> parse(template) -> Abstract Syntax Tree -> codegen(AST) -> Render Function
* Summary
  * Compiler is a series of simple steps
  * Override/extend compiler (postTransformNode)
  * Vue CLI config allows extending compiler
  * Everything is possible!
* New in Vue 3.0
