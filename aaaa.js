// 离线开发引入园区场景
var app = new THING.App({
    url: '/api/scene/production_211848'  // 场景地址
});
/**
  * 名称：发光效果模板
  * 说明：此效果模板适用于园区
  */


// 说明：在离线环境中使用森大屏，需使用以下脚本。
// 离线开发引入森大屏图表脚本
THING.Utils.dynamicLoad([
    '/static/release/thing.charts.js',
    '/static/plugins/vue.min.js'
],
    async function () {
        const scenebundle = THING.CHARTS.Utils.loadBundle(
            // '/Resources/BigScreen/admin/0349afcd5b2f4d45bfd886dd6a8673f3', // 前缀
            './mock/大屏-jiechengtingcheV1-20240627155450985', // 前缀
            {
                container: document.getElementById('div2d') || '#div2d', // 挂载节点
                // 可选参数
                hide3D: true, // 隐藏场景内的3D
                hideCanvasBackground: true, // 画布背景色是否设置为透明的，默认false
                dataSource: {
                    disable: true, // 是否禁用RestAPI数据，默认false
                    http: {
                        server: 'wss://charts.thingjs.com/spray/websocket', // 数据源配置
                    }
                }
            }
        )
        const instance = await scenebundle.waitForComplete() // 等待场景加载完成
        instance // ui场景实例
    })
// 设置app背景为黑色
// app.background = [0, 0, 0];
// 引用效果模板组件脚本
// THING.Utils.dynamicLoad([
//     '/static/plugins/thing.effect.min/1.5.2/EffectThemeControl.min.js',
//     '/Resources/EffectTemplate/admin/528ba6e45307fab6051120024d2a04d6/frame.js',
// ], function () {
//     app.on('load', function (ev) {
//         app.level.change(ev.campus);
//         //关闭，进到室内自动切换天空盒
//         app.level.options['autoChangeBackground'] = false;
//         //初始化
//         var control = new THING.EffectThemeControl();
//         app.addControl(control, '效果模板控制器');
//         //获取模板控制器
//         var ctrl = app.getControl('效果模板控制器');
//         //注册模板,data是模板数据。如果是本地效果模板包，必须填第三个参数，该参数是模板包相对于该片代码的路径
//         ctrl.registerTheme('default_parkbusiness', data, '/Resources/EffectTemplate/admin/528ba6e45307fab6051120024d2a04d6');
//         //获取园区
//         c = app.query('.Campus')[0];
//         //应用效果模板
//         c.applyTheme('default_parkbusiness');
//         ctrl.applyEffectTheme('default_parkbusiness', c);
//         ctrl.applyThemeEnvironment('default_parkbusiness', c);
//     })
// }, true, true, true)