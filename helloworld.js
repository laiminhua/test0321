var app = new THING.App({
    // 引用场景
    // url: '/api/scene/20210616095248956300069',  // 场景地址
    url: '/api/scene/production_211848',  // 场景地址
    // skyBox: 'BlueSky', // 天空盒
	resourceLibraryUrl: "./" ,
    background: '/static/img/bj.jpg',
    // width: '1920px',
    // height: '1080px',
});


// 界面组件
// var panel = new THING.widget.Panel();
// // 创建数据对象
// var dataObj = {
// 	iframe: '/html/index.html'
// };

THING.Utils.dynamicLoad(['/static/js/jquery.js', '/static/js/jquery.liMarquee.js', '/static/js/axios.min.js', '/static/js/vue.min.js',
'/static/js/networkHealth.js', '/static/js/order.js', '/static/js/userNetwork.js', '/static/js/echarts.min.js', '/static/js/echartsDrawer.js',
'/static/js/jquery.easyui.min.js', '/static/css/easyui.css', '/static/css/icon.css', '/static/css/style.css',
 '/static/fonts/font.css', '/static/js/common.js'], function(){
new topPanel()
new networkHealth()
new userNetwork()
new orderHtml()
// this.setScreen()

})
var buildList = [];  // 建筑物列表-园区中
var buildData = [];  // 建筑物列表-后台接口返回
var roomList = [];  // 房间列表-园区中
var roomData = [];  // 房间列表-后台接口返回
var uiAnchorPanelList = [];  // UIAnchor面板对象数组-建筑物
var uiAnchorPanelBuildRoomList = [];  // UIAnchor面板对象数组-建筑物中房间号
var uiAnchorPanelFloorRoomList = [];  // UIAnchor面板对象数组-楼层房间号
var uiAnchorPanelAbnormal = null;  // UIAnchor异常面板
var uiAnchorPanelAbnormalDetail = null;  // UIAnchor异常面板详情数据
var campus = null;  // 用于存储园区对象  
var floorList = [];  // 用于存储建筑物楼层数据
var currentTab = 2;  // 当前菜单下标， 0网络健康 1用户用网 2运维工单
var enterBuild = false;  // 是否进入了建筑物
var enterFloor = false;  // 是否进入了楼层
app.on('load', function (ev) {
    campus = ev.campus;
    // 将层级切换到园区 开启场景层级
    app.level.change(campus);
    // 创建模型
    // let obj = app.create({
    //     type: 'Thing',
    //     name: '宇航员',
    //     url: '/api/models/7bfb3321557a40fead822d7285ac5324/0/gltf/', 
    //     position: [0, 0, 0],
    //     angle: 45
    // });
    
    // obj.playAnimation({
    //     name: '_defaultAnim_',
    //     loopType: THING.LoopType.Repeat,
    //   });


    //  init()
    // 创建切换面板
    new panelTab()
    // 设置相机位置
    app.camera.fit({
        position: [0, 200, 500],
        target: [0, 0, 0]
    });
    console.log('节点信息',getRootData(app.root))
    // 为建筑添加标注
    createHtml();
    campus = app.query(".Campus")[0];  // 获取园区对象
    var buildings = campus.buildings;
    buildList = buildings
    queryObject(buildings)
    // 鼠标滑过效果
    // mousemove()
    // 进入建筑物时的事件
    setEnterBuilding()
    // 进入楼层时的事件
    setEnterFloor()
// 设置镜头颜色
 postEffect = app.postEffect
 setColor()
    
});
// 设置镜头颜色
function setColor(){
    if(postEffect.vignetting){
        // 初始化
        postEffect.vignetting = {
            color: "0x030d2a",
            enable: !postEffect.vignetting.enable,
            offset: 1.8
        }
    } else {
        // 修改
        postEffect.vignetting = {
            color: "0x030d2a",
            enable: true,
            offset: 1.8
        }
    }
    
    app.postEffect = {
        postEffect
    }
}
// 进入建筑物时的事件
function setEnterBuilding(){
    // 进入建筑保留背景
    app.pauseEvent(THING.EventType.EnterLevel, '.Building', THING.EventTag.LevelSetBackground);
    // 进入建筑
    app.on(THING.EventType.EnterLevel, '.Building', function (ev) {
        enterBuild = true
        // 移除外层建筑物标注
        reset()
        floorList = ev.object.children.filter(e => { return e.type == 'Floor'})
        // 新增楼层数展示
        $('.buildFloorNum').css({display: 'block'})
        buildFHtmlUpdate(floorList.length)
        if(floorList.length > 0){
            // 从接口获取房间数据
            getRoomList()
            // 读取最后一层的房间数
            roomList = app.query('#' +floorList[floorList.length - 1].id)[0].rooms
            createElemenRoomFunction(roomList, 'build')
            console.log('进入建筑',roomList,uiAnchorPanelBuildRoomList)
        }
        // 销毁异常面板
        $('#network_detail_panel').css({display: 'none'})
        $('#network_detail_panel_detail').css({display: 'none'})
    }, 'customEnterBuildingOperations');
    //  退出建筑
    app.on(THING.EventType.LeaveLevel, '.Building', function (ev) {
        enterBuild = false
        console.log('退出建筑')
        if(currentTab !== 1){
            $('.buildFloorNum').css({display: 'none'})
        } else{
            userNetworkHtmlUpdate()
        }
        //销毁
        reset()
        queryObject(buildList)
    }, 'customLeaveBuildingOperations');
}
// 进入楼层时的事件
function setEnterFloor(){
    // 进入建筑保留背景
    app.pauseEvent(THING.EventType.EnterLevel, '.Floor', THING.EventTag.LevelSetBackground);
     // 从建筑进入楼层时
    app.on(THING.EventType.EnterLevel, '.Floor', function (ev) {
        enterFloor = true
        var previous = ev.previous;  // 上一层级
        // 移除外层建筑物标注
        reset()
        console.log('进入楼层了',ev, ev.object.rooms)
        roomList = ev.object.rooms
        // 从接口获取房间数据
        getRoomList()
        createElemenRoomFunction(roomList, 'floor')
        $('.buildFloorNum').css({display: 'none'})
    }, 'setFloorBackground');
    // 退出楼层设置背景
    app.on(THING.EventType.LeaveLevel, '.Floor', function (ev) {
        enterBuild = true
        enterFloor = false
        //销毁
        reset()
        $('.buildFloorNum').css({display: 'block'})
    }, 'customLeaveFloorOperations');
}
// 为外层建筑物对象添加信息标注
function queryObject(obj) {
    obj.forEach(function (item) {
        // console.log('对象',item, item.localPosition)
        // 创建标注
        uiAnchorPanel = app.create({
            type: 'UIAnchor',
            parent: item,
            element: createElement(item.id), // 此参数填写要添加的Dom元素
            localPosition: [0, 1, 0],
            // localPosition: [0, 0, 0],
            pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
        })
        $('#' + item.id + ' .buildName .text').text(item.name);
        
        // 点击楼宇上异常条数事件
        abnormalDetailFunction(item)

    // var marker = app.create({
    //     type: 'Marker',
    //     alwaysOnTop: true,
    //     keepSize: true,
    //     size: 1,
    //     inheritScale: false,
    //     parent: item,
    //     element: createElement(item.id), // 此参数填写要添加的Dom元素
    //     localPosition: item.localPosition,
    //     pivot: [0.5, 1], //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
    //     complete: function () {
    //     }
    // });
    // // marker.rotateX(-90);
    // $('#' + item.id + ' .buildName .text').text(item.name);
    uiAnchorPanelList.push(uiAnchorPanel)
    })
}
// 点击楼宇上异常条数操作 --- 公共方法
function abnormalDetailFunction(item){
    $('#' + item.id + ' .buildName .num').on('click',function(){
        if( currentTab == 0){ // 网络健康
            // console.log('点击',$(this),$(this).context.innerText,item)
            // 创建异常面板
            uiAnchorPanelAbnormal = app.create({
                type: 'UIAnchor',
                parent: item,
                element: createElementAbnormal('network_detail_panel'), // 此参数填写要添加的Dom元素
                localPosition: [0, 0, 0],
                pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
            })
            if(enterBuild){
                $('#network_detail_panel .network_detail_panel_bot .btn').css({display: 'none'})
            }
            // 查看楼宇上异常原因 ---- 此处代码必须放到click里面，否则定位不准确
            $('#network_detail_panel .abnormal').on('click',function(){
                // 创建异常面板
                app.create({
                    type: 'UIAnchor',
                    parent: item,
                    element: createElementAbnormal('network_detail_panel_detail'), // 此参数填写要添加的Dom元素
                    localPosition: [0, 0, 0],
                    pivot: [0.5, 1], //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
                })
                // 销毁异常面板
                $('#network_detail_panel').css({display: 'none'})
            })
            // 进入楼层巡检
            $('#network_detail_panel .network_detail_panel_bot .btn').on('click',function(event) {
                var floor =  app.query('#'+ item.id)[0]  //楼层对象
                app.level.change(floor , { jumping: true });
            })
        } else if( currentTab == 2){ // 运维工单
            // 创建异常面板
            app.create({
                type: 'UIAnchor',
                parent: item,
                element: createElementAbnormal('order_detail_panel'), // 此参数填写要添加的Dom元素
                localPosition: [0, 0, 0],
                pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
            })
        }
        
    })
}
//创建静态html
function createHtml() {
    //创建外层建筑物对象内容html
    var html =
        `<div id="board" class="marker" style="position: absolute;">
               <div class="builds flex">
                    <div class="text_l">
                            <img src="/static/img/titleL.png">
                    </div>
                    <div class="buildName flex">
                    <div class="yuan"></div>  
                    <div class="text"></div>  
                    <div class="num">8</div>
                     </div>
                    <div class="text_r">
                        <img src="/static/img/titleR.png">
                    </div>
               </div>
               <div class="picture" style="height: 32px;width: 35px;margin: 10px auto 0 auto;">
                   <img src="/static/img/jT.png" style="height: 100%;width: 100%;">
               </div>
           </div>`;
    $('#div3d').append($(html));

    // 创建建筑物内楼层数量显示html
    let panelOne = `
    <div class="buildFloorNum">
              <ul>
              </ul>
          </div>
    `
    $('#div2d').append(panelOne)

    // 网络健康-显示建筑物异常面板
    let panelTwo = `
    <div id="network_detail_panel" class="network_detail_panel">
        <div class="network_detail_panel_bg">
            <span class="close">x</span>
            <div class="network_detail_panel_top">
                <div class="flex align-center">
                    <img src="@/static/img/02.fw.png"/>
                    <div class="network_detail_panel_top_right">
                        <h1>西寓9号楼</h1>
                        <div class="flex">
                            <p>设备数量：<span class="green">962</span></p>
                            <p class="abnormal" style="cursor: pointer;">异常：<span class="orange">7<i></i></span>></p></div>
                    </div>
                </div>
            </div>
            <div class="network_detail_panel_bot">
                <div class="flex justify-between">
                    <p>接入交换机：2台</p>
                    <p>AP数量：960个</p>
                </div>
                <div class="btn">进入楼层巡检</div>
            </div>
        </div>
        <div class="jT">
            <img src="/static/img/jT.png"/>
        </div>
    </div>
    `
    $('#div2d').append(panelTwo)
    $('#network_detail_panel .close').on('click',function(event) {
        $('#network_detail_panel').css({display: 'none'})
    })
    
        

    // 网络健康-显示建筑物异常面板
    let panelThree = `
    <div id="network_detail_panel_detail" class="network_detail_panel network_detail_panel_detail">
            <div class="network_detail_panel_bg">
                <span class="close">x</span>
                <div class="network_detail_panel_top">
                    <div class="flex align-center">
                        <img src="/static/img/096.fw.png"/>
                        <div class="network_detail_panel_top_right">
                            <h1>xiyuroom-AP</h1>
                            <div class="flex">
                                <p>异常原因：<span class="orange fs14">设备离线</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="network_detail_panel_bot">
                    <p>开始时间：2023-12-04 10:4</p>
                    <p>告警时长：0天0小时10分钟</p>
                    <div class="flex">
                        <div class="btn">关联工单</div>
                        <div class="btn next">下一个</div>
                    </div>
                </div>
            </div>
            <div class="jT">
                <img src="/static/img/jT.png"/>
            </div>
        </div>
    `
    $('#div2d').append(panelThree)
    $('#network_detail_panel_detail .close').on('click',function(event) {
        $('#network_detail_panel_detail').css({display: 'none'})
    })

    // 用户用网-异常面板
    var panelFive =
    `<div id="userNework_detail_panel" class="network_detail_panel network_detail_panel_detail">
        <div class="network_detail_panel_bg">
            <span class="close">x</span>
            <div class="network_detail_panel_top">
                <div class="flex align-center">
                    <img src="/static/img/096.fw.png"/>
                    <div class="network_detail_panel_top_right">
                        <h1>xiyuroom-AP</h1>
                        <div class="flex">
                            <p>终端数量：<span class="green fs14">5</span>台</p>
                            <p class="abnormal" style="cursor: pointer;">AP状态：<span class="orange fs14">离线</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="jT">
            <img src="/static/img/jT.png"/>
        </div>
     </div>
    `
    $('#div2d').append($(panelFive));
    $('#userNework_detail_panel .close').on('click',function(event) {
        $('#userNework_detail_panel').css({display: 'none'})
    })

    // 用户用网-正常面板
    var panelSix =
    `<div id="userNework_detail_panel_normal" class="network_detail_panel network_detail_panel_detail">
        <div class="network_detail_panel_bg">
            <span class="close">x</span>
            <div class="network_detail_panel_top">
                <div class="flex align-center">
                    <img src="/static/img/02.fw.png"/>
                    <div class="network_detail_panel_top_right">
                        <h1>xiyuroom-AP</h1>
                        <div class="flex">
                            <p>终端数量：<span class="green fs14">5</span>台</p>
                            <p class="abnormal" style="cursor: pointer;">AP状态：<span class="green fs14">正常</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="network_detail_panel_bot">
                <div class="terminalList_top flex">
                    <div class="one overflowEllipsis1">终端列表</div>
                    <div class="two overflowEllipsis1">下行速率</div>
                </div>
                <div id="terminalList_bot" class="terminalList_top"></div>
            </div>
        </div>
        <div class="jT">
            <img src="/static/img/jT.png"/>
        </div>
    </div>
    `
    $('#div2d').append($(panelSix));
    $('#userNework_detail_panel_normal .close').on('click',function(event) {
        $('#userNework_detail_panel_normal').css({display: 'none'})
    })

    // 运维工单-异常面板
    var panelSeven =
    `<div id="order_detail_panel" class="network_detail_panel network_detail_panel_detail">
        <div class="network_detail_panel_bg">
            <span class="close">x</span>
            <div class="network_detail_panel_top">
                <div class="flex align-center">
                    <img src="/static/img/02.fw.png"/>
                    <div class="network_detail_panel_top_right">
                        <h1>新的工单</h1>
                        <div class="flex">
                            <p>上报时间：<span class="orange fs14">12-25 14：35：45</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="orderDetailPanl fs14">
                西寓9号楼，网速卡顿，请尽快安排网络工程师去现场处理
            </div>
            <div class="network_detail_panel_bot" style="border-top: 0;">
                <div class="flex justify-between">
                    <p>填报人：梁文乐</p>
                    <p>电话：15837815245</p>
                </div>
                <div class="flex">
                    <div class="btn pre">上一个</div>
                    <div class="btn next">下一个</div>
                </div>
            </div>
        </div>
        <div class="jT">
            <img src="/static/img/jT.png"/>
        </div>
    </div>
    `
    $('#div2d').append($(panelSeven));
    $('#order_detail_panel .close').on('click',function(event) {
        $('#order_detail_panel').css({display: 'none'})
    })
    $('#order_detail_panel .network_detail_panel_bot .pre').on('click',function(){
        preOrder()
    })
    $('#order_detail_panel .network_detail_panel_bot .next').on('click',function(){
        nextOrder()
    })

    //创建楼层房间号显示对象内容html ---放最下面，防止挡住其他面板弹框
    var panelFour =
    `<div id="roomId" class="marker" style="position: absolute;">
           <div class="builds flex">
                <div class="text_l">
                        <img src="/static/img/titleL.png">
                </div>
                   
                <div class="buildName flex">
                <div class="yuan"></div>  
                <div class="text"></div>  
                <div class="num"></div>
                 </div>
                <div class="text_r">
                    <img src="/static/img/titleR.png">
                </div>
           </div>
           <div class="picture" style="height: 32px;width: 35px;margin: 10px auto 0 auto;">
               <img src="/static/img/jT.png" style="height: 100%;width: 100%;">
           </div>
       </div>
       `;
    $('#div3d').append($(panelFour));

    

}
// 工单详情上一个
function preOrder(){
    $('#order_detail_panel .network_detail_panel_top_right h1').text('新用户登录不了账号问题')
}
// 工单详情下一个
function nextOrder(){
    $('#order_detail_panel .network_detail_panel_top_right h1').text('多设备登录')
}
//创建外层建筑物对象元素
function createElement(id) {
    var srcElem = document.getElementById('board');
    var newElem = srcElem.cloneNode(true);
    newElem.style.display = "block";
    newElem.setAttribute("id", id);
    app.domElement.insertBefore(newElem, srcElem);
    return newElem;
}
//创建外层建筑物点击异常数量时，显示的异常数据
function createElementAbnormal(id) {
    var srcElem = document.getElementById(id);
    srcElem.style.display = "block";
    return srcElem;
}

