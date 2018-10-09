requirejs.config({
  baseUrl: 'scripts',
  paths: {
	// 配置模块名称和模块的js路径, 如下路径为 scripts/one.js
    oneName: 'one',
    twoName: 'two'
  }
});
require(['oneName'], function(a){
	a.say('hello');
});