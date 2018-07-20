<template>
  <div>
    <h1>Directive</h1>
    <div v-directive = "{aa: '1234'}"> 
      <div><p>测试组件</p></div>
      </div>
  </div>
</template>

<script>
import directive from "../compont/directiveCompont.js";

export default {
  data () {
    return {
    }
  },
  directives: {
    directive
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
