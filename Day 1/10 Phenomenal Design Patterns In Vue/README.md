# Jacob Schatz

## Phenomenal Design Patterns In Vue

View [slides](https://www.dropbox.com/s/t3wv96w03fpre1j/VueJSPhenominalDesignPatterns.key?dl=0).

Staff Developer Gitlab
  - started frontend team at GitLab
  - Meltano Data lifecycle framework
    - use Vue.js
    
Design patterns are kind of magical to him, and he shows a magic trick
GOF
- Dive Into Design Patterns -- Alexander Shivets (easy intro to the concept)

Here's a problem:
- many complex forms
  - component for each form
  - and then have tons of forms and tons of components
  - What if we could have FormBuilder.js
  - Builder Design Pattern
    - when want your code to be able to create different representations of some product
    - have a builder
      - has all the parts
    - have a director
      - knows what he wants built
  - jacobschatz.com/vue-bdp.html (bdp === builder design pattern)
- Vuex componets are not reusable
  - because they are tied to a store
    - which then you can't distribute it since you need to distribute the store
      - can solve in vuex
      - but we'll solve it with design patterns
  - Command Design Pattern (his favoriate)
    - GUI shouldn't access business logic
    - a lot of times a button calls an update method. It has access to business logic
      - instead we can do it through a logic layer
        - Save command called from button that then calls the actual business logic
        - One interface, no parameters
        - Save command has one method called execute
        - GUI doesn't call commands
        - Observer Design pattern
          - CLick a button
            - dispatch event
              - menu.save, gui.save, shortcut.save
              - all go to save command
                - this calls execute for business logic method
          - Like using a server at a restaurant acting as an intermediary between you and the chef. It allows for creating a queue of orders
            - easy to undo as well
            - everything encapsulated in the queue
            - VueCommander.com to encapsulate observer and command design pattern
- Commands, Components, Context
  - tied together with VueCommander
  - Undo done with command pattern and momento pattern (momento pattern is a bit simpler to use)
    - Can use event sourcing (for undo) as we're using command pattern
    - This reminds me a bit of CQRS: [Command Query Responsibility Segregation (CQRS)](https://microservices.io/patterns/data/cqrs.html)
    - [Event sourcing](https://microservices.io/patterns/data/event-sourcing.html)
- Observer design patter is a bit different from Pub/Sub