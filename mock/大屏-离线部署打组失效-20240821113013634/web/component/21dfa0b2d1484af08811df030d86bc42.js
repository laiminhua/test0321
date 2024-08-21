(()=>{(function(E){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||window.conch.register("C21dfa0b2d1484af08811df030d86bc42",function(){function T(n,r,e="tree"){if(!n.enabled)return!1;switch(e){case"code":return A(n.filterCode,r);case"tree":return L(n,r);default:return!1}}function A(n,r){return new Function("data",n)(r)}function D(n){switch(n){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}function S(n,r){return D(n.operator).call(n.expressions,r)}function R(n,r,e,s){let o=n[r];if(o==null)return!1;switch(e==="eq"||e==="in"||e==="nin"?(o=o.toString(),s=s.toString()):(o=o*1,s=s*1),e){case"eq":return o===s;case"gt":return o>s;case"lt":return o<s;case"gte":return o>=s;case"lte":return o<=s;case"ne":return o!==s;case"in":return o.toString().includes(s.toString());case"nin":return!o.toString().includes(s.toString())}}function L(n,r){return S(n,e=>S(e,s=>R(r,...s)))}function B(n){const r=n.textStyle,e=[n.padding.paddingY,n.padding.paddingX],s=n.backgroundColor,o=n.borderColor;return{textStyle:r,padding:e,backgroundColor:s,borderColor:o}}function O(n){let r=null;return n&&(r=B(n)),r}function G(n){if(n.show){const r=n.font,e=n.site.split("-"),s=e[0],o=e[1],i=e[2],l=n.marker.shape,a=n.marker.size,t=n.markerSpace.spacing;return{textStyle:r,orient:s,left:o,top:i,icon:l,itemHeight:a,itemGap:t}}return null}function M(n){let r=null;return n&&(r=G(n)),r}function z(n){let r=null;if(n.show){let e="top";n.site&&(e=n.site),r={position:e,show:!0,...n.font}}return r}function I(n){let r=null;return n&&(r=z(n)),r}function W(n,r){const e=function(p){const c=p.label,f=p.axisLine,u=p.tickLine,y=p.splitLine;let h=2;c.customTickCount&&c.customTickCount.show&&(h=c.customTickCount.tickCount);const b={show:c.show,...c.textarea,backgroundColor:c.titleBgColor.value,padding:[c.padding.paddingY,c.padding.paddingX]},m={show:f.show,lineStyle:{color:f.lineStyle.color,width:f.lineStyle.width,type:f.lineStyle.style}},w={show:u.show,lineStyle:{color:u.lineStyle.color,width:u.lineStyle.width,type:u.lineStyle.style},length:u.length},x={show:y.show,lineStyle:{color:y.lineStyle.color,width:y.lineStyle.width,type:y.lineStyle.style}};return{axisLabel:b,axisLine:m,axisTick:w,splitLine:x,splitNumber:h}},s=r.xData,o=n.xaxis,i=n.yaxis,l=e(o),a=e(i),t={type:"category",...l,data:s},d={type:"value",...a};return{xAxis:t,yAxis:d}}function q(n,r){let e=null;return n&&(e=W(n,r)),e}function v({type:n,value:r}){switch(n){case"linearGradient":const{angle:e,stops:s}=r;return{type:"linear",...F(e),colorStops:s.map(o=>({...o,offset:o.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:r.stops.map(o=>({...o,offset:o.offset/100})),global:!1}}}function F(n){const r={x:0,y:0,x2:0,y2:0},e=(o,i,l,a)=>{Object.assign(r,{x:o,y:i,x2:Math.floor(Math.abs(l)*100)/100,y2:Math.floor(Math.abs(a)*100)/100})};n%=360;const s={0:[0,1,0,0],45:[0,1,0,1],90:[0,0,1,0],135:[0,0,1,1],180:[0,0,0,1],225:[1,0,0,1],270:[1,0,0,0],315:[1,1,0,0]};if(s[n])e(...s[n]);else{const o=n%90*(2*Math.PI/360),i=Math.tan(o),l=1/Math.tan(o);let a,t;n>0&&n<90?(n<45?(t=1,a=i):(a=1,t=l),e(0,1,a,t-1)):n>90&&n<180?(n<135?(a=1,t=-i):(t=-1,a=-l*t),e(0,0,a,t)):n>180&&n<270?(n<225?(t=-1,a=i*t):(a=-1,t=l*a),e(1,0,a+1,t)):n>270&&n<=359&&(n<315?(a=-1,t=-i*a):(t=1,a=-l*t),e(1,1,a+1,t-1))}return r}function P({type:n,value:r}){switch(n){case"flat":return r;case"linearGradient":const{angle:e,stops:s}=r;return{type:"linear",...F(e),colorStops:s.map(i=>({...i,offset:i.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:r.stops.map(i=>({...i,offset:i.offset/100})),global:!1};case"image":const o=new Image;return r.url&&(o.src=r.url),{image:o,repeat:"repeat"}}}const k=function(){return class extends window.conch.Echarts{constructor(r,e){super(r,e),this.padding=[0,0,0,0],this.theme={name:"\u4E3B\u98981",seriesColor:[{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2362E44D"},{offset:100,color:"#2362E4"},{offset:100,color:"#2362E400"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2782E74D"},{offset:100,color:"#2782E7"},{offset:100,color:"#2782E700"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2AA1EB4D"},{offset:99,color:"#2AA1EB"},{offset:99,color:"#2AA1EB00"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#2DC0EE4D"},{offset:100,color:"#2DC0EE"},{offset:100,color:"#2DC0EE00"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#31E0F24D"},{offset:100,color:"#31E0F2"},{offset:100,color:"#31E0F200"}]}},{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#34FFF54D"},{offset:100,color:"#34FFF5"},{offset:100,color:"#34FFF500"}]}}],backgroundColor:{show:!1,type:"image",value:{fillType:"auto",url:"/s-static/img/9a46e68ae25740e4b61c133d3b537c35.png"}},color:{show:!0,value:"#FFFFFF"},minorColor:{show:!0,value:"#FFFFFF"},gridColor:{show:!0,value:"#FFFFFF"}},this.config={menu:{chart:{barCfg:{barWidth:30,barGap:30,barRadius:{radiusType:"all",allRadius:50,ltRadius:0,rtRadius:0,rbRadius:0,lbRadius:0},barBgColor:{type:"flat",value:"#FFFFFF0F"},barStroke:{color:"#0b71e600",width:0,style:"solid"},barShadow:{color:"#0b71e600",x:0,y:0,blur:0}},dataTips:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},site:"top"}},title:{title:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:16},site:"left"},subTitle:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u526F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"left"}},legend:{legend:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"horizontal-center-top",marker:{shape:"roundRect",size:14},markerSpace:{spacing:10}}},axis:{xaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}},yaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!0,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}}},tooltip:{textStyle:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},padding:{paddingX:10,paddingY:10},borderColor:"rgba(0, 0, 0, 0.65)",backgroundColor:"rgba(0, 0, 0, 0.65)"},expression:{list:[{color:{type:"flat",value:"#2362E4"},condition:{enabled:!1,operator:"OR",expressions:[{operator:"AND",expressions:[["colorField","eq","100"]]}]}}]},advance:{code:""}}},this.data=[{x:"1\u6708",y:48,s:"\u7CFB\u5217\u4E00",colorField:100},{x:"2\u6708",y:40,s:"\u7CFB\u5217\u4E00"},{x:"3\u6708",y:24,s:"\u7CFB\u5217\u4E00"},{x:"4\u6708",y:48,s:"\u7CFB\u5217\u4E00"},{x:"5\u6708",y:49,s:"\u7CFB\u5217\u4E00",colorField:200},{x:"6\u6708",y:58,s:"\u7CFB\u5217\u4E00",colorField:200}],this.type="echarts"}processData(){const{data:r}=this,e=Array.from(new Set(r.map(i=>i.s))),s=Array.from(new Set(r.map(i=>i.x))),o=[];return e.forEach(i=>{const a=r.filter(t=>t.s===i).map(t=>{const d=this.processExpression(t);return d?{value:t.y,itemStyle:d,rawData:t}:{value:t.y,rawData:t}});o.push({name:i,data:a})}),{seriesArr:e,xData:s,yDataArr:o}}setData(r){this.data=r,this.trigger("dataChange",r),this.render()}processExpression(r){const{config:e}=this,s=e.menu&&e.menu.expression&&e.menu.expression.list;let o=null;if(s)for(let i=0;i<s.length;i++){const l=s[i],a=T(l.condition,r),t={flat:l.color.value,linearGradient:v(l.color)};a&&(o={color:t[l.color.type]})}return o}processSeries(r){const{config:e}=this,s=e.menu&&e.menu.chart&&e.menu.chart.barCfg,o=s&&s.barWidth,i=s&&s.barGap,l=s.barRadius;let a=null;l.radiusType==="all"&&(a=l.allRadius),l.radiusType==="alone"&&(a=[l.ltRadius,l.rtRadius,l.rbRadius,l.lbRadius]);let t=null,d=!1;s.barBgColor.type==="flat"?(t=s.barBgColor.value,t.length===9&&t.substr(7)!=="00"&&(d=!0),t.length<=7&&(d=!0)):(t=v(s.barBgColor),d=!0);let p={},c=s.barStroke;const f=c.color,u=c.width,y=c.style;(f.length===9&&f.substr(7)!=="00"||f.length<=7)&&(p={borderColor:f,borderWidth:u,borderType:y});let h=s.barShadow,b={};const m=h.color,w=h.blur,x=h.x,j=h.y;(m.length===9&&m.substr(7)!=="00"||m.length<=7)&&(b={shadowColor:m,shadowBlur:w,shadowOffsetX:x,shadowOffsetY:j});const Y=I(e?.menu?.chart?.dataTips),C=[];return r.yDataArr.forEach(g=>{const X={name:g.name,data:g.data,type:"bar",barCategoryGap:100-o+"%"||"20%",barGap:i+"%"||"20%",showBackground:d,backgroundStyle:{color:t,borderRadius:a,borderColor:"#2c2c2c",borderWidth:1},itemStyle:{borderRadius:a,...p,...b},label:Y,z:1},$=g.data.map(H=>H.value),N={name:g.name,data:$,type:"pictorialBar",symbol:"circle",symbolPosition:"end",symbolSize:parseInt(o/3),color:"#fff",z:2};C.push(X),C.push(N)}),C}transformOptions(){const{menu:r}=this.config,e=this.processData(),{xAxis:s,yAxis:o}=q(r?.axis,e),i=M(r?.legend?.legend),l=O(r?.tooltip);let a=10;i&&i.top==="top"&&(a=30);let t=10;i&&i.top==="bottom"&&(t=20);const d=this.processSeries(e);let c={color:this.theme.seriesColor.map(u=>P(u)),grid:{containLabel:!0,left:"10",top:a,right:"10",bottom:t},tooltip:{show:!0,...l},legend:i,xAxis:o,yAxis:s,series:d};const f=r?.advance?.code;if(f)try{f.title=null,c=_.merge(_.cloneDeep(c),f)}catch{}return c}mounted(){this.instance.on("click","series",e=>{this.trigger("click",e?.data?.rawData)})}}}();return k.prototype._registerImg=function(n){},k}(),{key:"Cf1b4e7d0c0aca",width:400,height:250,options:`{\r
  "actions": [\r
    {\r
      "label": "\u70B9\u51FB",\r
      "identified": "click"\r
    },\r
    {\r
      "label": "\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6",\r
      "identified": "dataChange"\r
    }\r
  ],\r
  "fields": [\r
    {\r
      "name": "x",\r
      "desc": "x\u8F74(\u7C7B\u76EE)\u6570\u636E"\r
    },\r
    {\r
      "name": "y",\r
      "desc": "y\u8F74(\u6570\u503C)\u6570\u636E"\r
    },\r
    {\r
      "name": "s",\r
      "desc": "\u7CFB\u5217\u540D\u79F0"\r
    },\r
    {\r
      "name": "colorFields",\r
      "desc": "\u989C\u8272\u5B57\u6BB5"\r
    }\r
  ],\r
  "propertyPanel": {\r
    "menu": {\r
      "type": "menu",\r
      "children": {\r
        "chart": {\r
          "name": "\u56FE\u8868",\r
          "mode": "single",\r
          "children": {\r
            "barCfg": {\r
              "name": "\u56FE\u8868\u8BBE\u7F6E",\r
              "type": "group",\r
              "fold": false,\r
              "children": {\r
                "barWidth": {\r
                  "name": "\u5BBD\u5EA6",\r
                  "type": "slider",\r
                  "showInput": true,\r
                  "min": 1,\r
                  "max": 100,\r
                  "step": 1,\r
                  "default": 30\r
                },\r
                "barGap": {\r
                  "name": "\u95F4\u8DDD",\r
                  "description": "\u4E0D\u540C\u7CFB\u5217\u7684\u67F1\u95F4\u8DDD\u79BB",\r
                  "type": "slider",\r
                  "showInput": true,\r
                  "min": 0,\r
                  "max": 100,\r
                  "step": 1,\r
                  "default": 30\r
                },\r
                "barRadius": {\r
                  "name": "\u5706\u89D2",\r
                  "type": "suite",\r
                  "children": {\r
                    "radiusType": {\r
                      "name": "",\r
                      "type": "radio",\r
                      "options": [\r
                        {\r
                          "label": "\u5168\u5706\u89D2",\r
                          "value": "all"\r
                        },\r
                        {\r
                          "label": "\u72EC\u7ACB\u5706\u89D2",\r
                          "value": "alone"\r
                        }\r
                      ],\r
                      "default": "all"\r
                    },\r
                    "allRadius": {\r
                      "type": "number",\r
                      "name": "",\r
                      "step": 1,\r
                      "min": 0,\r
                      "default": 50,\r
                      "col": 12,\r
                      "showInPanel": {\r
                        "conditions": [\r
                          [\r
                            ".radiusType",\r
                            "$eq",\r
                            "all"\r
                          ]\r
                        ]\r
                      }\r
                    },\r
                    "ltRadius": {\r
                      "type": "number",\r
                      "name": "\u5DE6\u4E0A",\r
                      "step": 1,\r
                      "min": 0,\r
                      "default": 0,\r
                      "col": 6,\r
                      "showInPanel": {\r
                        "conditions": [\r
                          [\r
                            ".radiusType",\r
                            "$eq",\r
                            "alone"\r
                          ]\r
                        ]\r
                      }\r
                    },\r
                    "rtRadius": {\r
                      "type": "number",\r
                      "name": "\u53F3\u4E0A",\r
                      "step": 1,\r
                      "min": 0,\r
                      "default": 0,\r
                      "col": 6,\r
                      "showInPanel": {\r
                        "conditions": [\r
                          [\r
                            ".radiusType",\r
                            "$eq",\r
                            "alone"\r
                          ]\r
                        ]\r
                      }\r
                    },\r
                    "rbRadius": {\r
                      "type": "number",\r
                      "name": "\u53F3\u4E0B",\r
                      "step": 1,\r
                      "min": 0,\r
                      "default": 0,\r
                      "col": 6,\r
                      "showInPanel": {\r
                        "conditions": [\r
                          [\r
                            ".radiusType",\r
                            "$eq",\r
                            "alone"\r
                          ]\r
                        ]\r
                      }\r
                    },\r
                    "lbRadius": {\r
                      "type": "number",\r
                      "name": "\u5DE6\u4E0B",\r
                      "step": 1,\r
                      "min": 0,\r
                      "default": 0,\r
                      "col": 6,\r
                      "showInPanel": {\r
                        "conditions": [\r
                          [\r
                            ".radiusType",\r
                            "$eq",\r
                            "alone"\r
                          ]\r
                        ]\r
                      }\r
                    }\r
                  }\r
                },\r
                "barBgColor": {\r
                  "name": "\u80CC\u666F",\r
                  "description": "\u67F1\u5B50\u7C7B\u76EE\u80CC\u666F",\r
                  "type": "color",\r
                  "components": [\r
                    "flat",\r
                    "linearGradient"\r
                  ],\r
                  "default": {\r
                    "type": "flat",\r
                    "value": "#FFFFFF0F"\r
                  }\r
                },\r
                "barStroke": {\r
                  "type": "stroke",\r
                  "name": "\u63CF\u8FB9",\r
                  "default": {\r
                    "color": "#0b71e600",\r
                    "width": 0,\r
                    "style": "solid"\r
                  }\r
                },\r
                "barShadow": {\r
                  "type": "shadow",\r
                  "name": "\u9634\u5F71",\r
                  "default": {\r
                    "color": "#0b71e600",\r
                    "x": 0,\r
                    "y": 0,\r
                    "blur": 0\r
                  }\r
                }\r
              }\r
            },\r
            "dataTips": {\r
              "name": "\u663E\u793A\u6570\u636E",\r
              "type": "group",\r
              "enableHide": true,\r
              "fold": false,\r
              "children": {\r
                "show": {\r
                  "default": false\r
                },\r
                "font": {\r
                  "name": "\u6587\u672C\u6837\u5F0F",\r
                  "type": "font",\r
                  "default": {\r
                    "fontFamily": "simSun",\r
                    "fontWeight": 400,\r
                    "color": "#FFFFFFB3",\r
                    "fontSize": 12\r
                  }\r
                },\r
                "site": {\r
                  "type": "select",\r
                  "name": "\u5BF9\u9F50",\r
                  "options": [\r
                    {\r
                      "label": "top",\r
                      "value": "top"\r
                    },\r
                    {\r
                      "label": "left",\r
                      "value": "left"\r
                    },\r
                    {\r
                      "label": "right",\r
                      "value": "right"\r
                    },\r
                    {\r
                      "label": "bottom",\r
                      "value": "bottom"\r
                    },\r
                    {\r
                      "label": "inside",\r
                      "value": "inside"\r
                    },\r
                    {\r
                      "label": "insideLeft",\r
                      "value": "insideLeft"\r
                    },\r
                    {\r
                      "label": "insideRight",\r
                      "value": "insideRight"\r
                    },\r
                    {\r
                      "label": "insideTop",\r
                      "value": "insideTop"\r
                    },\r
                    {\r
                      "label": "insideBottom",\r
                      "value": "insideBottom"\r
                    },\r
                    {\r
                      "label": "insideTopLeft",\r
                      "value": "insideTopLeft"\r
                    },\r
                    {\r
                      "label": "insideBottomLeft",\r
                      "value": "insideBottomLeft"\r
                    },\r
                    {\r
                      "label": "insideTopRight",\r
                      "value": "insideTopRight"\r
                    },\r
                    {\r
                      "label": "insideBottomRight",\r
                      "value": "insideBottomRight"\r
                    }\r
                  ],\r
                  "default": "top"\r
                }\r
              }\r
            }\r
          }\r
        },\r
        "title": {\r
          "name": "\u6807\u9898",\r
          "type": "title"\r
        },\r
        "legend": {\r
          "name": "\u56FE\u4F8B",\r
          "type": "legend"\r
        },\r
        "axis": {\r
          "name": "\u5750\u6807\u8F74",\r
          "type": "axis"\r
        },\r
        "tooltip": {\r
          "name": "\u63D0\u793A\u6846",\r
          "type": "tooltip"\r
        },\r
        "expression": {\r
          "name": "\u6761\u4EF6",\r
          "mode": "single",\r
          "children": {\r
            "list": {\r
              "name": "\u6761\u4EF6\u5217\u8868",\r
              "type": "tabs",\r
              "fold": false,\r
              "template": {\r
                "name": "\u6761\u4EF6<%= i + 1 %>",\r
                "type": "object",\r
                "children": {\r
                  "condition": {\r
                    "name": "\u542F\u7528",\r
                    "type": "logicalTree",\r
                    "default": {\r
                      "enabled": true,\r
                      "operator": "OR",\r
                      "expressions": [\r
                        {\r
                          "operator": "AND",\r
                          "expressions": [\r
                            [\r
                              "colorField",\r
                              "eq",\r
                              "100"\r
                            ]\r
                          ]\r
                        }\r
                      ]\r
                    }\r
                  },\r
                  "color": {\r
                    "name": "\u67F1\u5B50\u989C\u8272",\r
                    "type": "color",\r
                    "components": [\r
                      "flat",\r
                      "linearGradient"\r
                    ],\r
                    "default": {\r
                      "type": "flat",\r
                      "value": "#2362E4"\r
                    }\r
                  }\r
                }\r
              },\r
              "default": [\r
                {\r
                  "color": {\r
                    "type": "flat",\r
                    "value": "#2362E4"\r
                  },\r
                  "condition": {\r
                    "enabled": false,\r
                    "operator": "OR",\r
                    "expressions": [\r
                      {\r
                        "operator": "AND",\r
                        "expressions": [\r
                          [\r
                            "colorField",\r
                            "eq",\r
                            "100"\r
                          ]\r
                        ]\r
                      }\r
                    ]\r
                  }\r
                }\r
              ]\r
            }\r
          }\r
        },\r
        "advance": {\r
          "name": "\u81EA\u5B9A\u4E49",\r
          "mode": "single",\r
          "children": {\r
            "code": {\r
              "name": "\u81EA\u5B9A\u4E49",\r
              "description": "\u76F4\u63A5\u5199echarts option,\u4E66\u5199\u89C4\u8303\uFF1A{\\"key\\": value}(echarts title\u4E0D\u751F\u6548),\u81EA\u5B9A\u4E49option\u4F18\u5148\u7EA7\u5927\u4E8E\u5C5E\u6027\u9762\u677F\u914D\u7F6E",\r
              "type": "code",\r
              "language": "json",\r
              "default": ""\r
            }\r
          }\r
        }\r
      }\r
    }\r
  }\r
}`,script:{lodashminjs:"/lib/lodash.min.js",echarts:"/lib/echarts.js"},utils:["runExpression","getTooltipConfig","getLegendConfig","getLabelConfig","getAxisConfig","transfromColorOfEcharts","transfromColorsOfEcharts"]},E,"echarts","2.0.0")})(window.Vue);})();
