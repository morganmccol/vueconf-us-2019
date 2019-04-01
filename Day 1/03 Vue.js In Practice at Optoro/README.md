# Andrew Krawchyk

## Vue.js In Practice at Optoro

- 8 years of total experience, 3 off and on with Vue
- [Style Guide — Vue.js](https://vuejs.org/v2/style-guide/)
  - great for onboarding and preventing bikeshedding
- pave the cowpaths
  - monorepo, micro-frontends
  - incrementally adopted vue while maintaining AngularJS apps
    - small blast radius, small changes when trying to see if can adopt new tech/framework
  - decouple framework code from application code helps move faster
  - use vue-cli to improve product consistency
    - vue-cli-plugins
    - json file to export the file into a plugin (customize webpack, configure error reporting, importing shared library code)
    - webpack deps/config, third-party deps, bulky custom scripts, cross-project consistency
  - sharing code efficiently across teams/projects is hard
    - don't want to burden team members with complexity, if people complain it's a good way to iterate on improvements on the process
