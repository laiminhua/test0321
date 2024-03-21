class orderHtml {
    constructor() {
        this.initHtml();
        this.getData();
        
        
        //获取学校数据
        // this.getSchool();
    }
    // 初始化面板
    initHtml() {
        let html = `
            <div class="order">
            <div class="networkHealth_l">
                <div class="networkHealth_l_top gyBg" style="height: 320px;">
                    <div class="title">工单处置情况<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="orderHandleL flex align-center justify-between">
                            <div class="left flex align-center">
                                <img src="/static/img/02.fw.png"/>
                                <div>
                                    <p><span class="blue fs16">511</span>件</p>
                                    待处置
                                </div>
                            </div>
                            <div class="center">
                                <p><span class="green fs16">126</span>件</p>
                                今日新增
                            </div>
                            <div class="right">
                                <p><span class="orange fs16">358</span>件</p>
                                今日处置
                            </div>
                        </div>
                        <div class="orderHandleL flex align-center justify-between">
                            <div class="left flex align-center">
                                <img src="/static/img/02.fw.png"/>
                                <div>
                                    <p><span class="blue fs16">256</span>件</p>
                                    今日下发
                                </div>
                            </div>
                            <div class="center">
                                <p><span class="green fs16">106</span>件</p>
                                待接单
                            </div>
                            <div class="right">
                                <p><span class="orange fs16">37</span>件</p>
                                处理中
                            </div>
                        </div>
                        <div class="orderHandleL flex align-center justify-between">
                            <div class="left flex align-center">
                                <img src="/static/img/02.fw.png"/>
                                <div>
                                    <p><span class="blue fs16">205</span>件</p>
                                    超时未接
                                </div>
                            </div>
                            <div class="center">
                                <p><span class="green fs16">124</span>件</p>
                                超时未完成
                            </div>
                            <div class="right">
                                <p><span class="orange fs16">20</span>件</p>
                                事件总量
                            </div>
                        </div>
                    </div>
                </div>
                <div class="networkHealth_l_middle networkHealth_l_middle_order gyBg mt15" style="height: 310px;">
                    <div class="title">事件关联设备<i>Computer room</i><span></span></div>
                    <div class="con top05">
                        <div class="titleD flex">
                            <div class="one">事件名称</div>
                            <div class="two">事件数量</div>
                            <div class="three">当前状态</div>
                        </div>
                        <div id="eventDevice" class="top5 rollT">
                        </div>
                    </div>
                </div>
                <div class="networkHealth_l_bot gyBg mt15" style="height: 282px;">
                    <div class="title">事件类型分布<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="pieEchart" id="echart_5_4" style="width: 318px; height: 160px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            <div class="networkHealth_r">
                <div class="networkHealth_l_top networkHealth_l_middle networkHealth_l_middle_order gyBg" style="height: 320px;">
                    <div class="title">待处置事件分布<i>Computer room</i><span></span></div>
                    <div class="con top05">
                        <div class="titleD flex">
                            <div class="one" style="width: 245px">事件名称</div>
                            <div class="two" style="width:83px; text-align:center">事件数量</div>
                        </div>
                        <div id="dHandleEvent" class="top5 rollT">
                        </div>
                    </div>
                </div>
                <div class="networkHealth_l_middle gyBg mt15" style="height: 280px;">
                    <div class="title">处置方式分布<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="pieEchart" id="echart_5_5" style="width: 318px; height: 160px; margin-top: 10px;"></div>
                    </div>
                </div>
                <div class="networkHealth_l_bot networkHealth_l_middle gyBg mt15" style="height: 300px; overflow: hidden;">
                    <div class="title">持续时长TOP10事件<i>Computer room</i><span></span></div>
                    <div class="con top05">
                        <div class="titleD flex">
                            <div class="one">排名</div>
                            <div class="two">事件名称</div>
                            <div class="three">持续时长</div>
                        </div>
                        <div id="durationTop10" class="top5 rollT">
                        </div>
                    </div>
                </div>
            </div>
        </div>  
            `
            $('#div2d').css('color','#fff')
            $('#div2d').append(html)

            
    }
    // 赋值数据
    setData(data){
        // document.getElementById("leftOneTitle").innerHTML = data.left1;
        // document.getElementById("leftTwoTitle").innerHTML = data.left2;
        // document.getElementById("leftThreeTitle").innerHTML = data.left3;
        // document.getElementById("rightOneTitle").innerHTML = data.right1;
        // document.getElementById("rightTwoTitle").innerHTML = data.right2;
        // document.getElementById("rightThreeTitle").innerHTML = data.right3;
    }
    
    
    // 获取基础数据
   getData(){
    console.log('更新数据')
    let obj = {
        left1: '工单处置情况',
        left2: '事件关联设备',
        left3: '事件类型分布',
        right1: '待处置事件分布',
        right2: '处置方式分布',
        right3: '持续时长TOP10事件',
    }
    this.setData(obj)
    // this.onlineTrend()
    this.eventAndDevice()
    this.eventType()
    this.handleType()
    this.dHandleEventRoll()
    this.durationRoll()
    // axios.get(`http://117.159.39.3:8002/api/admin/tenant/list`)
    // .then(res => {
    //     console.log('dd', res)
    // })
    }
    // 在线人数分析
    onlineTrend() {
        let X = ['15:00','16:00','17:00','18:00','19:00','20:00','21:00']
        let Y = [20,20,30,40,30,20,10]
        new echartSet().setLine('echart_2_4', X, Y, 'green')
    }
    // 事件关联设备
    eventAndDevice() {
        let data = [
            {
                id: 1,
                name: 'ZZCG-5SXL-AU46-1',
                count: 25,
                status: 1
            },
            {
                id: 2,
                name: 'ZZCG-JXL3-AU46',
                count: 19,
                status: 0
            },
            {
                id: 3,
                name: 'HAIT-FW',
                count: 10,
                status: 0
            },
            {
                id: 4,
                name: '东教3号楼',
                count: 18,
                status: 1
            },
            {
                id: 5,
                name: 'Center-S7506E-X',
                count: 60,
                status: 0
            },
            {
                id: 6,
                name: 'Center-S7506E',
                count: 60,
                status: 0
            },
        ]
        var container = document.getElementById("eventDevice");
        for (var i = 0; i < data.length; i++) {
            var divElement = document.createElement("div");
            divElement.setAttribute("class", 'flex');

            var divElement1 = document.createElement("div");
            divElement1.textContent = data[i].name;
            divElement1.setAttribute("class", 'one');

            var divElement2 = document.createElement("div");
            divElement2.textContent = data[i].count;
            divElement2.setAttribute("class", 'two');
            
            var divElement3 = document.createElement("div");
            if(data[i].status == 0){
                divElement3.textContent = '问题';
                divElement3.setAttribute("class", 'three orange');
            } else if(data[i].status == 1){
                divElement3.textContent = '正常';
                divElement3.setAttribute("class", 'three green');
            }
            // divElement3.textContent = data[i].status == 0 ? '问题' : data[i].status == 1 ? '正常' : '';
            // divElement3.setAttribute("class", 'three');
            // 将新创建的 `<div>` 元素添加到容器中
            container.appendChild(divElement)
            divElement.appendChild(divElement1)
            divElement.appendChild(divElement2)
            divElement.appendChild(divElement3)
        }
        // 设置滚动
        // this.scrollNews()
    }
    
    // 事件类型分布
    eventType() {
        let dataR = [
            {
                name: "link Down",
                value: "328",
            },
            {
                name: "AP离线",
                value: "152",
            },
            {
                name: "错误包阈值",
                value: "123",
            },
            {
                name: "设备离线",
                value: "173",
            },
            {
                name: "其他",
                value: "61",
            },
        ]
        new echartSet().setYuan('echart_5_4', dataR, 1)
    }
    // 处置方式分布
    handleType() {
        let dataR = [
            {
                name: "自动恢复",
                value: "1547",
            },
            {
                name: "线上",
                value: "136",
            },
            {
                name: "线下",
                value: "1089",
            },
            {
                name: "忽略",
                value: "109",
            },
        ]
        new echartSet().setYuan('echart_5_5', dataR, 4)
    }
   
    // 待处置事件分布
    dHandleEventRoll() {
        let data = [
            {
                id: 1,
                name: 'High bandwidth usage (>85%)',
                onlineNum: 3
            },
            {
                id: 2,
                name: '接口10/100M异常',
                onlineNum: 1
            },
            {
                id: 3,
                name: '接口错误包数超过阈值',
                onlineNum: 3
            },
            {
                id: 4,
                name: '设备离线',
                onlineNum: 4
            },
            {
                id: 5,
                name: '接口10/100M异常',
                onlineNum: 1
            },
            {
                id: 6,
                name: '接口10/',
                onlineNum: 1
            },
            {
                id: 7,
                name: 'Link down',
                onlineNum: 1
            },
        ]
        var container = document.getElementById("dHandleEvent");
        for (var i = 0; i < data.length; i++) {
            var divElement = document.createElement("div");
            divElement.setAttribute("class", 'flex');

            var divElement2 = document.createElement("div");
            divElement2.textContent = data[i].name;
            divElement2.setAttribute("class", 'two');
            
            var divElement3 = document.createElement("div");
            divElement3.textContent = data[i].onlineNum;
            divElement3.setAttribute("class", 'three');
            // 将新创建的 `<div>` 元素添加到容器中
            container.appendChild(divElement)
            divElement.appendChild(divElement2)
            divElement.appendChild(divElement3)
        }
        
    }
    // 持续时长TOP10
    durationRoll() {
        let data = [
            {
                id: 1,
                name: '河南测绘2号教学楼308AP离线/HNCH-JZ-3F-E528-PWR-1 G1/0/8:故障',
                onlineNum: '2天12小时17分34秒'
            },
            {
                id: 2,
                name: '南阳理工中关村汇聚-Interface Ten-GigabitEthernet0/0/15(3#stu-3F): High error rate (>2 for 5m)',
                onlineNum: '102天21小时26分37秒'
            },
            {
                id: 3,
                name: 'Interface TF0/24(shanglian): 接口错误包数超过阈值',
                onlineNum: '102天21小时10分7秒'
            },
            {
                id: 4,
                name: 'ZZXX-D2JXL-HJ-1/0/3:百十兆链路',
                onlineNum: '2天12小时17分34秒'
            },
            {
                id: 5,
                name: '河师大核心-Interface XGigabitEthernet7/0/11(): High error rate (>2 for 5m)',
                onlineNum: '2天7小时15分50秒'
            },
            {
                id: 6,
                name: '新乡工程学院极进AP-1-24:AP故障',
                onlineNum: '2天3小时4分18秒'
            },
            {
                id: 7,
                name: 'S1-A609-1:AP故障',
                onlineNum: '1天7小时6分10秒'
            },
        ]
        var container = document.getElementById("durationTop10");
        for (var i = 0; i < data.length; i++) {
            var divElement = document.createElement("div");
            divElement.setAttribute("class", 'flex');

            var divElement1 = document.createElement("div");
            divElement1.textContent = '';
            divElement1.setAttribute("class", 'one');
            
            var divElement2 = document.createElement("div");
            divElement2.textContent = data[i].name;
            divElement2.setAttribute("class", 'two');
            
            var divElement3 = document.createElement("div");
            divElement3.textContent = data[i].onlineNum + 'min';
            divElement3.setAttribute("class", 'three');
            // 将新创建的 `<div>` 元素添加到容器中
            container.appendChild(divElement)
            divElement.appendChild(divElement1)
            divElement.appendChild(divElement2)
            divElement.appendChild(divElement3)
        }
        // 设置滚动
        this.scrollNews()
    }
    // 滚动公用方法
    scrollNews() {
        $('.rollT').liMarquee({
            direction: 'up',
            drag: false,
            scrollamount: 20,
            runshort: false, // 内容不足是否滚动
        });
    }
    
}