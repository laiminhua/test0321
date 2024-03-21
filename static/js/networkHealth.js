class networkHealth {
    constructor() {
        this.initHtml();
        this.getData();
    }
    // 初始化面板
    initHtml() {
        let html = `
        <div class="networkHealth">
            <div class="networkHealth_l">
                <div class="networkHealth_l_top gyBg" style="height: 380px;">
                    <div class="title">网络设备概况<i>Computer room</i><span></span></div>
                    <div class="con networkHealth_l_top_bot">
                        <div class="flex align-center action">切换更多设备<img src="/static/img/qieh.png"/></div>
                        <ul>
                            <li>
                                <div class="flex align-center">
                                    <img src="/static/img/ico01.png"/>
                                    <p class="name">核心交换机</p>
                                </div>
                                <div class="flex align-center justify-between des">
                                    <p>正常<span class="blue">28</span>台</p>
                                    <p>离线<span class="orange">0</span>台</p>
                                </div>
                            </li>
                            <li>
                                <div class="flex align-center">
                                    <img src="/static/img/ico02.png"/>
                                    <p class="name">汇聚交换机</p>
                                </div>
                                <div class="flex align-center justify-between des">
                                    <p>正常<span class="blue">298</span>台</p>
                                    <p>离线<span class="orange">0</span>台</p>
                                </div>
                            </li>
                            <li>
                                <div class="flex align-center">
                                    <img src="/static/img/ico03.png"/>
                                    <p class="name">防火墙</p>
                                </div>
                                <div class="flex align-center justify-between des">
                                    <p>正常<span class="blue">15</span>台</p>
                                    <p>离线<span class="orange">0</span>台</p>
                                </div>
                            </li>
                            <li>
                                <div class="flex align-center">
                                    <img src="/static/img/ico04.png"/>
                                    <p class="name">AC设备</p>
                                </div>
                                <div class="flex align-center justify-between des">
                                    <p>正常<span class="blue">23</span>台</p>
                                    <p>离线<span class="orange">0</span>台</p>
                                </div>
                            </li>
                            <li>
                                <div class="flex align-center">
                                    <img src="/static/img/ico02.png"/>
                                    <p class="name">接入交换机</p>
                                </div>
                                <div class="flex align-center justify-between des">
                                    <p>正常<span class="blue">694</span>台</p>
                                    <p>离线<span class="orange">0</span>台</p>
                                </div>
                            </li>
                            <li>
                                <div class="flex align-center">
                                    <img src="/static/img/ico05.png"/>
                                    <p class="name">BRAS</p>
                                </div>
                                <div class="flex align-center justify-between des">
                                    <p>正常<span class="blue">12</span>台</p>
                                    <p>离线<span class="orange">0</span>台</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="networkHealth_l_middle gyBg mt15" style="height: 240px;">
                    <div class="title">设备分布区域<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="pieEchart" id="echart_5_1" style="width: 318px; height: 160px;"></div>
                    </div>
                </div>
                <div class="networkHealth_l_bot gyBg mt15" style="height: 300px;">
                    <div class="title">设备离线趋势<i>Computer room</i><span></span></div>
                    <div class="con">
                       <div class="flex justify-between align-center">
                        近7日内离线设备趋势 
                        <p><img src="/static/img/tip.png"/><span class="unit">单位：台</span></p>
                       </div>
                        <div class="lineEchart" id="echart_2_1" style="width: 338px; height: 188px;"></div>
                    </div>
                </div>
            </div>
            <div class="networkHealth_r">
                <div class="networkHealth_l_top gyBg">
                    <div class="title">流量使用趋势<i>Computer room</i><span></span></div>
                    <div class="con">
                       <div class="flex justify-between align-center operatorList">
                        <span class="current">移动</span>
                        <span>联通</span>
                        <span>电信</span>
                       </div>
                       <p class="legend">图例</p>
                        <div class="lineEchart" id="echart_2_2" style="width: 328px; height: 228px;"></div>
                    </div>
                </div>
                <div class="networkHealth_l_middle gyBg mt15" style="height: 260px;">
                    <div class="title">异常链路类型分布<i>Computer room</i><span></span></div>
                    <div class="con">
                        <div class="pieEchart" id="echart_5_2" style="width: 318px; height: 160px;"></div>
                    </div>
                </div>
                <div class="networkHealth_l_bot gyBg mt15" style="height: 300px;">
                    <div class="title">异常链路趋势分析<i>Computer room</i><span></span></div>
                    <div class="con">
                       <div class="flex justify-between align-center">
                        近7日内离线设备趋势 
                        <p><img src="/static/img/tip2.png"/><span class="unit">单位：条</span></p>
                       </div>
                        <div class="lineEchart" id="echart_2_3" style="width: 328px; height: 188px;"></div>
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
    this.showArea()
    this.showOfflineTrend()
    this.showFlowUsedTrend()
    this.showAbnormalLinkType()
    this.showAbnormalLinkTrend()

    // axios.get(`http://117.159.39.3:8002/api/admin/tenant/list`)
    // .then(res => {
    //     console.log('dd', res)
    // })
    }
    // 设备分布区域
    showArea() {
        let dataR = [
            {
                "areaCode": "d6c562010e264770acf67cb8af6beba4",
                "areaName": "教学办公区",
                "count": 9219,
                "outCount": 838
            },
            {
                "areaCode": "b46a72d1f5de476fb482fe8bac18c9cd",
                "areaName": "功能区",
                "count": 1305,
                "outCount": 838
            },
            {
                "areaCode": null,
                "areaName": "其他区域",
                "count": 48899,
                "outCount": 838
            }
        ]
        let num = 0
        dataR.forEach(e=>{
        num += e.count
        e.name = e.areaName
        e.value = e.count
        })
        new echartSet().setYuan('echart_5_1', dataR, 2)
    }
    // 设备离线趋势
    showOfflineTrend() {
        let X = ['12.1','12.2','12.3','12.4','12.5','12.6','12.7']
        let Y = [20,20,30,40,30,20,10]
        new echartSet().setLine('echart_2_1', X, Y, 'green')
    }
    // 流量使用趋势
    showFlowUsedTrend() {
        let obj = {
            "total": [
              {
                "date": "01.04 00:07",
                "value": 66.77
              },
              {
                "date": "01.04 00:08",
                "value": 65.65
              },
              {
                "date": "01.04 00:09",
                "value": 65.65
              },
              {
                "date": "01.04 00:34",
                "value": 65.18
              },
              {
                "date": "01.04 00:35",
                "value": 65.12
              },
              {
                "date": "01.04 00:35",
                "value": 65.12
              },
              {
                "date": "01.04 00:52",
                "value": 54.44
              },
              {
                "date": "01.04 00:53",
                "value": 53.97
              },
              {
                "date": "01.04 00:53",
                "value": 53.97
              },
              {
                "date": "01.04 01:49",
                "value": 32.25
              },
              {
                "date": "01.04 01:50",
                "value": 32.25
              },
              {
                "date": "01.04 01:50",
                "value": 32.39
              },
              {
                "date": "01.04 02:13",
                "value": 26.71
              },
              {
                "date": "01.04 02:14",
                "value": 26.45
              },
              {
                "date": "01.04 02:15",
                "value": 26.45
              },
              {
                "date": "01.04 02:38",
                "value": 21.05
              },
              {
                "date": "01.04 02:38",
                "value": 20.92
              },
              {
                "date": "01.04 02:39",
                "value": 20.91
              },
              {
                "date": "01.04 03:01",
                "value": 16.55
              },
              {
                "date": "01.04 03:02",
                "value": 16.58
              },
              {
                "date": "01.04 03:03",
                "value": 16.45
              },
              {
                "date": "01.04 04:03",
                "value": 11.03
              },
              {
                "date": "01.04 04:04",
                "value": 11.09
              },
              {
                "date": "01.04 04:04",
                "value": 11.09
              },
              {
                "date": "01.04 04:27",
                "value": 9.38
              },
              {
                "date": "01.04 04:28",
                "value": 9.3
              },
              {
                "date": "01.04 04:29",
                "value": 9.3
              },
              {
                "date": "01.04 04:51",
                "value": 8.41
              },
              {
                "date": "01.04 04:52",
                "value": 8.66
              },
              {
                "date": "01.04 04:52",
                "value": 8.65
              },
              {
                "date": "01.04 05:15",
                "value": 8.14
              },
              {
                "date": "01.04 05:16",
                "value": 8.14
              },
              {
                "date": "01.04 05:16",
                "value": 8.08
              },
              {
                "date": "01.04 06:20",
                "value": 6.8
              },
              {
                "date": "01.04 06:21",
                "value": 6.8
              },
              {
                "date": "01.04 06:21",
                "value": 6.8
              },
              {
                "date": "01.04 06:44",
                "value": 7.48
              },
              {
                "date": "01.04 06:45",
                "value": 7.48
              },
              {
                "date": "01.04 06:46",
                "value": 7.64
              },
              {
                "date": "01.04 07:09",
                "value": 11.21
              },
              {
                "date": "01.04 07:10",
                "value": 11.21
              },
              {
                "date": "01.04 07:10",
                "value": 11.17
              },
              {
                "date": "01.04 07:33",
                "value": 15.8
              },
              {
                "date": "01.04 07:33",
                "value": 15.82
              },
              {
                "date": "01.04 07:34",
                "value": 15.73
              },
              {
                "date": "01.04 08:39",
                "value": 35.31
              },
              {
                "date": "01.04 08:40",
                "value": 34.95
              },
              {
                "date": "01.04 08:41",
                "value": 34.95
              },
              {
                "date": "01.04 09:00",
                "value": 37.26
              },
              {
                "date": "01.04 09:01",
                "value": 37.21
              },
              {
                "date": "01.04 09:02",
                "value": 38.15
              },
              {
                "date": "01.04 09:21",
                "value": 41.18
              },
              {
                "date": "01.04 09:22",
                "value": 42.85
              },
              {
                "date": "01.04 09:22",
                "value": 43.23
              },
              {
                "date": "01.04 09:45",
                "value": 48.39
              },
              {
                "date": "01.04 09:46",
                "value": 48.56
              },
              {
                "date": "01.04 09:47",
                "value": 51.06
              },
              {
                "date": "01.04 10:07",
                "value": 65.93
              },
              {
                "date": "01.04 11:07",
                "value": 82.16
              },
              {
                "date": "01.04 11:08",
                "value": 82.08
              },
              {
                "date": "01.04 11:09",
                "value": 82.08
              },
              {
                "date": "01.04 11:31",
                "value": 86.28
              },
              {
                "date": "01.04 11:32",
                "value": 87.8
              },
              {
                "date": "01.04 11:32",
                "value": 88
              },
              {
                "date": "01.04 11:52",
                "value": 110.35
              },
              {
                "date": "01.04 11:53",
                "value": 108.97
              },
              {
                "date": "01.04 11:54",
                "value": 108.97
              },
              {
                "date": "01.04 12:16",
                "value": 130.2
              },
              {
                "date": "01.04 12:17",
                "value": 133.8
              },
              {
                "date": "01.04 12:18",
                "value": 133.84
              },
              {
                "date": "01.04 13:22",
                "value": 107.06
              },
              {
                "date": "01.04 13:23",
                "value": 106.85
              },
              {
                "date": "01.04 13:23",
                "value": 106.85
              },
              {
                "date": "01.04 13:43",
                "value": 92.54
              },
              {
                "date": "01.04 13:44",
                "value": 92.02
              },
              {
                "date": "01.04 13:44",
                "value": 92.02
              },
              {
                "date": "01.04 14:03",
                "value": 81.17
              },
              {
                "date": "01.04 14:04",
                "value": 80.87
              },
              {
                "date": "01.04 14:05",
                "value": 80.96
              },
              {
                "date": "01.04 14:25",
                "value": 73.68
              },
              {
                "date": "01.04 14:26",
                "value": 73.74
              },
              {
                "date": "01.04 14:26",
                "value": 75.5
              },
              {
                "date": "01.04 15:26",
                "value": 69.39
              },
              {
                "date": "01.04 15:27",
                "value": 69.78
              },
              {
                "date": "01.04 15:28",
                "value": 69.67
              },
              {
                "date": "01.04 15:45",
                "value": 69.95
              },
              {
                "date": "01.04 15:45",
                "value": 70.01
              },
              {
                "date": "01.04 15:46",
                "value": 69.79
              },
              {
                "date": "01.04 16:06",
                "value": 70.57
              },
              {
                "date": "01.04 16:07",
                "value": 69.26
              },
              {
                "date": "01.04 16:08",
                "value": 69.28
              },
              {
                "date": "01.04 16:27",
                "value": 77.04
              },
              {
                "date": "01.04 16:28",
                "value": 76.89
              },
              {
                "date": "01.04 16:29",
                "value": 77.01
              },
              {
                "date": "01.04 17:26",
                "value": 81.73
              },
              {
                "date": "01.04 17:26",
                "value": 81.49
              },
              {
                "date": "01.04 17:27",
                "value": 80.97
              },
              {
                "date": "01.04 17:50",
                "value": 78.49
              },
              {
                "date": "01.04 17:50",
                "value": 78.49
              },
              {
                "date": "01.04 17:51",
                "value": 78.58
              },
              {
                "date": "01.04 18:14",
                "value": 84.86
              },
              {
                "date": "01.04 18:15",
                "value": 84.86
              },
              {
                "date": "01.04 18:15",
                "value": 84.6
              },
              {
                "date": "01.04 18:32",
                "value": 86.85
              },
              {
                "date": "01.04 18:33",
                "value": 88.46
              },
              {
                "date": "01.04 18:35",
                "value": 88.44
              },
              {
                "date": "01.04 19:20",
                "value": 94.51
              },
              {
                "date": "01.04 19:22",
                "value": 94.23
              },
              {
                "date": "01.04 19:24",
                "value": 94.53
              },
              {
                "date": "01.04 19:44",
                "value": 94.97
              },
              {
                "date": "01.04 19:45",
                "value": 94.9
              },
              {
                "date": "01.04 19:46",
                "value": 95.05
              },
              {
                "date": "01.04 20:04",
                "value": 95.63
              },
              {
                "date": "01.04 20:05",
                "value": 95.69
              },
              {
                "date": "01.04 20:06",
                "value": 97.6
              },
              {
                "date": "01.04 20:25",
                "value": 99.23
              },
              {
                "date": "01.04 20:26",
                "value": 99.23
              },
              {
                "date": "01.04 20:27",
                "value": 100.34
              },
              {
                "date": "01.04 21:40",
                "value": 100.27
              },
              {
                "date": "01.04 21:42",
                "value": 100.61
              },
              {
                "date": "01.04 21:45",
                "value": 100.57
              },
              {
                "date": "01.04 22:06",
                "value": 104.08
              },
              {
                "date": "01.04 22:09",
                "value": 104.21
              },
              {
                "date": "01.04 22:12",
                "value": 104.27
              },
              {
                "date": "01.04 22:27",
                "value": 108.48
              },
              {
                "date": "01.04 22:28",
                "value": 108.1
              },
              {
                "date": "01.04 22:29",
                "value": 108.53
              },
              {
                "date": "01.04 22:45",
                "value": 107.08
              },
              {
                "date": "01.04 22:46",
                "value": 107.2
              },
              {
                "date": "01.04 22:47",
                "value": 107.26
              },
              {
                "date": "01.04 23:57",
                "value": 37.76
              }
            ],
            "up": [
              {
                "date": "01.04 00:07",
                "value": 9.27
              },
              {
                "date": "01.04 00:08",
                "value": 9.33
              },
              {
                "date": "01.04 00:09",
                "value": 9.33
              },
              {
                "date": "01.04 00:34",
                "value": 8.05
              },
              {
                "date": "01.04 00:35",
                "value": 8.08
              },
              {
                "date": "01.04 00:35",
                "value": 8.08
              },
              {
                "date": "01.04 00:52",
                "value": 7.59
              },
              {
                "date": "01.04 00:53",
                "value": 7.47
              },
              {
                "date": "01.04 00:53",
                "value": 7.47
              },
              {
                "date": "01.04 01:49",
                "value": 4.55
              },
              {
                "date": "01.04 01:50",
                "value": 4.55
              },
              {
                "date": "01.04 01:50",
                "value": 4.55
              },
              {
                "date": "01.04 02:13",
                "value": 3.66
              },
              {
                "date": "01.04 02:14",
                "value": 3.62
              },
              {
                "date": "01.04 02:15",
                "value": 3.62
              },
              {
                "date": "01.04 02:38",
                "value": 2.85
              },
              {
                "date": "01.04 02:38",
                "value": 2.81
              },
              {
                "date": "01.04 02:39",
                "value": 2.81
              },
              {
                "date": "01.04 03:01",
                "value": 2.64
              },
              {
                "date": "01.04 03:02",
                "value": 2.62
              },
              {
                "date": "01.04 03:03",
                "value": 2.59
              },
              {
                "date": "01.04 04:03",
                "value": 1.95
              },
              {
                "date": "01.04 04:04",
                "value": 1.99
              },
              {
                "date": "01.04 04:04",
                "value": 1.99
              },
              {
                "date": "01.04 04:27",
                "value": 1.65
              },
              {
                "date": "01.04 04:28",
                "value": 1.59
              },
              {
                "date": "01.04 04:29",
                "value": 1.59
              },
              {
                "date": "01.04 04:51",
                "value": 1.72
              },
              {
                "date": "01.04 04:52",
                "value": 1.7
              },
              {
                "date": "01.04 04:52",
                "value": 1.67
              },
              {
                "date": "01.04 05:15",
                "value": 1.69
              },
              {
                "date": "01.04 05:16",
                "value": 1.69
              },
              {
                "date": "01.04 05:16",
                "value": 1.68
              },
              {
                "date": "01.04 06:20",
                "value": 1.66
              },
              {
                "date": "01.04 06:21",
                "value": 1.66
              },
              {
                "date": "01.04 06:21",
                "value": 1.66
              },
              {
                "date": "01.04 06:44",
                "value": 1.82
              },
              {
                "date": "01.04 06:45",
                "value": 1.82
              },
              {
                "date": "01.04 06:46",
                "value": 1.83
              },
              {
                "date": "01.04 07:09",
                "value": 2.1
              },
              {
                "date": "01.04 07:10",
                "value": 2.1
              },
              {
                "date": "01.04 07:10",
                "value": 2.1
              },
              {
                "date": "01.04 07:33",
                "value": 2.44
              },
              {
                "date": "01.04 07:33",
                "value": 2.46
              },
              {
                "date": "01.04 07:34",
                "value": 2.47
              },
              {
                "date": "01.04 08:39",
                "value": 3.81
              },
              {
                "date": "01.04 08:40",
                "value": 3.81
              },
              {
                "date": "01.04 08:41",
                "value": 3.75
              },
              {
                "date": "01.04 09:00",
                "value": 3.98
              },
              {
                "date": "01.04 09:01",
                "value": 3.98
              },
              {
                "date": "01.04 09:02",
                "value": 3.85
              },
              {
                "date": "01.04 09:21",
                "value": 4.38
              },
              {
                "date": "01.04 09:22",
                "value": 4.39
              },
              {
                "date": "01.04 09:22",
                "value": 4.47
              },
              {
                "date": "01.04 09:45",
                "value": 4.45
              },
              {
                "date": "01.04 09:46",
                "value": 4.45
              },
              {
                "date": "01.04 09:47",
                "value": 4.47
              },
              {
                "date": "01.04 10:07",
                "value": 5.45
              },
              {
                "date": "01.04 11:07",
                "value": 6.93
              },
              {
                "date": "01.04 11:08",
                "value": 7.01
              },
              {
                "date": "01.04 11:09",
                "value": 7.01
              },
              {
                "date": "01.04 11:31",
                "value": 7.96
              },
              {
                "date": "01.04 11:32",
                "value": 8.01
              },
              {
                "date": "01.04 11:32",
                "value": 7.81
              },
              {
                "date": "01.04 11:52",
                "value": 9.45
              },
              {
                "date": "01.04 11:53",
                "value": 9.41
              },
              {
                "date": "01.04 11:54",
                "value": 9.41
              },
              {
                "date": "01.04 12:16",
                "value": 13.36
              },
              {
                "date": "01.04 12:17",
                "value": 13.67
              },
              {
                "date": "01.04 12:18",
                "value": 13.65
              },
              {
                "date": "01.04 13:22",
                "value": 12.34
              },
              {
                "date": "01.04 13:23",
                "value": 12.14
              },
              {
                "date": "01.04 13:23",
                "value": 12.14
              },
              {
                "date": "01.04 13:43",
                "value": 10.48
              },
              {
                "date": "01.04 13:44",
                "value": 10.45
              },
              {
                "date": "01.04 13:44",
                "value": 10.45
              },
              {
                "date": "01.04 14:03",
                "value": 9.66
              },
              {
                "date": "01.04 14:04",
                "value": 9.57
              },
              {
                "date": "01.04 14:05",
                "value": 9.53
              },
              {
                "date": "01.04 14:25",
                "value": 8.74
              },
              {
                "date": "01.04 14:26",
                "value": 8.78
              },
              {
                "date": "01.04 14:26",
                "value": 8.78
              },
              {
                "date": "01.04 15:26",
                "value": 8.25
              },
              {
                "date": "01.04 15:27",
                "value": 8.3
              },
              {
                "date": "01.04 15:28",
                "value": 8.22
              },
              {
                "date": "01.04 15:45",
                "value": 8.71
              },
              {
                "date": "01.04 15:45",
                "value": 8.71
              },
              {
                "date": "01.04 15:46",
                "value": 8.61
              },
              {
                "date": "01.04 16:06",
                "value": 8.47
              },
              {
                "date": "01.04 16:07",
                "value": 8.57
              },
              {
                "date": "01.04 16:08",
                "value": 8.59
              },
              {
                "date": "01.04 16:27",
                "value": 8.69
              },
              {
                "date": "01.04 16:28",
                "value": 8.68
              },
              {
                "date": "01.04 16:29",
                "value": 8.71
              },
              {
                "date": "01.04 17:26",
                "value": 9.98
              },
              {
                "date": "01.04 17:26",
                "value": 9.99
              },
              {
                "date": "01.04 17:27",
                "value": 10.18
              },
              {
                "date": "01.04 17:50",
                "value": 10.46
              },
              {
                "date": "01.04 17:50",
                "value": 10.46
              },
              {
                "date": "01.04 17:51",
                "value": 10.55
              },
              {
                "date": "01.04 18:14",
                "value": 11.85
              },
              {
                "date": "01.04 18:15",
                "value": 11.85
              },
              {
                "date": "01.04 18:15",
                "value": 11.85
              },
              {
                "date": "01.04 18:32",
                "value": 12.53
              },
              {
                "date": "01.04 18:33",
                "value": 12.92
              },
              {
                "date": "01.04 18:35",
                "value": 12.92
              },
              {
                "date": "01.04 19:20",
                "value": 13.68
              },
              {
                "date": "01.04 19:22",
                "value": 14.02
              },
              {
                "date": "01.04 19:24",
                "value": 14.13
              },
              {
                "date": "01.04 19:44",
                "value": 15
              },
              {
                "date": "01.04 19:45",
                "value": 14.96
              },
              {
                "date": "01.04 19:46",
                "value": 14.95
              },
              {
                "date": "01.04 20:04",
                "value": 15.11
              },
              {
                "date": "01.04 20:05",
                "value": 15
              },
              {
                "date": "01.04 20:06",
                "value": 14.95
              },
              {
                "date": "01.04 20:25",
                "value": 15.8
              },
              {
                "date": "01.04 20:26",
                "value": 15.84
              },
              {
                "date": "01.04 20:27",
                "value": 16.04
              },
              {
                "date": "01.04 21:40",
                "value": 16.01
              },
              {
                "date": "01.04 21:42",
                "value": 16.23
              },
              {
                "date": "01.04 21:45",
                "value": 16.26
              },
              {
                "date": "01.04 22:06",
                "value": 15.97
              },
              {
                "date": "01.04 22:09",
                "value": 16.03
              },
              {
                "date": "01.04 22:12",
                "value": 16.19
              },
              {
                "date": "01.04 22:27",
                "value": 16.59
              },
              {
                "date": "01.04 22:28",
                "value": 16.59
              },
              {
                "date": "01.04 22:29",
                "value": 16.68
              },
              {
                "date": "01.04 22:45",
                "value": 16.32
              },
              {
                "date": "01.04 22:46",
                "value": 16.38
              },
              {
                "date": "01.04 22:47",
                "value": 16.54
              },
              {
                "date": "01.04 23:57",
                "value": 7.14
              }
            ],
            "down": [
              {
                "date": "01.04 00:07",
                "value": 57.5
              },
              {
                "date": "01.04 00:08",
                "value": 56.32
              },
              {
                "date": "01.04 00:09",
                "value": 56.32
              },
              {
                "date": "01.04 00:34",
                "value": 57.13
              },
              {
                "date": "01.04 00:35",
                "value": 57.04
              },
              {
                "date": "01.04 00:35",
                "value": 57.04
              },
              {
                "date": "01.04 00:52",
                "value": 46.85
              },
              {
                "date": "01.04 00:53",
                "value": 46.5
              },
              {
                "date": "01.04 00:53",
                "value": 46.5
              },
              {
                "date": "01.04 01:49",
                "value": 27.7
              },
              {
                "date": "01.04 01:50",
                "value": 27.7
              },
              {
                "date": "01.04 01:50",
                "value": 27.84
              },
              {
                "date": "01.04 02:13",
                "value": 23.05
              },
              {
                "date": "01.04 02:14",
                "value": 22.83
              },
              {
                "date": "01.04 02:15",
                "value": 22.83
              },
              {
                "date": "01.04 02:38",
                "value": 18.2
              },
              {
                "date": "01.04 02:38",
                "value": 18.11
              },
              {
                "date": "01.04 02:39",
                "value": 18.1
              },
              {
                "date": "01.04 03:01",
                "value": 13.91
              },
              {
                "date": "01.04 03:02",
                "value": 13.96
              },
              {
                "date": "01.04 03:03",
                "value": 13.86
              },
              {
                "date": "01.04 04:03",
                "value": 9.08
              },
              {
                "date": "01.04 04:04",
                "value": 9.1
              },
              {
                "date": "01.04 04:04",
                "value": 9.1
              },
              {
                "date": "01.04 04:27",
                "value": 7.73
              },
              {
                "date": "01.04 04:28",
                "value": 7.71
              },
              {
                "date": "01.04 04:29",
                "value": 7.71
              },
              {
                "date": "01.04 04:51",
                "value": 6.69
              },
              {
                "date": "01.04 04:52",
                "value": 6.96
              },
              {
                "date": "01.04 04:52",
                "value": 6.98
              },
              {
                "date": "01.04 05:15",
                "value": 6.45
              },
              {
                "date": "01.04 05:16",
                "value": 6.45
              },
              {
                "date": "01.04 05:16",
                "value": 6.4
              },
              {
                "date": "01.04 06:20",
                "value": 5.14
              },
              {
                "date": "01.04 06:21",
                "value": 5.14
              },
              {
                "date": "01.04 06:21",
                "value": 5.14
              },
              {
                "date": "01.04 06:44",
                "value": 5.66
              },
              {
                "date": "01.04 06:45",
                "value": 5.66
              },
              {
                "date": "01.04 06:46",
                "value": 5.81
              },
              {
                "date": "01.04 07:09",
                "value": 9.11
              },
              {
                "date": "01.04 07:10",
                "value": 9.11
              },
              {
                "date": "01.04 07:10",
                "value": 9.07
              },
              {
                "date": "01.04 07:33",
                "value": 13.36
              },
              {
                "date": "01.04 07:33",
                "value": 13.36
              },
              {
                "date": "01.04 07:34",
                "value": 13.26
              },
              {
                "date": "01.04 08:39",
                "value": 31.5
              },
              {
                "date": "01.04 08:40",
                "value": 31.14
              },
              {
                "date": "01.04 08:41",
                "value": 31.2
              },
              {
                "date": "01.04 09:00",
                "value": 33.28
              },
              {
                "date": "01.04 09:01",
                "value": 33.23
              },
              {
                "date": "01.04 09:02",
                "value": 34.3
              },
              {
                "date": "01.04 09:21",
                "value": 36.8
              },
              {
                "date": "01.04 09:22",
                "value": 38.46
              },
              {
                "date": "01.04 09:22",
                "value": 38.76
              },
              {
                "date": "01.04 09:45",
                "value": 43.94
              },
              {
                "date": "01.04 09:46",
                "value": 44.11
              },
              {
                "date": "01.04 09:47",
                "value": 46.59
              },
              {
                "date": "01.04 10:07",
                "value": 60.48
              },
              {
                "date": "01.04 11:07",
                "value": 75.23
              },
              {
                "date": "01.04 11:08",
                "value": 75.07
              },
              {
                "date": "01.04 11:09",
                "value": 75.07
              },
              {
                "date": "01.04 11:31",
                "value": 78.32
              },
              {
                "date": "01.04 11:32",
                "value": 79.79
              },
              {
                "date": "01.04 11:32",
                "value": 80.19
              },
              {
                "date": "01.04 11:52",
                "value": 100.9
              },
              {
                "date": "01.04 11:53",
                "value": 99.56
              },
              {
                "date": "01.04 11:54",
                "value": 99.56
              },
              {
                "date": "01.04 12:16",
                "value": 116.84
              },
              {
                "date": "01.04 12:17",
                "value": 120.13
              },
              {
                "date": "01.04 12:18",
                "value": 120.19
              },
              {
                "date": "01.04 13:22",
                "value": 94.72
              },
              {
                "date": "01.04 13:23",
                "value": 94.71
              },
              {
                "date": "01.04 13:23",
                "value": 94.71
              },
              {
                "date": "01.04 13:43",
                "value": 82.06
              },
              {
                "date": "01.04 13:44",
                "value": 81.57
              },
              {
                "date": "01.04 13:44",
                "value": 81.57
              },
              {
                "date": "01.04 14:03",
                "value": 71.51
              },
              {
                "date": "01.04 14:04",
                "value": 71.3
              },
              {
                "date": "01.04 14:05",
                "value": 71.43
              },
              {
                "date": "01.04 14:25",
                "value": 64.94
              },
              {
                "date": "01.04 14:26",
                "value": 64.96
              },
              {
                "date": "01.04 14:26",
                "value": 66.72
              },
              {
                "date": "01.04 15:26",
                "value": 61.14
              },
              {
                "date": "01.04 15:27",
                "value": 61.48
              },
              {
                "date": "01.04 15:28",
                "value": 61.45
              },
              {
                "date": "01.04 15:45",
                "value": 61.24
              },
              {
                "date": "01.04 15:45",
                "value": 61.3
              },
              {
                "date": "01.04 15:46",
                "value": 61.18
              },
              {
                "date": "01.04 16:06",
                "value": 62.1
              },
              {
                "date": "01.04 16:07",
                "value": 60.69
              },
              {
                "date": "01.04 16:08",
                "value": 60.69
              },
              {
                "date": "01.04 16:27",
                "value": 68.35
              },
              {
                "date": "01.04 16:28",
                "value": 68.21
              },
              {
                "date": "01.04 16:29",
                "value": 68.3
              },
              {
                "date": "01.04 17:26",
                "value": 71.75
              },
              {
                "date": "01.04 17:26",
                "value": 71.5
              },
              {
                "date": "01.04 17:27",
                "value": 70.79
              },
              {
                "date": "01.04 17:50",
                "value": 68.03
              },
              {
                "date": "01.04 17:50",
                "value": 68.03
              },
              {
                "date": "01.04 17:51",
                "value": 68.03
              },
              {
                "date": "01.04 18:14",
                "value": 73.01
              },
              {
                "date": "01.04 18:15",
                "value": 73.01
              },
              {
                "date": "01.04 18:15",
                "value": 72.75
              },
              {
                "date": "01.04 18:32",
                "value": 74.32
              },
              {
                "date": "01.04 18:33",
                "value": 75.54
              },
              {
                "date": "01.04 18:35",
                "value": 75.52
              },
              {
                "date": "01.04 19:20",
                "value": 80.83
              },
              {
                "date": "01.04 19:22",
                "value": 80.21
              },
              {
                "date": "01.04 19:24",
                "value": 80.4
              },
              {
                "date": "01.04 19:44",
                "value": 79.97
              },
              {
                "date": "01.04 19:45",
                "value": 79.94
              },
              {
                "date": "01.04 19:46",
                "value": 80.1
              },
              {
                "date": "01.04 20:04",
                "value": 80.52
              },
              {
                "date": "01.04 20:05",
                "value": 80.69
              },
              {
                "date": "01.04 20:06",
                "value": 82.65
              },
              {
                "date": "01.04 20:25",
                "value": 83.43
              },
              {
                "date": "01.04 20:26",
                "value": 83.39
              },
              {
                "date": "01.04 20:27",
                "value": 84.3
              },
              {
                "date": "01.04 21:40",
                "value": 84.26
              },
              {
                "date": "01.04 21:42",
                "value": 84.38
              },
              {
                "date": "01.04 21:45",
                "value": 84.31
              },
              {
                "date": "01.04 22:06",
                "value": 88.11
              },
              {
                "date": "01.04 22:09",
                "value": 88.18
              },
              {
                "date": "01.04 22:12",
                "value": 88.08
              },
              {
                "date": "01.04 22:27",
                "value": 91.89
              },
              {
                "date": "01.04 22:28",
                "value": 91.51
              },
              {
                "date": "01.04 22:29",
                "value": 91.85
              },
              {
                "date": "01.04 22:45",
                "value": 90.76
              },
              {
                "date": "01.04 22:46",
                "value": 90.82
              },
              {
                "date": "01.04 22:47",
                "value": 90.72
              },
              {
                "date": "01.04 23:57",
                "value": 30.62
              }
            ]
          }
          let data = []
          data[0] = this.handleData(obj.total, 'total')
          data[1] = this.handleData(obj.up, 'up')
          data[2] = this.handleData(obj.down, 'down')
        new echartSet().setMultipleLine('echart_2_2', data)
    }
    // 处理数据
    handleData(data, type){
        let obj = {
        name: '',
        time: [],
        value: []
        }
        if(type === 'total'){
        obj.name = '总流量'
        } else if(type === 'up'){
        obj.name = '上行'
        } else if(type === 'down'){
        obj.name = '下行'
        }
        obj.time = data.map(item => { return item.date })
        obj.value = data.map(item => { return item.value })
        return obj
    }
    // 异常链路类型分布
    showAbnormalLinkType() {
        let dataR = [
            {
                name: "链路Down",
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
                name: "10/100M异常",
                value: "6",
            },
        ]
        new echartSet().setYuan('echart_5_2', dataR, 1)
    }
    // 异常链路趋势
    showAbnormalLinkTrend() {
        let X = ['12.1','12.2','12.3','12.4','12.5','12.6','12.7']
        let Y = [10,20,30,40,30,20,10]
        new echartSet().setLine('echart_2_3', X, Y, 'orange')
    }
    
}