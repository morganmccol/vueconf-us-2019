# tessa

## Back to the Vueture: Stuck in the Event Loop

- Syncopation
  - a disturbance or interruption of the regular flow of rhythm
  - it is hard
  ```javascript
  setTimeout(_ => {
    // $nextTick is like syncopation
  }
  ```
- time travel music and code don't always move in a given order and it can be hard
- Temporal experiment #1
  - Calibrate the clocks for travel
    - destination time must be set to a future time
    - present time must change to match destination time
    - last departed time must change to the present time
  - nextTick
    - hard to get this working when need to call multiple times
- Event loop queues 
  - task
    - marty and doc
  - flush (run on schedule -- ticks)
    - buses
  - microtask(run when tasks aren't running but when they start need to wait before the task can continue, so marty can't walk infront of a car)
    - cars
- $nextTick is a way to call next tick within a component
  - nextTick function itself is complex, just know it works
- flushSchedulerQueue called by queueWatcher function

What we can extrapolate
- nextTick callbacks always run in the flush queue
  - the queue is flushed before the dom updates
  - all nextTicks nested at the same level will run top-to-bottom
- Flush queues generated ...

Trash Brain
- done something before but don't remember it enough or context is different so you'll feel deja vu but can't pin point it
- memories are formed by repetitive experiences and connecting neurons
  - trash brain making the wrong connections (episodic instead of in semantic memory)

Ways to mitigate trash brain
- limit scope
  - when feeling out of depth learning something new, and not spend time on unnecessary details
- form a mental model of the bigger picture
- remind yourself to stay flexible
  - the mental model you make is just a theory and not set in stone, it may not match reality
    - take a step back and re-examine your mental model
    - don't fall into confirmation bias
- recorrd hypotheses and their results
  - as coding is not straightforward, it goes into cicles and spirals, so need to keep track of stuff and make sure you are making progress
- Remember it's not the end of the world
  - keep track of bigger context not just in terms of the code but in your life in general

nextTick:
- a type of microtask
- gets bucketed with other nextTicks
- runs at a predictable (ish) time
- is after the DOM **updates** not the DOM **renders** **<- key takaway**
- is like CSS (fun), you can override previous changes, last one wins

Example will be posted on:
- tessa.dev