// 创建楼层房间号显示对象元素
function createElemenRoom(id) {
    if($('#' + id).length > 0){ // 存在该id时，重新赋值，不再重新新建div
        // console.log('存在0')
      return document.getElementById(id)
    } else{
    //新建div
    var srcElem =  document.getElementById('roomId');
    var newElem = srcElem.cloneNode(true);
    newElem.style.display = "block";
    newElem.setAttribute("id", id);
    app.domElement.insertBefore(newElem, srcElem);
    // console.log('不存在0')
    return newElem;
    }
}
// 创建楼层房间号显示对象元素 方法
function createElemenRoomFunction(list, type){
    if(type === 'build'){
        // console.log('build',list)
        list.forEach(item => {
            uiAnchorPanelB = app.create({
                type: 'UIAnchor',
                parent: item,
                element: createElemenRoom(item.id), // 此参数填写要添加的Dom元素
                localPosition: [0, 1, 0],
                pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
            });
            $('#' + item.id + ' .buildName .text').text(item.name);
            // $('#' + item.id + ' .buildName .num').text(8);
            // 更新房间上的数据
            updateRoomNum()
            uiAnchorPanelBuildRoomList.push(uiAnchorPanelB)
            // 点击楼宇上异常条数事件
            abnormalDetailFunction(item)
        })
    } else if(type === 'floor'){
        console.log('floor',list)
        list.forEach(item => {
            uiAnchorPanelF = app.create({
                type: 'UIAnchor',
                parent: item,
                element: createElemenRoom(item.id), // 此参数填写要添加的Dom元素
                localPosition: [0, 1, 0],
                pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
            });
            $('#' + item.id + ' .buildName .text').text(item.name);
            // $('#' + item.id + ' .buildName .num').text(8);
            // 更新房间上的数据
            updateRoomNum()
            uiAnchorPanelFloorRoomList.push(uiAnchorPanelF)
            // 点击楼宇上异常条数事件
            abnormalDetailFunction(item)
        })
        
    }
    
    
}

