
export default [{
  path: '/directive',
  name: "钩子函数",
  component: resolve => {
    require.ensure([], function (require) {
      resolve(require('../module/directive'))
    }, 'module/directive');
  }, 
},];
