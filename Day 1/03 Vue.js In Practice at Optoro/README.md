# Andrew Krawchyk

## Vue.js In Practice at Optoro

* Handle product return optimization by reducing waste in the retail industry
* History of Vue at Oproro
  * Been in production for two years at blinq.com
  * Old school javascript with lots of globals and hand-holding
  * Switched from Angular to Vue due to complexity and burden to development
  * Used vue incrementally by adding a hook to all elements for components
    * Added vue in a small, low risk spot to get data
    * Not business critical features that affected user experience
  * NPM Scripts are a great way to decouple how the project is built
* Pave the cowpaths
  * **Monorepo, micro-frontend**
  * Projects are fleeting and don’t have to be maintained after release
  * Enterprise software is different
  * Migrated away from bower and into npm
  * Decouple framework from application code so users aren’t forced to upgrade
  * **Use vue-cli to improve cross-project consistency**
    * Default presets into json package
    * Configure error reporting, browserslist
    * `npx @optoro/create-vue-optics-app name-of-project`
* Build a @vue/cli plugin
  * Webpack deps/config
  * Third-party dependencies
  * Bulky custom scripts
  * Cross-project consistency
* Success
  * Incremental adoption
  * Iterative development
  * **Knowledge sharing: share useful techniques and patterns for an hour each week**
* Released a new product for their app in 3 weeks
