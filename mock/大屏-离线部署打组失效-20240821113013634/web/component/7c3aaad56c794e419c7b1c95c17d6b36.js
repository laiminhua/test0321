(()=>{(function(v){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||window.conch.register("C7c3aaad56c794e419c7b1c95c17d6b36",function(){function R(n,t){const e=function(y){const c=y.label,d=y.axisLine,f=y.tickLine,m=y.splitLine;let p=2;c.customTickCount&&c.customTickCount.show&&(p=c.customTickCount.tickCount);const b={show:c.show,...c.textarea,backgroundColor:c.titleBgColor.value,padding:[c.padding.paddingY,c.padding.paddingX]},h={show:d.show,lineStyle:{color:d.lineStyle.color,width:d.lineStyle.width,type:d.lineStyle.style}},F={show:f.show,lineStyle:{color:f.lineStyle.color,width:f.lineStyle.width,type:f.lineStyle.style},length:f.length},w={show:m.show,lineStyle:{color:m.lineStyle.color,width:m.lineStyle.width,type:m.lineStyle.style}};return{axisLabel:b,axisLine:h,axisTick:F,splitLine:w,splitNumber:p}},s=t.xData,a=n.xaxis,r=n.yaxis,l=e(a),i=e(r),o={type:"category",...l,data:s},u={type:"value",...i};return{xAxis:o,yAxis:u}}function L(n,t){let e=null;return n&&(e=R(n,t)),e}function A(n){const t=n.textStyle,e=[n.padding.paddingY,n.padding.paddingX],s=n.backgroundColor,a=n.borderColor;return{textStyle:t,padding:e,backgroundColor:s,borderColor:a}}function B(n){let t=null;return n&&(t=A(n)),t}function O(n){if(n.show){const t=n.font,e=n.site.split("-"),s=e[0],a=e[1],r=e[2],l=n.marker.shape,i=n.marker.size,o=n.markerSpace.spacing;return{textStyle:t,orient:s,left:a,top:r,icon:l,itemHeight:i,itemGap:o}}return null}function D(n){let t=null;return n&&(t=O(n)),t}function E(n){let t=null;if(n.show){let e="top";n.site&&(e=n.site),t={position:e,show:!0,...n.font}}return t}function G(n){let t=null;return n&&(t=E(n)),t}function M(n,t,e="tree"){if(!n.enabled)return!1;switch(e){case"code":return I(n.filterCode,t);case"tree":return j(n,t);default:return!1}}function I(n,t){return new Function("data",n)(t)}function W(n){switch(n){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}function x(n,t){return W(n.operator).call(n.expressions,t)}function z(n,t,e,s){let a=n[t];if(a==null)return!1;switch(e==="eq"||e==="in"||e==="nin"?(a=a.toString(),s=s.toString()):(a=a*1,s=s*1),e){case"eq":return a===s;case"gt":return a>s;case"lt":return a<s;case"gte":return a>=s;case"lte":return a<=s;case"ne":return a!==s;case"in":return a.toString().includes(s.toString());case"nin":return!a.toString().includes(s.toString())}}function j(n,t){return x(n,e=>x(e,s=>z(t,...s)))}function C({type:n,value:t}){switch(n){case"linearGradient":const{angle:e,stops:s}=t;return{type:"linear",...g(e),colorStops:s.map(a=>({...a,offset:a.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:t.stops.map(a=>({...a,offset:a.offset/100})),global:!1}}}function g(n){const t={x:0,y:0,x2:0,y2:0},e=(a,r,l,i)=>{Object.assign(t,{x:a,y:r,x2:Math.floor(Math.abs(l)*100)/100,y2:Math.floor(Math.abs(i)*100)/100})};n%=360;const s={0:[0,1,0,0],45:[0,1,0,1],90:[0,0,1,0],135:[0,0,1,1],180:[0,0,0,1],225:[1,0,0,1],270:[1,0,0,0],315:[1,1,0,0]};if(s[n])e(...s[n]);else{const a=n%90*(2*Math.PI/360),r=Math.tan(a),l=1/Math.tan(a);let i,o;n>0&&n<90?(n<45?(o=1,i=r):(i=1,o=l),e(0,1,i,o-1)):n>90&&n<180?(n<135?(i=1,o=-r):(o=-1,i=-l*o),e(0,0,i,o)):n>180&&n<270?(n<225?(o=-1,i=r*o):(i=-1,o=l*i),e(1,0,i+1,o)):n>270&&n<=359&&(n<315?(i=-1,o=-r*i):(o=1,i=-l*o),e(1,1,i+1,o-1))}return t}function q({type:n,value:t}){switch(n){case"flat":return t;case"linearGradient":const{angle:e,stops:s}=t;return{type:"linear",...g(e),colorStops:s.map(r=>({...r,offset:r.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:t.stops.map(r=>({...r,offset:r.offset/100})),global:!1};case"image":const a=new Image;return t.url&&(a.src=t.url),{image:a,repeat:"repeat"}}}const S=function(){return class extends window.conch.Echarts{constructor(t,e){super(t,e),this.padding=[0,0,0,0],this.theme={seriesColor:[{type:"image",value:{url:"/s-static/snapshot/snap-158f9a7f101f497387ed1ca52bb14b33.png",fillType:"auto"}}],backgroundColor:{show:!1,type:"image",fillType:"auto",url:"/s-static/img/psa40898cc-e317-4ab7-bf3f-d7877ee9c73f.png"},color:{show:!0,value:"#FFFFFF"},minorColor:{show:!0,value:"#FFFFFF"},gridColor:{show:!0,value:"#FFFFFF"},name:"\u4E3B\u98981"},this.config={menu:{chart:{barCfg:{barWidth:20,barGap:30,barRadius:{radiusType:"all",allRadius:0,ltRadius:0,rtRadius:0,rbRadius:0,lbRadius:0},barBgColor:{type:"flat",value:"#ffffff00"},barStroke:{color:"#2782E7",width:1,style:"solid"},barShadow:{color:"#0b71e600",x:0,y:0,blur:0}},dataTips:{show:!0,font:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},site:"top"}},title:{title:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:16},site:"left"},subTitle:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u526F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"left"}},legend:{legend:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"horizontal-center-top",marker:{shape:"roundRect",size:14},markerSpace:{spacing:10}}},axis:{xaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}},yaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!0,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}}},tooltip:{textStyle:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},padding:{paddingX:10,paddingY:10},borderColor:"rgba(0, 0, 0, 0.65)",backgroundColor:"rgba(0, 0, 0, 0.65)"},expression:{list:[{color:{type:"flat",value:"#2362E4"},condition:{enabled:!1,operator:"OR",expressions:[{operator:"AND",expressions:[["colorField","eq","100"]]}]}}]},advance:{code:""}}},this.data=[{x:"1\u6708",y:48,s:"\u7CFB\u5217\u4E00",colorField:100},{x:"2\u6708",y:40,s:"\u7CFB\u5217\u4E00"},{x:"3\u6708",y:24,s:"\u7CFB\u5217\u4E00"},{x:"4\u6708",y:48,s:"\u7CFB\u5217\u4E00"},{x:"5\u6708",y:49,s:"\u7CFB\u5217\u4E00",colorField:200},{x:"6\u6708",y:58,s:"\u7CFB\u5217\u4E00",colorField:200}],this.type="echarts"}processData(){const{data:t}=this,e=Array.from(new Set(t.map(r=>r.s))),s=Array.from(new Set(t.map(r=>r.x))),a=[];return e.forEach(r=>{const i=t.filter(o=>o.s===r).map(o=>{const u=this.processExpression(o);return u?{value:o.y,itemStyle:u,rawData:o}:{value:o.y,rawData:o}});a.push({name:r,data:i})}),{seriesArr:e,xData:s,yDataArr:a}}setData(t){this.data=t,this.trigger("dataChange",t),this.render()}processExpression(t){const{config:e}=this,s=e?.menu?.expression?.list;let a=null;if(s)for(let r=0;r<s.length;r++){const l=s[r],i=M(l.condition,t),o={flat:l.color.value,linearGradient:C(l.color)};i&&(a={color:o[l.color.type]})}return a}processSeries(t){const{config:e}=this,s=e.menu&&e.menu.chart&&e.menu.chart.barCfg,a=s&&s.barWidth,r=s&&s.barGap,l=s.barRadius;let i=null;l.radiusType==="all"&&(i=l.allRadius),l.radiusType==="alone"&&(i=[l.ltRadius,l.rtRadius,l.rbRadius,l.lbRadius]);let o=null,u=!1;s.barBgColor.type==="flat"?(o=s.barBgColor.value,o.length===9&&o.substr(7)!=="00"&&(u=!0),o.length<=7&&(u=!0)):(o=C(s.barBgColor),u=!0);let y={},c=s.barStroke;const d=c.color,f=c.width,m=c.style;(d.length===9&&d.substr(7)!=="00"||d.length<=7)&&(y={borderColor:d,borderWidth:f,borderType:m});let p=s.barShadow,b={};const h=p.color,F=p.blur,w=p.x,P=p.y;(h.length===9&&h.substr(7)!=="00"||h.length<=7)&&(b={shadowColor:h,shadowBlur:F,shadowOffsetX:w,shadowOffsetY:P});const Y=G(e?.menu?.chart?.dataTips),k=[];return t.yDataArr.forEach(T=>{const X={name:T.name,data:T.data,type:"bar",barCategoryGap:100-a+"%"||"20%",barGap:r+"%"||"20%",showBackground:u,backgroundStyle:{color:o},itemStyle:{borderRadius:i,...y,...b},label:Y};k.push(X)}),k}transformOptions(){const{config:t}=this,e=this.processData(),{xAxis:s,yAxis:a}=L(t?.menu?.axis,e),r=D(t?.menu?.legend?.legend),l=B(t?.menu?.tooltip);let i=10;r&&r.top==="top"&&(i=30);let o=10;r&&r.top==="bottom"&&(o=20);const u=this.processSeries(e),y=function(f){const m=f.images,p=[];return m.forEach(b=>{const h=new Image;b.url&&(h.src=b.url),p.push({image:h,repeat:"repeat"})}),p};let c={color:this.theme.seriesColor.map(f=>q(f)),grid:{containLabel:!0,left:"10",top:i,right:"10",bottom:o},tooltip:{show:!0,...l},legend:r,xAxis:s,yAxis:a,series:u};const d=t?.menu?.advance?.code;if(d)try{d.title=null,c=_.merge(_.cloneDeep(c),d)}catch{}return c}mounted(){this.instance.on("click","series",e=>{this.trigger("click",e?.data?.rawData)})}}}();return S.prototype._registerImg=function(n){},S}(),{key:"C0e273d3975246",width:400,height:250,options:`{
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
                  "default": 20
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
                  "type": "suite",
                  "children": {
                    "radiusType": {
                      "name": "",
                      "type": "radio",
                      "options": [
                        {
                          "label": "\u5168\u5706\u89D2",
                          "value": "all"
                        },
                        {
                          "label": "\u72EC\u7ACB\u5706\u89D2",
                          "value": "alone"
                        }
                      ],
                      "default": "all"
                    },
                    "allRadius": {
                      "type": "number",
                      "name": "",
                      "step": 1,
                      "min": 0,
                      "default": 0,
                      "col": 12,
                      "showInPanel": {
                        "conditions": [
                          [
                            ".radiusType",
                            "$eq",
                            "all"
                          ]
                        ]
                      }
                    },
                    "ltRadius": {
                      "type": "number",
                      "name": "\u5DE6\u4E0A",
                      "step": 1,
                      "min": 0,
                      "default": 0,
                      "col": 6,
                      "showInPanel": {
                        "conditions": [
                          [
                            ".radiusType",
                            "$eq",
                            "alone"
                          ]
                        ]
                      }
                    },
                    "rtRadius": {
                      "type": "number",
                      "name": "\u53F3\u4E0A",
                      "step": 1,
                      "min": 0,
                      "default": 0,
                      "col": 6,
                      "showInPanel": {
                        "conditions": [
                          [
                            ".radiusType",
                            "$eq",
                            "alone"
                          ]
                        ]
                      }
                    },
                    "rbRadius": {
                      "type": "number",
                      "name": "\u53F3\u4E0B",
                      "step": 1,
                      "min": 0,
                      "default": 0,
                      "col": 6,
                      "showInPanel": {
                        "conditions": [
                          [
                            ".radiusType",
                            "$eq",
                            "alone"
                          ]
                        ]
                      }
                    },
                    "lbRadius": {
                      "type": "number",
                      "name": "\u5DE6\u4E0B",
                      "step": 1,
                      "min": 0,
                      "default": 0,
                      "col": 6,
                      "showInPanel": {
                        "conditions": [
                          [
                            ".radiusType",
                            "$eq",
                            "alone"
                          ]
                        ]
                      }
                    }
                  }
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
                    "value": "#ffffff00"
                  }
                },
                "barStroke": {
                  "type": "stroke",
                  "name": "\u63CF\u8FB9",
                  "default": {
                    "color": "#2782E7",
                    "width": 1,
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
                },
                "site": {
                  "type": "select",
                  "name": "\u5BF9\u9F50",
                  "options": [
                    {
                      "label": "top",
                      "value": "top"
                    },
                    {
                      "label": "left",
                      "value": "left"
                    },
                    {
                      "label": "right",
                      "value": "right"
                    },
                    {
                      "label": "bottom",
                      "value": "bottom"
                    },
                    {
                      "label": "inside",
                      "value": "inside"
                    },
                    {
                      "label": "insideLeft",
                      "value": "insideLeft"
                    },
                    {
                      "label": "insideRight",
                      "value": "insideRight"
                    },
                    {
                      "label": "insideTop",
                      "value": "insideTop"
                    },
                    {
                      "label": "insideBottom",
                      "value": "insideBottom"
                    },
                    {
                      "label": "insideTopLeft",
                      "value": "insideTopLeft"
                    },
                    {
                      "label": "insideBottomLeft",
                      "value": "insideBottomLeft"
                    },
                    {
                      "label": "insideTopRight",
                      "value": "insideTopRight"
                    },
                    {
                      "label": "insideBottomRight",
                      "value": "insideBottomRight"
                    }
                  ],
                  "default": "top"
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
          "type": "axis"
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
}`,script:{lodashminjs:"/lib/lodash.min.js",echarts:"/lib/echarts.js"},utils:["getAxisConfig","getTooltipConfig","getLegendConfig","getLabelConfig","runExpression","transfromColorOfEcharts","transfromColorsOfEcharts"]},v,"echarts","2.0.0")})(window.Vue);})();
