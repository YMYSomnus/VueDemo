<template>
  <div>
    <h1>slot-module</h1>
    <slot-module>
      <template slot="header" slot-scope="{ scop }">
        rrr
        <p>{{todo}}</p>
        <input  style="background-color: blue;" placeholder="gggggg">
      </template>
      <div>
        jjjjjjj
      </div>
    </slot-module>
  </div>
</template>

<script>
import slotModule from "../compont/slot-module"

export default {
  data () {
    return {
      title: "",
      blue: "",
    }
  },
  components: {
    slotModule
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  
}
</style>
