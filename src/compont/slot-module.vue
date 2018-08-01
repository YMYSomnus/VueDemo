<template>
  <section>
    <div>slot测试</div>
    <slot name="header" v-bind:testDa="testData"></slot>
    <div @click="click"> 点 击 </div>
  </section>
</template>
<script>
  export default {
    model: {},
    props: {},
    data() {
      return {
        testData: '1233'
      }
    },
    methods: {
      click() {
        this.testData = "23456"
      }
    }
  }
</script>

<style>
</style>
