<template>
  <div>
    <h1>keep-alive</h1>
    <input placeholder="填写姓名">
    <button @click="push">跳转</button>
    <vue-install></vue-install>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    methods: {
      push() {
        this.$router.push("welcome")
      }
    },
    created() {
      console.log('keep-alive页面创建')
      // console.log(this.$route)
    },
    // beforeRouteLeave(to, from, next) {
    //   next()
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
</style>
