import Vue from 'vue'
import Router from 'vue-router'
import Start from './start'
import Content from "./content"
import Directive from "./directive";

const route = [
  ...Start, 
  ...Content,
  ...Directive]
  
Vue.use(Router)
export default new Router({
  routes: route
})