// 动态销毁面板
function destroyObject(list){
    if(list.length > 0){
        list.forEach(e =>{
            e.destroy()
            e = null
        })
    };
}
// 重置销毁所有面板
function reset(){
    console.log('销毁')
    // 移除外层建筑物标注
    destroyObject(uiAnchorPanelList)
    //移除建筑物中的房间标注
    destroyObject(uiAnchorPanelBuildRoomList)
    // 移除楼层中的房间标注
    destroyObject(uiAnchorPanelFloorRoomList)
    // 隐藏各种异常面板
    $('#network_detail_panel').css({display: 'none'})
    $('#network_detail_panel_detail').css({display: 'none'})
    $('#userNework_detail_panel').css({display: 'none'})
    $('#userNework_detail_panel_normal').css({display: 'none'})
    $('#order_detail_panel').css({display: 'none'})
}

// 更新建筑物内楼层数量显示html
function buildFHtmlUpdate(val){
    $('.buildFloorNum ul').empty()
    for (var i = 0; i < val; i++){
        let newElement = document.createElement("li");
        newElement.innerHTML = (val - i) + 'F'
        newElement.index = val - i //给每个li定义一个属性索引值
        $('.buildFloorNum ul').append(newElement)
        // 默认第一个高亮
        if(i == 0){
            newElement.className = 'current'
        }
        
        newElement.onclick = function(){
            $(this).parent().children().removeClass('current')
            $(this).addClass('current')
            // 更新楼层显示数据
            // console.log('点击', i, this.index)
            reset()
            roomList = app.query('#' +floorList[this.index - 1].id)[0].rooms
            // console.log('房间列表',roomList)
            createElemenRoomFunction(roomList, 'build')
          }
    }
}
// 用户用网tab数据 
function userNetworkHtmlUpdate(){
    $('.buildFloorNum ul').empty()
    for (var i = 0; i < 4; i++){
        let newElement = document.createElement("li");
        newElement.innerHTML = i == 0 ? '在线人数' : i == 1 ? '开通人数' : i == 2 ? '上行流量' : i == 3 ? '下行流量' : ''
        newElement.index = i //给每个li定义一个属性索引值
        $('.buildFloorNum ul').append(newElement)
        // 默认第一个高亮
        if(i == 0){
            newElement.className = 'current'
        }
        
        newElement.onclick = function(){
            $(this).parent().children().removeClass('current')
            $(this).addClass('current')
            // 更新显示数据
            console.log('点击', i, this.index,buildList)
            if(this.index == 0) {
                buildList.forEach((item,index) => {
                    $('#' + item.id + ' .buildName .num').text(index + 400);
                })
                
            } else if(this.index == 1){
                buildList.forEach((item,index) => {
                    $('#' + item.id + ' .buildName .num').text(index + 100);
                })
                
            } else if(this.index == 2){
                buildList.forEach((item,index) => {
                    $('#' + item.id + ' .buildName .num').text(index + 200+ 'Mbps');
                })
               
            } else if(this.index == 3){
                buildList.forEach((item,index) => {
                    $('#' + item.id + ' .buildName .num').text(index + 300+ 'Mbps');
                })
                
            }
          }
    }
}
// 创建建筑物异常面板数据
function buildAbnormalPanel(id){
    if($('#' + id).length > 0){ // 存在该id时，重新赋值，不再重新新建div
        console.log('存在')
      return document.getElementById(id)
    } else{
    //新建div
    var srcElem =  document.getElementById('network_detail_panel');
    var newElem = srcElem.cloneNode(true);
    newElem.style.display = "block";
    newElem.setAttribute("id", id);
    app.domElement.insertBefore(newElem, srcElem);
    console.log('不存在')
    return newElem;
    }
}
// 鼠标滑入事件
function mousemove(){
    var objs = app.query('.Building').add(campus.things);  // 选择室外所有物体 + 所有建筑
      // 鼠标滑过事件/取消滑过事件切换
      initThingJsTip("鼠标滑入物体时，物体颜色变红");
          // 改变颜色
          objs.on('mouseenter', function (ev) {
            console.log('移入物体',ev, ev.object)
            //   ev.object.style.color = '#ff0000';
              ev.object.style.color = '#26c9ff';
              ev.object.style.boundingBox = true
          });

          // 还原颜色
          objs.on('mouseleave', function (ev) {
            console.log('移出物体',ev.object)
              ev.object.style.color = null;
          });
}

