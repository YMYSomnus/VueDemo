
export default [{
  path: '/welcome',
  name: "欢迎",
  component: resolve => {
    require.ensure([], function (require) {
      resolve(require('../module/HelloWorld'))
    }, 'module/HelloWorld');
  }
},];
