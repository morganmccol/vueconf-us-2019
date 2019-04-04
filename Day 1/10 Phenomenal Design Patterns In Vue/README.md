# Jacob Schatz

## Phenomenal Design Patterns In Vue

View [slides](https://www.dropbox.com/s/t3wv96w03fpre1j/VueJSPhenominalDesignPatterns.key?dl=0).

* Gang of Four
  * Authors of Design Patterns: Elements of Reusable Object-Oriented Software
  * Dive into Design Patterns
  * Design Patterns help resolve complex patterns
* Instead of a ton of forms, can make one vue file with a builder and director
  * Use the builder design pattern when you want your code to be able to create different representations of some product
    * For example, a stone, brick, and wood house
  * Builder has all things to build things
  * Director knows what he wants built
* **FormBuilder Component**
  * Uses render(h) method to build components dynamically through code
  * Takes classes from form director and builder to build templates
* https://codesandbox.io/s/rmmprvonnm
* **Vuex components are not reusable**
  * When tied to the store, must distribute store as well which is a problem
  * App is huge due to one vuex file
* **Solution: Command**
  * Command is a behavioral design pattern that turns a request not a stand-alone object that contains all information on the request
  * GUIs shouldn’t access business logic
  * Views should not access business logic directly
  * Business time through logic layer
  * One interface, no parameters
  * GUI doesn’t call commands
  * Analogy of talking to server for food order instead of going to talk to the chef directly
* Alternative to VueX: Commander
  * https://vuecommander.com/
* Undoing a command
  * Command vs Mementos design pattern
  * This reminds me a bit of CQRS
    * [Command Query Responsibility Segregation (CQRS)](https://microservices.io/patterns/data/cqrs.html)
    * [Event Sourcing](https://microservices.io/patterns/data/event-sourcing.html)
