requirejs.config({
  baseUrl: 'scripts',
  paths: {
	// ����ģ�����ƺ�ģ���js·��, ����·��Ϊ scripts/one.js
    oneName: 'one',
    twoName: 'two'
  }
});
require(['oneName'], function(a){
	a.say('hello');
});