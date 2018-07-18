import Vue from 'vue'
import Router from 'vue-router'
import Start from './start'
import Content from "./content"

const route = [...Start, ...Content]

console.log(route)

Vue.use(Router)
export default new Router({
  routes: route
})
