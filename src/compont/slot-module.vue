<template>
  <section>
    <div>slot测试</div>
    <slot name="header" v-bind: todo="">555555</slot>
  </section>
</template>
<script>
  export default {
    model: {
    },
    props: {
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>
