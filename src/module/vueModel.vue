<template>
  <div>
    <h1>v-model</h1>
    <vue-model v-model="title"></vue-model>
    <div>title = {{title}} blue = {{blue}}</div>
  </div>
</template>

<script>
import vueModel from "../compont/vuemodel";

export default {
  data () {
    return {
      title: "",
      blue: "",
    }
  },
  components: {
    vueModel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
