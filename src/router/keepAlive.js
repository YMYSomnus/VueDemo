
export default [{
  path: '/keepAlive',
  name: "KeppAlive",
  component: resolve => {
    require.ensure([], function (require) {
      resolve(require('../module/keepAlive'))
    }, 'module/keepAlive');
  }, 
  meta: {
    keepAlive: true,
  }
},];
