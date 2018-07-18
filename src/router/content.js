
export default [{
  path: '/content',
  name: "内容",
  component: resolve => {
    require.ensure([], function (require) {
      resolve(require('../module/content'))
    }, 'module/content');
  }, 
},];