// 获取根节点信息
function getRootData(root) {
    var data = [];
    data.push(getSceneRoot(root));
    return data;
}
// 物体单机事件 获取当前位置，飞行到该位置
app.on('click', function (ev) {
    var obj = ev.object;
    // console.log('物体信息', ev.clientX, obj)
    // app.camera.flyTo({
    //     position: [100, 100, 100],
    //     target: [ev.clientX, ev.clientY, 0],
    //     time: 1000,
    // });
});
// 鼠标拾取物体显示边框
app.on(THING.EventType.MouseEnter, '.Thing' ,function(ev) {
    console.log(555)
    ev.object.style.outlineColor = '#FF0000';
});
// 鼠标离开物体边框取消
app.on(THING.EventType.MouseLeave,'.Thing', function(ev) {
    console.log(666)
    ev.object.style.outlineColor = null;
});
// 获取场景节点信息
function getSceneRoot(root) {
    var data = {
        id: root.id,
        checked: true,
        state: 'open',
        text: 'root',
    };
    data["children"] = [];
    root.campuses.forEach(function (campus) {
        data["children"].push(getCampusData(campus));
    });
    return data;
}
// 获取由建筑和室外物体组成节点信息
function getCampusData(campus) {
    var data = {
        id: campus.id,
        checked: true,
        state: 'open',
        text: campus.type + ' (' + campus.name + ')'
    };
    data["children"] = [];
    campus.buildings.forEach(function (building) {
        data["children"].push(getBuildingData(building));
    });
    campus.things.forEach(function (thing) {
        data["children"].push(getThingData(thing));
    });
    return data;
}

