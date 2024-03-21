class userNetwork {
    constructor() {
        this.initHtml();
        this.getData();
    }
    // 初始化面板
    initHtml() {
        let html = `
        <div class="userNetwork">
            <div class="networkHealth_l">
                <div class="networkHealth_l_top gyBg" style="height: 320px;">
                    <div class="title">在线人数分析<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="online flex justify-between">
                            <div class="flex align-center">
                                <img src="/static/img/ico06.png"/>
                                <div>
                                    <p><span>9788</span>人</p>
                                    在线用户数
                                </div>
                            </div>
                            <div class="flex align-center">
                                <img src="/static/img/ico07.png"/>
                                <div>
                                    <p><span>19006</span>人</p>
                                    开通人数
                                </div>
                            </div>
                        </div>
                        <div class="lineEchart" id="echart_2_4" style="width: 338px; height: 180px;"></div>
                    </div>
                </div>
                <div class="networkHealth_l_middle gyBg mt15" style="height: 310px;">
                    <div class="title">在线人数TOP5<i>Computer room</i><span></span></div>
                    <div class="con top05">
                        <div class="titleD flex">
                            <div class="one">排名</div>
                            <div class="two">楼宇名称</div>
                            <div class="three">在线人数</div>
                        </div>
                        <div id="onlineTop5" class="top5">
                        </div>
                    </div>
                </div>
                <div class="networkHealth_l_bot gyBg mt15" style="height: 282px;">
                    <div class="title">认证失败原因<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="pieEchart" id="echart_5_3" style="width: 318px; height: 160px; margin-top: 10px;"></div>
                    </div>
                </div>
            </div>
            <div class="networkHealth_r">
                <div class="networkHealth_l_top gyBg" style="height: 280px;">
                    <div class="title">上网流量趋势<i>Computer room</i><span></span></div>
                    <div class="con">
                       <div class="flex justify-between align-center">
                        图例 
                        <p><img src="/static/img/tip.png"/><span class="unit">单位：Gbps</span></p>
                       </div>
                        <div class="lineEchart" id="echart_2_5" style="width: 318px; height: 188px;"></div>
                    </div>
                </div>
                <div class="networkHealth_l_middle gyBg mt15" style="height: 310px;">
                    <div class="title">上网流量TOP5<i>Computer room</i><span></span></div>
                    <div class="con top05">
                        <div class="titleD flex">
                            <div class="one">排名</div>
                            <div class="two">楼宇名称</div>
                            <div class="three">在线流量</div>
                        </div>
                        <div id="onFlowTop5" class="top5">
                        </div>
                    </div>
                </div>
                <div class="networkHealth_l_bot gyBg mt15" style="height: 300px;">
                    <div class="title">认证失败趋势<i>Computer room</i><span></span></div>
                    <div class="con">
                       <div class="flex justify-between align-center">
                        图例
                        <p><img src="/static/img/tip2.png"/><span class="unit">单位：条</span></p>
                       </div>
                        <div class="lineEchart" id="echart_2_6" style="width: 318px; height: 188px;"></div>
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
    this.onlineTrend()
    this.onlineTop()
    this.authenticationFailed()
    this.internetTrafficTrend()
    this.onFlowTop()
    this.authenticationFailedTrend()
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
    // 在线人数TOP5
    onlineTop() {
        let data = [
            {
                id: 1,
                name: '东1号楼',
                onlineNum: 2541
            },
            {
                id: 2,
                name: '西寓10号楼',
                onlineNum: 1960
            },
            {
                id: 3,
                name: '西寓9号楼',
                onlineNum: 1960
            },
            {
                id: 4,
                name: '东教3号楼',
                onlineNum: 1960
            },
            {
                id: 5,
                name: '东教6号楼',
                onlineNum: 1960
            },
        ]
        var container = document.getElementById("onlineTop5");
        for (var i = 0; i < data.length; i++) {
            var divElement = document.createElement("div");
            divElement.setAttribute("class", 'flex');

            var divElement1 = document.createElement("div");
            // divElement1.textContent = i == 0 ? '<img src="/static/img/ico06.png"/>' : '11';
            // divElement1.textContent = i + 1;
            divElement1.setAttribute("class", 'one');

            var divElement2 = document.createElement("div");
            divElement2.textContent = data[i].name;
            divElement2.setAttribute("class", 'two');
            
            var divElement3 = document.createElement("div");
            divElement3.textContent = data[i].onlineNum;
            divElement3.setAttribute("class", 'three');
            // 将新创建的 `<div>` 元素添加到容器中
            container.appendChild(divElement)
            divElement.appendChild(divElement1)
            divElement.appendChild(divElement2)
            divElement.appendChild(divElement3)
        }
        
    }
    // 认证失败原因
    authenticationFailed() {
        let dataR = [
            {
                name: "中断",
                value: "17",
            },
            {
                name: "流量过大",
                value: "16",
            },
            {
                name: "错误包",
                value: "9",
            },
            {
                name: "丢包",
                value: "3",
            },
            {
                name: "协商速率",
                value: "6",
            },
        ]
        new echartSet().setYuan('echart_5_3', dataR, 3)
    }
    // 上网流量趋势
    internetTrafficTrend() {
        let X = ['15:00','16:00','17:00','18:00','19:00','20:00','21:00']
        let Y = [20,20,30,40,30,20,10]
        new echartSet().setLine('echart_2_5', X, Y, 'green')
    }
    // 上网流量TOP5
    onFlowTop() {
        let data = [
            {
                id: 1,
                name: '东1号楼',
                onlineNum: 2541
            },
            {
                id: 2,
                name: '西寓10号楼',
                onlineNum: 1960
            },
            {
                id: 3,
                name: '西寓9号楼',
                onlineNum: 1960
            },
            {
                id: 4,
                name: '东教3号楼',
                onlineNum: 1960
            },
            {
                id: 5,
                name: '东教6号楼',
                onlineNum: 1960
            },
        ]
        var container = document.getElementById("onFlowTop5");
        for (var i = 0; i < data.length; i++) {
            var divElement = document.createElement("div");
            divElement.setAttribute("class", 'flex');

            var divElement1 = document.createElement("div");
            divElement1.setAttribute("class", 'one');

            var divElement2 = document.createElement("div");
            divElement2.textContent = data[i].name;
            divElement2.setAttribute("class", 'two');
            
            var divElement3 = document.createElement("div");
            divElement3.textContent = data[i].onlineNum + 'Gbps';
            divElement3.setAttribute("class", 'three');
            // 将新创建的 `<div>` 元素添加到容器中
            container.appendChild(divElement)
            divElement.appendChild(divElement1)
            divElement.appendChild(divElement2)
            divElement.appendChild(divElement3)
        }
        
    }
    // 认证失败趋势
    authenticationFailedTrend() {
        let X = ['15:00','16:00','17:00','18:00','19:00','20:00','21:00']
        let Y = [10,20,30,40,30,20,10]
        new echartSet().setLine('echart_2_6', X, Y, 'orange')
    }
    
}