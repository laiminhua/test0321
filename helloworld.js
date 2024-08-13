// 离线开发引入园区场景
var app = new THING.App({
    url: '/api/scene/production_211848'  // 场景地址
});
/**
  * 名称：发光效果模板
  * 说明：此效果模板适用于园区
  */

// 设置app背景为黑色
app.background = [0, 0, 0];
// 引用效果模板组件脚本
THING.Utils.dynamicLoad([
    '/static/plugins/thing.effect.min/1.5.2/EffectThemeControl.min.js',
    '/Resources/EffectTemplate/admin/528ba6e45307fab6051120024d2a04d6/frame.js',
], function () {
    app.on('load', function (ev) {
        app.level.change(ev.campus);
        //关闭，进到室内自动切换天空盒  
        app.level.options['autoChangeBackground'] = false;
        //初始化
        var control = new THING.EffectThemeControl();
        app.addControl(control, '效果模板控制器');
        //获取模板控制器
        var ctrl = app.getControl('效果模板控制器');
        //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
        ctrl.registerTheme('default_parkbusiness', data, '/Resources/EffectTemplate/admin/528ba6e45307fab6051120024d2a04d6');
        //获取园区
        c = app.query('.Campus')[0];
        //应用效果模板
        c.applyTheme('default_parkbusiness');
        ctrl.applyEffectTheme('default_parkbusiness', c);
        ctrl.applyThemeEnvironment('default_parkbusiness', c);
    })
})