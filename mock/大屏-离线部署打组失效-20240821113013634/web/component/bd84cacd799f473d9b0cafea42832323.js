(()=>{(function(v){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||(window.conch.createCss(".C180613aee3ae2 *{outline:none;box-sizing:border-box}.C180613aee3ae2 p,.C180613aee3ae2 dl,.C180613aee3ae2 ol,.C180613aee3ae2 ul{margin:0;padding:0}.C180613aee3ae2 li{list-style:none}.C180613aee3ae2 .carousel-list .list-item{display:flex;justify-content:space-between}.C180613aee3ae2 .carousel-list span{line-height:1}.C180613aee3ae2 .carousel-list .serial{line-height:1;text-align:center}.C180613aee3ae2 .carousel-list .progress-item{position:relative;width:100%;background-color:#fff}.C180613aee3ae2 .carousel-list .progress-item .item-name{position:absolute;left:0;top:50%;transform:translateY(-50%)}.C180613aee3ae2 .carousel-list .progress-item .item-bar{height:100%}.C180613aee3ae2 .carousel-list .progress-item .item-persent{position:absolute;right:0;top:50%;transform:translateY(-50%)}","Ca3167bfd2c008"),window.conch.register("Cbd84cacd799f473d9b0cafea42832323",function(){function D(n,e,t="tree"){if(!n.enabled)return!1;switch(t){case"code":return E(n.filterCode,e);case"tree":return B(n,e);default:return!1}}function E(n,e){return new Function("data",n)(e)}function O(n){switch(n){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}function C(n,e){return O(n.operator).call(n.expressions,e)}function T(n,e,t,a){let r=n[e];if(r==null)return!1;switch(t==="eq"||t==="in"||t==="nin"?(r=r.toString(),a=a.toString()):(r=r*1,a=a*1),t){case"eq":return r===a;case"gt":return r>a;case"lt":return r<a;case"gte":return r>=a;case"lte":return r<=a;case"ne":return r!==a;case"in":return r.toString().includes(a.toString());case"nin":return!r.toString().includes(a.toString())}}function B(n,e){return C(n,t=>C(t,a=>T(e,...a)))}function M(n){const e=n.textStyle,t=[n.padding.paddingY,n.padding.paddingX],a=n.backgroundColor,r=n.borderColor;return{textStyle:e,padding:t,backgroundColor:a,borderColor:r}}function W(n){let e=null;return n&&(e=M(n)),e}function G(n){if(n.show){const e=n.font,t=n.site.split("-"),a=t[0],r=t[1],i=t[2],l=n.marker.shape,o=n.marker.size,s=n.markerSpace.spacing;return{textStyle:e,orient:a,left:r,top:i,icon:l,itemHeight:o,itemGap:s}}return null}function z(n){let e=null;return n&&(e=G(n)),e}function Y(n){let e=null;if(n.show){let t="top";n.site&&(t=n.site),e={position:t,show:!0,...n.font}}return e}function R(n){let e=null;return n&&(e=Y(n)),e}function j(n,e){const t=function(f){const c=f.label,u=f.axisLine,h=f.tickLine,p=f.splitLine;let y=2;c.customTickCount&&c.customTickCount.show&&(y=c.customTickCount.tickCount);const F={show:c.show,...c.textarea,backgroundColor:c.titleBgColor.value,padding:[c.padding.paddingY,c.padding.paddingX]},m={show:u.show,lineStyle:{color:u.lineStyle.color,width:u.lineStyle.width,type:u.lineStyle.style}},b={show:h.show,lineStyle:{color:h.lineStyle.color,width:h.lineStyle.width,type:h.lineStyle.style},length:h.length},w={show:p.show,lineStyle:{color:p.lineStyle.color,width:p.lineStyle.width,type:p.lineStyle.style}};return{axisLabel:F,axisLine:m,axisTick:b,splitLine:w,splitNumber:y}},a=e.xData,r=n.xaxis,i=n.yaxis,l=t(r),o=t(i),s={type:"category",...l,data:a},d={type:"value",...o};return{xAxis:s,yAxis:d}}function I(n,e){let t=null;return n&&(t=j(n,e)),t}function S({type:n,value:e}){switch(n){case"linearGradient":const{angle:t,stops:a}=e;return{type:"linear",...g(t),colorStops:a.map(r=>({...r,offset:r.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:e.stops.map(r=>({...r,offset:r.offset/100})),global:!1}}}function g(n){const e={x:0,y:0,x2:0,y2:0},t=(r,i,l,o)=>{Object.assign(e,{x:r,y:i,x2:Math.floor(Math.abs(l)*100)/100,y2:Math.floor(Math.abs(o)*100)/100})};n%=360;const a={0:[0,1,0,0],45:[0,1,0,1],90:[0,0,1,0],135:[0,0,1,1],180:[0,0,0,1],225:[1,0,0,1],270:[1,0,0,0],315:[1,1,0,0]};if(a[n])t(...a[n]);else{const r=n%90*(2*Math.PI/360),i=Math.tan(r),l=1/Math.tan(r);let o,s;n>0&&n<90?(n<45?(s=1,o=i):(o=1,s=l),t(0,1,o,s-1)):n>90&&n<180?(n<135?(o=1,s=-i):(s=-1,o=-l*s),t(0,0,o,s)):n>180&&n<270?(n<225?(s=-1,o=i*s):(o=-1,s=l*o),t(1,0,o+1,s)):n>270&&n<=359&&(n<315?(o=-1,s=-i*o):(s=1,o=-l*s),t(1,1,o+1,s-1))}return e}function X({type:n,value:e}){switch(n){case"flat":return e;case"linearGradient":const{angle:t,stops:a}=e;return{type:"linear",...g(t),colorStops:a.map(i=>({...i,offset:i.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:e.stops.map(i=>({...i,offset:i.offset/100})),global:!1};case"image":const r=new Image;return e.url&&(r.src=e.url),{image:r,repeat:"repeat"}}}const k=function(){return class extends window.conch.Echarts{constructor(e,t){super(e,t),this.padding=[0,0,0,0],this.theme={seriesColor:[{type:"flat",value:"#2362E4"},{type:"flat",value:"#2782E7"},{type:"flat",value:"#2AA1EB"},{type:"flat",value:"#2DC0EE"},{type:"flat",value:"#31E0F2"},{type:"flat",value:"#34FFF5"}],backgroundColor:{show:!1,type:"image",fillType:"auto",url:"/s-static/img/psa40898cc-e317-4ab7-bf3f-d7877ee9c73f.png"},color:{show:!0,value:"#FFFFFF"},minorColor:{show:!0,value:"#FFFFFF"},gridColor:{show:!0,value:"#FFFFFF"},name:"\u4E3B\u98981"},this.config={menu:{chart:{barCfg:{barWidth:12,barGap:30,barRadius:0,barBgColor:{type:"flat",value:"#FFFFFF0F"},barStroke:{color:"#0b71e600",width:0,style:"solid"},barShadow:{color:"#0b71e600",x:0,y:0,blur:0}},dataTips:{show:!0,font:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12}}},title:{title:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:16},site:"left"},subTitle:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u526F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"left"}},legend:{legend:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"horizontal-center-top",marker:{shape:"roundRect",size:14},markerSpace:{spacing:10}}},axis:{xaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFF00"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}},yaxis:{label:{show:!1,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}}},tooltip:{textStyle:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},padding:{paddingX:10,paddingY:10},borderColor:"rgba(0, 0, 0, 0.65)",backgroundColor:"rgba(0, 0, 0, 0.65)"},expression:{list:[{color:{type:"flat",value:"#2362E4"},condition:{enabled:!1,operator:"OR",expressions:[{operator:"AND",expressions:[["colorField","eq","100"]]}]}}]},advance:{code:""}}},this.data=[{x:"1\u6708",y:48,s:"\u7CFB\u5217\u4E00",colorField:100},{x:"2\u6708",y:40,s:"\u7CFB\u5217\u4E00"},{x:"3\u6708",y:24,s:"\u7CFB\u5217\u4E00"},{x:"4\u6708",y:48,s:"\u7CFB\u5217\u4E00"},{x:"5\u6708",y:49,s:"\u7CFB\u5217\u4E00",colorField:200},{x:"6\u6708",y:58,s:"\u7CFB\u5217\u4E00",colorField:200}],this.type="echarts"}processData(){const{data:e}=this,t=Array.from(new Set(e.map(i=>i.s))),a=Array.from(new Set(e.map(i=>i.x))),r=[];return t.forEach(i=>{const o=e.filter(s=>s.s===i).map(s=>{const d=this.processExpression(s);return d?{value:s.y,itemStyle:d,rawData:s}:{value:s.y,rawData:s}});r.push({name:i,data:o})}),{seriesArr:t,xData:a,yDataArr:r}}setData(e){this.data=e,this.trigger("dataChange",e),this.render()}processExpression(e){const{config:t}=this,a=t.menu&&t.menu.expression&&t.menu.expression.list;let r=null;if(a)for(let i=0;i<a.length;i++){const l=a[i],o=D(l.condition,e),s={flat:l.color.value,linearGradient:S(l.color)};o&&(r={color:s[l.color.type]})}return r}processSeries(e){const{config:t}=this,a=t.menu&&t.menu.chart&&t.menu.chart.barCfg,r=a&&a.barWidth,i=a&&a.barGap;let l=a.barRadius,o=null,s=!1;a.barBgColor.type==="flat"?(o=a.barBgColor.value,o.length===9&&o.substr(7)!=="00"&&(s=!0),o.length<=7&&(s=!0)):(o=S(a.barBgColor),s=!0);let d={},f=a.barStroke;const c=f.color,u=f.width,h=f.style;(c.length===9&&c.substr(7)!=="00"||c.length<=7)&&(d={borderColor:c,borderWidth:u,borderType:h});let p=a.barShadow,y={};const F=p.color,m=p.blur,b=p.x,w=p.y;(F.length===9&&F.substr(7)!=="00"||F.length<=7)&&(y={shadowColor:F,shadowBlur:m,shadowOffsetX:b,shadowOffsetY:w});const x=R(t?.menu?.chart?.dataTips);x&&Object.assign(x,{position:"right",backgroundColor:o,borderColor:o,borderWidth:1,width:30,height:r,distance:15,align:"center",borderRadius:[0,l,l,0]});const A=[];return e.yDataArr.forEach(L=>{const q={name:L.name,data:L.data,type:"bar",barWidth:r,barGap:i+"%"||"20%",showBackground:s,backgroundStyle:{color:o,borderWidth:2,borderColor:o,borderRadius:[l,0,0,l]},itemStyle:{borderRadius:[l,0,0,l],...d,...y},label:x};A.push(q)}),A}transformOptions(){const{menu:e}=this.config,t=this.processData(),{xAxis:a,yAxis:r}=I(e?.axis,t);r.inverse=!0;const i=z(e?.legend?.legend),l=W(e?.tooltip);let o=10;i&&i.top==="top"&&(o=30);let s=10;i&&i.top==="bottom"&&(s=20);const d=this.processSeries(t);let f={color:this.theme.seriesColor.map(u=>X(u)),grid:{containLabel:!0,left:"-15",top:o,right:"40",bottom:s},tooltip:{show:!0,...l},legend:i,xAxis:r,yAxis:a,series:d};const c=e?.advance?.code;if(c)try{c.title=null,f=_.merge(_.cloneDeep(f),c)}catch{}return f}mounted(){this.instance.on("click","series",t=>{this.trigger("click",t?.data?.rawData)})}}}();return k.prototype._registerImg=function(n){},k}(),{key:"C180613aee3ae2",width:400,height:250,options:`{
  "actions": [
    {
      "label": "\u70B9\u51FB",
      "identified": "click"
    },
    {
      "label": "\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6",
      "identified": "dataChange"
    }
  ],
  "fields": [
    {
      "name": "x",
      "desc": "x\u8F74(\u7C7B\u76EE)\u6570\u636E"
    },
    {
      "name": "y",
      "desc": "y\u8F74(\u6570\u503C)\u6570\u636E"
    },
    {
      "name": "s",
      "desc": "\u7CFB\u5217\u540D\u79F0"
    },
    {
      "name": "colorFields",
      "desc": "\u989C\u8272\u5B57\u6BB5"
    }
  ],
  "propertyPanel": {
    "menu": {
      "type": "menu",
      "children": {
        "chart": {
          "name": "\u56FE\u8868",
          "mode": "single",
          "children": {
            "barCfg": {
              "name": "\u56FE\u8868\u8BBE\u7F6E",
              "type": "group",
              "fold": false,
              "children": {
                "barWidth": {
                  "name": "\u5BBD\u5EA6",
                  "type": "slider",
                  "showInput": true,
                  "min": 1,
                  "max": 100,
                  "step": 1,
                  "default": 12
                },
                "barGap": {
                  "name": "\u95F4\u8DDD",
                  "description": "\u4E0D\u540C\u7CFB\u5217\u7684\u67F1\u95F4\u8DDD\u79BB",
                  "type": "slider",
                  "showInput": true,
                  "min": 0,
                  "max": 100,
                  "step": 1,
                  "default": 30
                },
                "barRadius": {
                  "name": "\u5706\u89D2",
                  "type": "number",
                  "min": 0,
                  "max": 100,
                  "step": 1,
                  "default": 0
                },
                "barBgColor": {
                  "name": "\u80CC\u666F",
                  "description": "\u67F1\u5B50\u7C7B\u76EE\u80CC\u666F",
                  "type": "color",
                  "components": [
                    "flat",
                    "linearGradient"
                  ],
                  "default": {
                    "type": "flat",
                    "value": "#FFFFFF0F"
                  }
                },
                "barStroke": {
                  "type": "stroke",
                  "name": "\u63CF\u8FB9",
                  "default": {
                    "color": "#0b71e600",
                    "width": 0,
                    "style": "solid"
                  }
                },
                "barShadow": {
                  "type": "shadow",
                  "name": "\u9634\u5F71",
                  "default": {
                    "color": "#0b71e600",
                    "x": 0,
                    "y": 0,
                    "blur": 0
                  }
                }
              }
            },
            "dataTips": {
              "name": "\u663E\u793A\u6570\u636E",
              "type": "group",
              "enableHide": true,
              "fold": false,
              "children": {
                "show": {
                  "default": true
                },
                "font": {
                  "name": "\u6587\u672C\u6837\u5F0F",
                  "type": "font",
                  "default": {
                    "fontFamily": "simSun",
                    "fontWeight": 400,
                    "color": "#FFFFFFB3",
                    "fontSize": 12
                  }
                }
              }
            }
          }
        },
        "title": {
          "name": "\u6807\u9898",
          "type": "title"
        },
        "legend": {
          "name": "\u56FE\u4F8B",
          "type": "legend"
        },
        "axis": {
          "name": "\u5750\u6807\u8F74",
          "type": "axis",
          "default": {
            "xaxis": {
              "label": {
                "show": true,
                "textarea": {
                  "fontFamily": "Microsoft Yahei",
                  "fontWeight": "normal",
                  "fontSize": 12,
                  "color": "#FFFFFF00"
                },
                "titleBgColor": {
                  "type": "flat",
                  "value": "#ffffff00"
                },
                "padding": {
                  "paddingX": 0,
                  "paddingY": 0
                },
                "customTickCount": {
                  "show": false,
                  "tickCount": 5
                }
              },
              "axisLine": {
                "show": false,
                "lineStyle": {
                  "color": "#FFFFFF4D",
                  "width": 1,
                  "style": "solid"
                }
              },
              "tickLine": {
                "show": false,
                "lineStyle": {
                  "color": "#FFFFFF4D",
                  "width": 1,
                  "style": "solid"
                },
                "length": 5
              },
              "splitLine": {
                "show": false,
                "lineStyle": {
                  "color": "#FFFFFF1A",
                  "width": 1,
                  "style": "solid"
                }
              }
            },
            "yaxis": {
              "label": {
                "show": false,
                "textarea": {
                  "fontFamily": "Microsoft Yahei",
                  "fontWeight": "normal",
                  "fontSize": 12,
                  "color": "#FFFFFFB3"
                },
                "titleBgColor": {
                  "type": "flat",
                  "value": "#ffffff00"
                },
                "padding": {
                  "paddingX": 0,
                  "paddingY": 0
                },
                "customTickCount": {
                  "show": false,
                  "tickCount": 5
                }
              },
              "axisLine": {
                "show": false,
                "lineStyle": {
                  "color": "#FFFFFF4D",
                  "width": 1,
                  "style": "solid"
                }
              },
              "tickLine": {
                "show": false,
                "lineStyle": {
                  "color": "#FFFFFF4D",
                  "width": 1,
                  "style": "solid"
                },
                "length": 5
              },
              "splitLine": {
                "show": false,
                "lineStyle": {
                  "color": "#FFFFFF1A",
                  "width": 1,
                  "style": "solid"
                }
              }
            }
          }
        },
        "tooltip": {
          "name": "\u63D0\u793A\u6846",
          "type": "tooltip"
        },
        "expression": {
          "name": "\u6761\u4EF6",
          "mode": "single",
          "children": {
            "list": {
              "name": "\u6761\u4EF6\u5217\u8868",
              "type": "tabs",
              "fold": false,
              "template": {
                "name": "\u6761\u4EF6<%= i + 1 %>",
                "type": "object",
                "children": {
                  "condition": {
                    "name": "\u542F\u7528",
                    "type": "logicalTree",
                    "default": {
                      "enabled": true,
                      "operator": "OR",
                      "expressions": [
                        {
                          "operator": "AND",
                          "expressions": [
                            [
                              "colorField",
                              "eq",
                              "100"
                            ]
                          ]
                        }
                      ]
                    }
                  },
                  "color": {
                    "name": "\u67F1\u5B50\u989C\u8272",
                    "type": "color",
                    "components": [
                      "flat",
                      "linearGradient"
                    ],
                    "default": {
                      "type": "flat",
                      "value": "#2362E4"
                    }
                  }
                }
              },
              "default": [
                {
                  "color": {
                    "type": "flat",
                    "value": "#2362E4"
                  },
                  "condition": {
                    "enabled": false,
                    "operator": "OR",
                    "expressions": [
                      {
                        "operator": "AND",
                        "expressions": [
                          [
                            "colorField",
                            "eq",
                            "100"
                          ]
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        "advance": {
          "name": "\u81EA\u5B9A\u4E49",
          "mode": "single",
          "children": {
            "code": {
              "name": "\u81EA\u5B9A\u4E49",
              "description": "\u76F4\u63A5\u5199echarts option,\u4E66\u5199\u89C4\u8303\uFF1A{\\"key\\": value}(echarts title\u4E0D\u751F\u6548),\u81EA\u5B9A\u4E49option\u4F18\u5148\u7EA7\u5927\u4E8E\u5C5E\u6027\u9762\u677F\u914D\u7F6E",
              "type": "code",
              "language": "json",
              "default": ""
            }
          }
        }
      }
    }
  }
}`,script:{lodashminjs:"/lib/lodash.min.js",echarts:"/lib/echarts.js"},utils:["runExpression","getTooltipConfig","getLegendConfig","getLabelConfig","getAxisConfig","transfromColorOfEcharts","transfromColorsOfEcharts"]},v,"echarts","2.0.0"))})(window.Vue);})();