// 获取建筑节点信息
function getBuildingData(building) {
    var data = {
        id: building.id,
        checked: true,
        state: 'open',
        text: building.type + ' (' + building.name + ')'
    };
    data["children"] = [];
    building.floors.forEach(function (floor) {
        data["children"].push(getFloorData(floor));
    });
    return data;
}

// 获取楼层节点信息
function getFloorData(floor) {
    var data = {
        id: floor.id,
        checked: true,
        state: 'open',
        text: floor.type + ' (level:' + floor.levelNumber + ')'
    };
    data["children"] = [];
    floor.things.forEach(function (thing) {
        data["children"].push(getThingData(thing));
    });
    return data;
}
// 获取Thing类物体节点信息
function getThingData(thing) {
    return {
        id: thing.id,
        checked: true,
        text: thing.type + ' (' + thing.name + ')'
    };
}
// 计算屏幕宽度
function setScreen() {
    let ratio = document.body.clientWidth / $('#div2d').width();
      window.onresize = () => {
        console.log(555)
        // return (() => {
        //   this.screenWidth = document.body.clientWidth
        // })()
        this.ratio = this.screenWidth / $('#div2d').width(); //可见范围/class=screenBox大小
        this.resizeWidth()
      }
    console.log('ratio',ratio)
    $('#div2d').css({transform:'scale(' + ratio + ')', 'transform-origin': 'left top', 'background-size': '100%'})
    $('#__rendererDom__').css({width:'1920px', height: '1080px'})
    $('#__rendererDom__').children().css({width:'1920px', height: '1080px'})
    // let chartsStyle = 'width: 1920px !important; height: 1080px !important'
    // let chartsStyle = 'width: 1920px; height: 1080px'
    // document.getElementById('__rendererDom__').children().setAttribute('style', chartsStyle);
    // document.getElementById('__rendererDom__').children().width = 1920;
    // document.getElementById('__rendererDom__').children().height = 1080;
    // console.log('fff',document.getElementById('__rendererDom__').children())
    $('#__rendererDom__').children().children().css({width:'1920px', height: '1080px'})
    
}
function resizeWidth(){
    $('#div2d').css({transform:'scale(' + ratio + ')', 'transform-origin': 'left top', 'background-size': '100%'})
    $('#__rendererDom__').css({width:'1920px', height: '1080px'})
    $('#__rendererDom__').children().css({width:'1920px', height: '1080px'})
    $('#__rendererDom__').children().children().css({width:'1920px', height: '1080px'})
}
// 初始化
function init(){
	var iframe = panel.addIframe(dataObj, 'iframe').caption('');
    $('.ThingJS_wrap .panel .order').css({border: '1px #000 solid'})
    // console.log('高度', aa)
	iframe.setHeight('900px');
    // iframe.setWidth('100%')
    $('#div2d').css('z-index','9')
    $('.ThingJS_wrap .panel').css({border: 0, background: 'none', 'box-shadow': 'none'})
    $('.ThingJS_wrap .panel .main').css({border: 0})

    

	// app.on(THING.EventType.SingleClick, function (ev) {
	// 	if (ev.picked && ev.object) {
	// 		var obj = ev.object;
	// 		var name = obj.name;

	// 		// 调用同域的iframe页面内的方法 ChangeText
	// 		// iframeDom.contentWindow.changeText(name);
	// 	}
	// })
}
// 创建顶部面板
class topPanel{
    constructor() {
        this.panelTop();
        getSchool()
        setInterval(()=>{
            this.getTime();
        },1000)
    }
    //初始化面板
    panelTop(){
        let html = `
            <div class="header">园区网络一图可视</div>
            <div class="time" id="time"></div>
            <div class="school">
                <select id="cc" checkbox="true" class="easyui-combotree" style="width:200px;"
    >
        </select>
            </div>
            `
            $('#div2d').css('color','#fff')
            $('#div2d').append(html)
    }
    // 获取当前事件
    getTime(){
        let commonN = new common()
       document.getElementById("time").innerHTML = commonN.getDateYMDHMS(new Date())
    }
}
// 获取学校列表
function getSchool(){
    let schoolData = [
        {
            "id": "1663718350488481793",
            "parentId": "0",
            "weight": 9999,
            text: "河南师范大学",
            "isLock": false,
            "createTime": "2023-05-31 09:25:40",
            "children": [
                {
                    "id": "1663718422701813762",
                    "parentId": "1663718350488481793",
                    "weight": 9999,
                    text: "河南师范大学(西校区)",
                    "isLock": false,
                    "createTime": "2023-05-31 09:25:57"
                },
                {
                    "id": "1663718523759374337",
                    "parentId": "1663718350488481793",
                    "weight": 9999,
                    text: "河南师范大学(小店校区)",
                    "isLock": false,
                    "createTime": "2023-05-31 09:26:21"
                },
                {
                    "id": "1666988155995910146",
                    "parentId": "1663718350488481793",
                    "weight": 9999,
                    text: "河南师范大学(东校区)",
                    "isLock": false,
                    "createTime": "2023-06-09 09:58:42"
                },
                {
                    "id": "1666992363281281025",
                    "parentId": "1663718350488481793",
                    "weight": 9999,
                    text: "河南师范大学(附中)",
                    "isLock": false,
                    "createTime": "2023-06-09 10:15:25"
                }
            ]
        },
        {
            "id": "1667030548577230850",
            "parentId": "0",
            "weight": 9999,
            text: "安冉云",
            "isLock": false,
            "createTime": "2023-06-09 12:47:09"
        },
        {
            "id": "1674295154745327617",
            "parentId": "0",
            "weight": 9999,
            text: "河南测绘职业学院",
            "isLock": false,
            "createTime": "2023-06-29 13:54:06",
            "children": [
                {
                    "id": "1674296145058250754",
                    "parentId": "1674295154745327617",
                    "weight": 9999,
                    text: "河南测绘职业学院(新校区-中牟)",
                    "isLock": false,
                    "createTime": "2023-06-29 13:58:03"
                }
            ]
        },
        {
            "id": "1681117585350967298",
            "parentId": "0",
            "weight": 9999,
            text: "测试院校",
            "isLock": false,
            "createTime": "2023-07-18 09:44:01"
        },
        {
            "id": "1682337643133743105",
            "parentId": "0",
            "weight": 9999,
            text: "河南开放大学-东校区",
            "isLock": false,
            "createTime": "2023-07-21 18:32:05",
            "children": [
                {
                    "id": "1682337770355372033",
                    "parentId": "1682337643133743105",
                    "weight": 9999,
                    text: "河南开放大学-西校区",
                    "isLock": false,
                    "createTime": "2023-07-21 18:32:35"
                }
            ]
        },
        {
            "id": "1684857887052128257",
            "parentId": "0",
            "weight": 9999,
            text: "南阳理工学院",
            "isLock": false,
            "createTime": "2023-07-28 17:26:38"
        },
        {
            "id": "1684858526423441409",
            "parentId": "0",
            "weight": 9999,
            text: "河南科技学院",
            "isLock": false,
            "createTime": "2023-07-28 17:29:11",
            "children": [
                {
                    "id": "1684858694556311554",
                    "parentId": "1684858526423441409",
                    "weight": 9999,
                    text: "河南科技学院-华兰大道",
                    "isLock": false,
                    "createTime": "2023-07-28 17:29:51"
                },
                {
                    "id": "1684858735001985025",
                    "parentId": "1684858526423441409",
                    "weight": 9999,
                    text: "河南科技学院-辉县校区",
                    "isLock": false,
                    "createTime": "2023-07-28 17:30:00"
                },
                {
                    "id": "1684858774793347074",
                    "parentId": "1684858526423441409",
                    "weight": 9999,
                    text: "河南科技学院-新科校区",
                    "isLock": false,
                    "createTime": "2023-07-28 17:30:10"
                },
                {
                    "id": "1684859152213598210",
                    "parentId": "1684858526423441409",
                    "weight": 9999,
                    text: "河南科技学院(家属区)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:31:40"
                },
                {
                    "id": "1701078736327217154",
                    "parentId": "1684858526423441409",
                    "weight": 9999,
                    text: "河南科技学院-新东区",
                    "isLock": false,
                    "createTime": "2023-09-11 11:42:30"
                }
            ]
        },
        {
            "id": "1684858823938007042",
            "parentId": "0",
            "weight": 9999,
            text: "河南工学院",
            "isLock": false,
            "createTime": "2023-07-28 17:30:21"
        },
        {
            "id": "1684858935846232066",
            "parentId": "0",
            "weight": 9999,
            text: "新乡学院",
            "isLock": false,
            "createTime": "2023-07-28 17:30:48",
            "children": [
                {
                    "id": "1684858432202596353",
                    "parentId": "1684858935846232066",
                    "weight": 9999,
                    text: "新乡学院(学校)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:28:48"
                },
                {
                    "id": "1684859046735241218",
                    "parentId": "1684858935846232066",
                    "weight": 9999,
                    text: "新乡学院(家属院)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:31:15"
                }
            ]
        },
        {
            "id": "1684859200527785986",
            "parentId": "0",
            "weight": 9999,
            text: "新乡职业技术学院",
            "isLock": false,
            "createTime": "2023-07-28 17:31:51",
            "children": [
                {
                    "id": "1684859327871049730",
                    "parentId": "1684859200527785986",
                    "weight": 9999,
                    text: "新乡职业技术学院(卫辉校区)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:32:22"
                },
                {
                    "id": "1684859410142322690",
                    "parentId": "1684859200527785986",
                    "weight": 9999,
                    text: "新乡职业技术学院(北院)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:32:41"
                }
            ]
        },
        {
            "id": "1684859466597654529",
            "parentId": "0",
            "weight": 9999,
            text: "河南大学",
            "isLock": false,
            "createTime": "2023-07-28 17:32:55",
            "children": [
                {
                    "id": "1684859572663214081",
                    "parentId": "1684859466597654529",
                    "weight": 9999,
                    text: "河南大学(开封)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:33:20"
                },
                {
                    "id": "1684859658180878337",
                    "parentId": "1684859466597654529",
                    "weight": 9999,
                    text: "河南大学(明伦校区)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:33:40"
                },
                {
                    "id": "1684859715714146306",
                    "parentId": "1684859466597654529",
                    "weight": 9999,
                    text: "河南大学(郑州校区)",
                    "isLock": false,
                    "createTime": "2023-07-28 17:33:54"
                }
            ]
        },
        {
            "id": "1684859766691717121",
            "parentId": "0",
            "weight": 9999,
            text: "河南省工业学校",
            "isLock": false,
            "createTime": "2023-07-28 17:34:06"
        },
        {
            "id": "1684859868365840385",
            "parentId": "0",
            "weight": 9999,
            text: "河南交通职业技术学院",
            "isLock": false,
            "createTime": "2023-07-28 17:34:30"
        },
        {
            "id": "1684859976532746242",
            "parentId": "0",
            "weight": 9999,
            text: "郑州工程-郑州师范",
            "isLock": false,
            "createTime": "2023-07-28 17:34:56"
        },
        {
            "id": "1684860010477248514",
            "parentId": "0",
            "weight": 9999,
            text: "郑州城轨交通中等专业学校",
            "isLock": false,
            "createTime": "2023-07-28 17:35:04"
        },
        {
            "id": "1684860048578306049",
            "parentId": "0",
            "weight": 9999,
            text: "郑州财经技师学院",
            "isLock": false,
            "createTime": "2023-07-28 17:35:13"
        },
        {
            "id": "1695754936081518593",
            "parentId": "0",
            "weight": 9999,
            text: "周口文理",
            "isLock": false,
            "createTime": "2023-08-27 19:07:37"
        },
        {
            "id": "1695754967387803650",
            "parentId": "0",
            "weight": 9999,
            text: "新乡IDC",
            "isLock": false,
            "createTime": "2023-08-27 19:07:44"
        },
        {
            "id": "1695755258736742402",
            "parentId": "0",
            "weight": 9999,
            text: "新乡医学院",
            "isLock": false,
            "createTime": "2023-08-27 19:08:54",
            "children": [
                {
                    "id": "1695964391318556673",
                    "parentId": "1695755258736742402",
                    "weight": 9999,
                    text: "新乡医学院-北校区",
                    "isLock": false,
                    "createTime": "2023-08-28 08:59:55"
                },
                {
                    "id": "1695964442619088897",
                    "parentId": "1695755258736742402",
                    "weight": 9999,
                    text: "新乡医学院-南校区",
                    "isLock": false,
                    "createTime": "2023-08-28 09:00:07"
                },
                {
                    "id": "1695964507207176193",
                    "parentId": "1695755258736742402",
                    "weight": 9999,
                    text: "新乡医学院-西校区",
                    "isLock": false,
                    "createTime": "2023-08-28 09:00:23"
                },
                {
                    "id": "1695964569844912130",
                    "parentId": "1695755258736742402",
                    "weight": 9999,
                    text: "新乡医学院-卫辉校区",
                    "isLock": false,
                    "createTime": "2023-08-28 09:00:38"
                }
            ]
        },
        {
            "id": "1695755632872853506",
            "parentId": "0",
            "weight": 9999,
            text: "新乡工程学院",
            "isLock": false,
            "createTime": "2023-07-28 17:28:48"
        },
        {
            "id": "1695755939543584770",
            "parentId": "0",
            "weight": 9999,
            text: "河南物流职业学院",
            "isLock": false,
            "createTime": "2023-07-28 17:28:48"
        },
        {
            "id": "1695757658092539906",
            "parentId": "0",
            "weight": 9999,
            text: "郑州IDC",
            "isLock": false,
            "createTime": "2023-08-27 19:18:26"
        },
        {
            "id": "1700451111573508098",
            "parentId": "0",
            "weight": 9999,
            text: "河南护理职业学院",
            "isLock": false,
            "createTime": "2023-09-09 18:08:33"
        },
        {
            "id": "1729303686158553089",
            "parentId": "0",
            "weight": 9999,
            text: "郑州教委",
            "isLock": false,
            "createTime": "2023-11-28 08:58:22"
        }
    ]
    $('#cc').combotree({data:schoolData});
    $('#cc').combotree('setValue', '1663718350488481793');
}
// 获取后台返回的楼宇列表数据
function getBuildList(){
    buildData = [
        {
            id: '',
            name: ''
        }
    ]
}
// 获取后台返回的房间数据
function getRoomList(){
    roomData = [
        {
            id: '317room',
            name: '317room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '318room',
            name: '318room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '315room',
            name: '315room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '313room',
            name: '313room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '311room',
            name: '311room',
            apStatus: 1, // 0正常 1异常
            num: 5
        },
        {
            id: '309room',
            name: '309room',
            apStatus: 1, // 0正常 1异常
            num: 5
        },
        {
            id: '307room',
            name: '307room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '305room',
            name: '305room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '301room',
            name: '301room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '303room',
            name: '303room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '302room',
            name: '302room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '304room',
            name: '304room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '306room',
            name: '306room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '308room',
            name: '308room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: 'wc1',
            name: '男厕',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '312room',
            name: '312room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '314room',
            name: '314room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '316room',
            name: '316room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: '310room',
            name: '310room',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
        {
            id: 'wc2',
            name: '女厕',
            apStatus: 0, // 0正常 1异常
            num: 5
        },
    ]
}
// 获取后台返回的用户用网终端列表
function getTerminalList(){
    $('#terminalList_bot').empty()
    let data = [
        {
            id: 1,
            name: '7a-e2-b8-b022-30',
            flow: '18.00'
        },
        {
            id: 2,
            name: '7a-e2-b8-b022-30',
            flow: '21.00'
        },
        {
            id: 3,
            name: '7a-e2-b8-b022-30--7a-e2-b8-b022-30',
            flow: '19.00'
        },
    ]
    var container = document.getElementById("terminalList_bot");
        for (var i = 0; i < data.length; i++) {
            var divElement = document.createElement("div");
            divElement.setAttribute("class", 'flex');

            var divElement1 = document.createElement("div");
            divElement1.textContent = data[i].name;
            divElement1.setAttribute("class", 'one overflowEllipsis1');
            
            var divElement2 = document.createElement("div");
            divElement2.setAttribute("class", 'two overflowEllipsis1');
            
            var divElement2_1 = document.createElement("span");
            divElement2_1.textContent = data[i].flow;
            divElement2_1.setAttribute("class", 'green');

            var divElement2_2 = document.createElement("span");
            divElement2_2.textContent = 'Mbps';
            
            // 将新创建的 `<div>` 元素添加到容器中
            container.appendChild(divElement)
            divElement.appendChild(divElement1)
            divElement.appendChild(divElement2)
            divElement2.appendChild(divElement2_1)
            divElement2.appendChild(divElement2_2);
        }
}
//创建切换面板
class panelTab{
    constructor() {
        this.panelOne();
    }
    //初始化面板
    panelOne(){
        let this_ =this
        let panelOne = `
        <div class="tab">
                  <ul class="flex justify-center">
                      <li>网络健康</li>
                      <li>用户用网</li>
                      <li class="current">运维工单</li>
                  </ul>
              </div>
        `
        $('#div2d').append(panelOne)
        $('.tab ul li').on('click',function(){
            $(this).parent().children().removeClass('current')
            $(this).addClass('current')
            if($(this).context.innerText == '网络健康'){
                $('.order').css({display: 'none'})
                $('.userNetwork').css({display: 'none'})
                $('.networkHealth').css({display: 'block'})
                currentTab = 0
            } else if($(this).context.innerText == '用户用网'){
                $('.networkHealth').css({display: 'none'})
                $('.order').css({display: 'none'})
                $('.userNetwork').css({display: 'block'})
                // if(!enterBuild && !enterFloor){
                //     userNetworkHtmlUpdate()
                // }
                currentTab = 1
            } else if($(this).context.innerText == '运维工单'){
                $('.networkHealth').css({display: 'none'})
                $('.userNetwork').css({display: 'none'})
                $('.order').css({display: 'block'})
                currentTab = 2
            }

            // 隐藏各种异常面板
            $('#network_detail_panel').css({display: 'none'})
            $('#network_detail_panel_detail').css({display: 'none'})
            $('#userNework_detail_panel').css({display: 'none'})
            $('#userNework_detail_panel_normal').css({display: 'none'})
            $('#order_detail_panel').css({display: 'none'})

            // 更新房间上的数据
            updateRoomNum()
            
        })
    }
}
// 更新房间上的数据(园区数据和接口返回数据对比)
function updateRoomNum(){
    if(currentTab == 0){
        roomList.forEach((item, index) => {
           $('#' + item.id + ' .buildName .num').css({ display: 'block'});
           let obj = roomData.filter(e=>{ return e.id == item.id})
           $('#' + item.id + ' .buildName .num').text((obj[0] && obj[0].num) ? (obj[0].num + index) : 0);
           $('#' + item.id + ' .buildName .yuan').css({ background: '#4dffa6'}); // 设置绿色
           // 移除buildName的点击事件
           $('#' + item.id + ' .buildName').off('click')
        })
        if(!enterBuild && !enterFloor){
            $('.buildFloorNum').css({display: 'none'}) // 在线人数分层
        }
    } else if(currentTab == 1){
        roomList.forEach((item) => {
            $('#' + item.id + ' .buildName .num').css({ display: 'none'});
            let obj = roomData.filter(e=>{ return e.id == item.id})
            if(obj[0]){
                if(obj[0].apStatus == 1){ //0正常 1异常
                    $('#' + item.id + ' .buildName .yuan').css({ background: '#f27a40'}); // 设置橙色
                    $('#' + item.id + ' .buildName').on('click',function(){
                        // 创建异常面板
                        app.create({
                            type: 'UIAnchor',
                            parent: item,
                            element: createElementAbnormal('userNework_detail_panel'), // 此参数填写要添加的Dom元素
                            localPosition: [0, 0, 0],
                            pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
                        })
                        $('#userNework_detail_panel_normal').css({display: 'none'})
                    })
                } else {
                    $('#' + item.id + ' .buildName').on('click',function(){
                        // 创建正常面板
                        app.create({
                            type: 'UIAnchor',
                            parent: item,
                            element: createElementAbnormal('userNework_detail_panel_normal'), // 此参数填写要添加的Dom元素
                            localPosition: [0, 0, 0],
                            pivot: [0.5, 1] //[0,0]即以界面左上角定位，[1,1]即以界面右下角进行定位
                        })
                        getTerminalList()
                        $('#userNework_detail_panel').css({display: 'none'})
                    })
                }
            }
        })
        if(!enterBuild && !enterFloor){
            $('.buildFloorNum').css({display: 'block'}) // 在线人数分层
            userNetworkHtmlUpdate()
        }
    } else if(currentTab == 2){
        roomList.forEach((item, index) => {
           $('#' + item.id + ' .buildName .num').css({ display: 'block'});
           let obj = roomData.filter(e=>{ return e.id == item.id})
        //    console.log('obj',obj,roomData,roomList,item)
           $('#' + item.id + ' .buildName .num').text((obj[0] && obj[0].num) ? obj[0].num + 10 + index : 0);
           $('#' + item.id + ' .buildName .yuan').css({ background: '#4dffa6'}); // 设置绿色
           // 移除buildName的点击事件
           $('#' + item.id + ' .buildName').off('click')
        })
        if(!enterBuild && !enterFloor){
            $('.buildFloorNum').css({display: 'none'}) // 在线人数分层
        }
    }
}