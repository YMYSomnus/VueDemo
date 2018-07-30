
export default [{
  path: '/vuemodel',
  name: "v-model",
  component: resolve => {
    require.ensure([], function (require) {
      resolve(require('../module/vuemodel'))
    }, 'module/vuemodel');
  }, 
},];
