import Vue from 'vue'
import Router from 'vue-router'
import Start from './start'
import Content from "./content"
import Directive from "./directive"
import VModel from "./v-model";
import SlotModule from "./slotModule";

const route = [
  ...Start, 
  ...Content,
  ...Directive,
  ...VModel,
  ...SlotModule]
  
Vue.use(Router)
export default new Router({
  routes: route
})
