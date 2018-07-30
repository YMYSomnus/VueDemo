<template>
  <section>
    <div>v-model:测试</div>
    <input v-model="titleText" type="text" placeholder="请输入标题">
    <div @click="changedAction">改变</div>
  </section>
</template>
<script>
  export default {
    model: {
      event: "changed"
    },
    props: {
      blue: {
        type: String,
      },
      title: {
        type: String,
      }
    },
    data() {
      return {
        titleText: ""
      }
    },
    methods: {
      changedAction() {
        this.$emit('changed', this.titleText)
      }
    }
  }
</script>

<style>
</style>
