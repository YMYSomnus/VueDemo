
export default [{
  path: '/slot',
  name: "slot",
  component: resolve => {
    require.ensure([], function (require) {
      resolve(require('../module/slot'))
    }, 'module/slot');
  }, 
},];
