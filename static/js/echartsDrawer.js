class echartSet {
  //  饼状图设置
  setYuan(el = '', data = [], num = 1) {
    // num 1代表一个数据值 2代表2个数据值 3代表认证失败原因带% 4代表1个数据值，但是间距拉大
    // let myChart = echarts.init(document.getElementById(el));
    //以下是解决：Vue 项目使用 ECharts 使用路由或者点击浏览器前进/后退切换页面回来图表不显示
    const domMap = document.getElementById(el);
    // 清除Echarts默认添加的属性
    domMap.removeAttribute("_echarts_instance_");
    let myChart = window.echarts.init(domMap);
    let option5 = {
      color: ["#00d398", "#f9cc55", "#22bdff", "#3a89fa", '#f48e5f', '#975fe5', '#f66542'],
      //圆环中心数据
      // title: [
      //   {
      //     // text: "{val|" + centerNum + "}{des|}\n{name|" + '累计数量' + "}",
      //     top: "center",
      //     // left: "14%",
      //     // left: "0",
      //     textStyle: {
      //       width: num === 2 ? 162 : 170,
      //       rich: {
      //         name: {
      //           fontSize: 14,
      //           color: "#333333",
      //           padding: [0, 0],
      //           align: 'center',
      //           // width: 200,
      //           // borderWidth: 2,
      //           // borderColor: '#000',
      //           // borderType: 'solid'
      //         },
      //         val: {
      //           fontSize: 26,
      //           color: "#333333",
      //           align: 'center',
      //           // width: 200,
      //         },
      //         des: {
      //           fontSize: 14,
      //           color: "#333333",
      //           // width: 200,
      //         },
      //       },
      //     },
      //   },
      // ],
      //右侧图例
      legend: {
        type: 'scroll',
        orient: 'vertical',
        pageIconSize: 10, // 翻页箭头大小
        show: true,
        top: '10%',
        right: -10,
        itemWidth: 10,
        itemHeight: 10,
        width: 20,
        padding: [0, 10],
        itemGap: num === 4 ? 20 : 10,
        formatter: (name) => {
          const rate = data.filter(item => item.name === name)[0].value
          const numL = data.filter(item => item.name === name)[0].outCount
          if(num === 1 || num === 4){
            // return `${name}  ${rate}个`
            return `${name.length > 10 ? name.substr(0, 10) + '...' : name}  ${rate}个`
          } else if(num === 2){
			return `${name.length > 10 ? name.substr(0, 10) + '...' : name}  ${rate}个；\n离线  ${numL}个`
          } else if(num === 3){
			return `${name.length > 10 ? name.substr(0, 10) + '...' : name}  ${rate}%`
          }
        },
        //开启tooltip
        tooltip: {
          show: true
        },
        textStyle: {
          lineHeight: 16,
          fontSize: 12,
          color: '#fff'
        }
      },
      grid: {
        left: 10,
        right: 15,
        top: 50,
        bottom: 40
      },
      series: [
        {
          type: "pie",
          radius: ["54%", "70%"],
          center: ["25%", "50%"],// 控制饼图生成在盒子的哪个位置，[左右,上下]
          data: data,
          hoverAnimation: true,
          minAngle: 22, // 设置最小扇区角度(0~360)，用于防止某个值过小导致扇区太小影响交互
          avoidLabelOverlap:true, // 是否启用防止标签重叠策略
          itemStyle: {
            // 间隔
			borderWidth: 3,
			borderType: 'solid',
			borderColor: '#0a142c',
			// borderColor: "rgba(0,0,0,0)",
          },
          label: {
            show: false,
            position: 'inside',
            formatter: (params) => {
              return `${params.percent.toFixed(1)}%`;
            },
            textStyle: {
              fontSize: '16'
            }
          },
          labelLine: {
            show: false
          },
          // labelLine: {
          // 	normal: {
          // 		length: 20,
          // 		length2: 20,
          // 		showAbove: false,
          // 		minTurnAngle: 30,
          // 		lineStyle: {
          // 			color: "#ddd", // 饼状图线条颜色
          // 			opacity: 1,
          // 			type: 'dashed',
          // 		},
          // 	},
          // },
          // label: {
          // 	normal: {
          // 		formatter: (params) => {
          // 			return (
          // 				"{value|" +
          // 				params.value +
          // 				"}{name|" +
          // 				"个}\n"
          // 			);
          // 			// return ( //百分比
          // 			//   "{value|" +
          // 			//   formatNumber(params.value) +
          // 			//   "%}\n{name|" +
          // 			//   '个' +
          // 			//   "}"
          // 			// );
          // 		},
          // 		rich: {
          // 			name: {
          // 				fontSize: 12,
          // 				padding: [-2, 10, 0, 4],
          // 				color: "#333333",
          // 			},
          // 			value: {
          // 				fontSize: 18,
          // 				color: "#333333",
          // 			},
          // 		},
          // 	},
          // },
        },
      ],
    };
    myChart.setOption(option5);
  }
  //  折线图设置 一条线 color = 'green'为绿色样式  color = 'orange' 为橙色样式
  setLine(el = '', X = [], Y = [], color = ''){
    // let myChart = echarts.init(document.getElementById(el));
	//以下是解决：Vue 项目使用 ECharts 使用路由或者点击浏览器前进/后退切换页面回来图表不显示
	const domMap = document.getElementById(el);
	// 清除Echarts默认添加的属性
	domMap.removeAttribute("_echarts_instance_");
	let myChart = echarts.init(domMap);
	let option2 = {
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: X,
			axisLine: { // ---坐标轴 轴线
				show: false, // ---是否显示
				// ------------------- 线 -------------------------
				lineStyle: {
					color: '#dcdfe6',
					width: 1,
					type: 'solid'
				}
			},
			splitLine: {
				show: false, // ---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
				lineStyle: {
					color: '#1f3b52',
					width: 1,
					type: 'solid' // ---类型
				}
			},
			axisLabel: { // ---坐标轴 标签
				show: true, // ---是否显示
				inside: false, // ---是否朝内
				rotate: 0, // ---旋转角度
				margin: 8, // ---刻度标签与轴线之间的距离
				color: '#ddd8d7', // ---默认取轴线的颜色
				// padding: [7, 0, 0, 40]
				showMaxLabel: true
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			offset: 1, // 相对Y位移
			minInterval: 1,
			axisLine: { // ---坐标轴 轴线
				show: false, // ---是否显示
				// ------------------- 线 -------------------------
				lineStyle: {
					color: '#dcdfe6',
					width: 1,
					type: 'solid'
				}
			},
			splitLine: {
				show: false, // ---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
				lineStyle: {
					color: '#eee',
					width: 1,
					type: 'solid' // ---类型
				}
			},
			axisLabel: { // ---坐标轴 标签
				show: true, // ---是否显示
				inside: false, // ---是否朝内
				rotate: 0, // ---旋转角度
				margin: 8, // ---刻度标签与轴线之间的距离
				color: '#ddd8d7' // ---默认取轴线的颜色
			},
			axisTick: {
				show: false
			}
		},
		legend: {
		  // data: ['处理中', '已完成'],
		  show: false,
		  itemWidth: 30,
		  itemHeight: 7,
		  itemGap: 20,
		  padding: [0, 0, 0, 0],
		  textStyle: {
			color: '#fff',
			width: 140,
			fontSize: 12
		  },
			// inactiveColor: '#fff',
		  // top: -10,
		  // right: 0,
		  // itemWidth: 10,
		  // data: [{
		  //   name: '处理中',
		  //   icon: 'circle'
		  // }, {
		  //   name: '已完成',
		  //   icon: 'circle'
		  // }]
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					width: 0
				}
			},
			padding: [10, 10]
		},
		grid: {
			left: 30,
			right: 20,
			top: 30,
			bottom: 40
		},
		series: [
			{
				symbol: 'none', // 折线图上的圆点
				// name: '45454',
				smooth: true,
				itemStyle: {
					color: color == 'green' ? '#21e888' : '#f28c5f'
				},
				lineStyle: {
					color:  color == 'green' ? '#21e888' : '#f28c5f',
					width: 1
				},
				areaStyle: { // 颜色自上而下渐变
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 1代表上面
						offset: 0,
						color:  color == 'green' ? '#21e888' : '#f28c5f'
					}, {
						offset: 1,
						color: '#101930'
					}]),
					opacity: 0.2 // 填充区域透明度
				},
				data: Y,
				type: 'line'
			}]
	};
	myChart.setOption(option2);
  }
   //  折线图设置 多条线
   setMultipleLine(el = '', list = []){
    let myChart = echarts.init(document.getElementById(el));
	let seriesObj = []
	let colorList = ['#4dffa6','#ffd714', '#01bcf1']
	list.forEach((e, index) => {
		let obj = {
			name: e.name,
			smooth: true,
			itemStyle: {
				color: colorList[index]
			},
			lineStyle: {
				color: colorList[index],
				width: 1
			},
			areaStyle: { // 颜色自上而下渐变
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 1代表上面
					offset: 0,
					color: colorList[index]
				}, {
					offset: 1,
					color: '#101930'
				}]),
				opacity: 0.1 // 填充区域透明度
			},
			data: e.value,
			type: 'line',
			// markLine : {
			// 	symbol:"none",
			// 	silent:true,             //鼠标悬停事件  true没有，false有
			// 	data : [{
			// 		lineStyle:{           //警戒线的样式  ，虚实  颜色
			// 			type:"dashed",
			// 			color:"#ed812b",
			// 		},
			// 		label:{
			// 			position:'end', //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
			// 			formatter:"70%"
			// 		},
			// 		yAxis:15         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
			// 	}, {
			// 		lineStyle:{           //警戒线的样式  ，虚实  颜色
			// 			type:"dashed",
			// 			color:"#ff493a",
			// 		},
			// 		label:{
			// 			position:'end', //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
			// 			formatter:"50%"
			// 		},
			// 		yAxis: 30         // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
			// 	}]
			// }
		}
		seriesObj.push(obj)
	})
	let X = list[0].time
	let legendList = list.map(item => item.name)
	let option2 = {
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: X,
			axisLine: { // ---坐标轴 轴线
				show: false, // ---是否显示
				// ------------------- 线 -------------------------
				lineStyle: {
					color: '#dcdfe6',
					width: 1,
					type: 'solid'
				}
			},
			splitLine: {
				show: false, // ---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
				lineStyle: {
					color: '#1f3b52',
					width: 1,
					type: 'solid' // ---类型
				}
			},
			axisLabel: { // ---坐标轴 标签
				show: true, // ---是否显示
				inside: false, // ---是否朝内
				rotate: 0, // ---旋转角度
				margin: 8, // ---刻度标签与轴线之间的距离
				color: '#ddd8d7', // ---默认取轴线的颜色
				padding: [7, 0, 0, -15]
			},
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'value',
			offset: 1, // 相对Y位移
			minInterval: 1,
			axisLine: { // ---坐标轴 轴线
				show: false, // ---是否显示
				// ------------------- 线 -------------------------
				lineStyle: {
					color: '#dcdfe6',
					width: 1,
					type: 'solid'
				}
			},
			splitLine: {
				show: false, // ---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
				lineStyle: {
					color: '#eee',
					width: 1,
					type: 'solid' // ---类型
				}
			},
			axisLabel: { // ---坐标轴 标签
				show: true, // ---是否显示
				inside: false, // ---是否朝内
				rotate: 0, // ---旋转角度
				margin: 8, // ---刻度标签与轴线之间的距离
				color: '#ddd8d7' // ---默认取轴线的颜色
			},
			axisTick: {
				show: false
			}
		},
		legend: {
		  data: legendList,
		  show: true,
		  itemWidth: 30,
		  itemHeight: 7,
		  itemGap: 20,
		  right: 0,
		  padding: [20, 0, 0, 0],
		  textStyle: {
			color: '#ddd8d7',
			width: 140,
			fontSize: 12
		  },
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					width: 0
				}
			},
			padding: [10, 10]
		},
		grid: {
			left: 40,
			right: 20,
			top: 50,
			bottom: 40
		},
		series: seriesObj,
	};
	myChart.setOption(option2);
   }
}
