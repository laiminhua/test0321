(()=>{(function(T){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||window.conch.register("Cb85b53aee21e4a56bf161ee5ffd071c2",function(){function A(n,r){const t=function(u){const c=u.label,d=u.axisLine,p=u.tickLine,y=u.splitLine;let h=2;c.customTickCount&&c.customTickCount.show&&(h=c.customTickCount.tickCount);const b={show:c.show,...c.textarea,backgroundColor:c.titleBgColor.value,padding:[c.padding.paddingY,c.padding.paddingX]},m={show:d.show,lineStyle:{color:d.lineStyle.color,width:d.lineStyle.width,type:d.lineStyle.style}},F={show:p.show,lineStyle:{color:p.lineStyle.color,width:p.lineStyle.width,type:p.lineStyle.style},length:p.length},w={show:y.show,lineStyle:{color:y.lineStyle.color,width:y.lineStyle.width,type:y.lineStyle.style}};return{axisLabel:b,axisLine:m,axisTick:F,splitLine:w,splitNumber:h}},o=r.xData,s=n.xaxis,i=n.yaxis,l=t(s),a=t(i),e={type:"category",...l,data:o},f={type:"value",...a};return{xAxis:e,yAxis:f}}function R(n,r){let t=null;return n&&(t=A(n,r)),t}function L(n){const r=n.textStyle,t=[n.padding.paddingY,n.padding.paddingX],o=n.backgroundColor,s=n.borderColor;return{textStyle:r,padding:t,backgroundColor:o,borderColor:s}}function B(n){let r=null;return n&&(r=L(n)),r}function E(n){if(n.show){const r=n.font,t=n.site.split("-"),o=t[0],s=t[1],i=t[2],l=n.marker.shape,a=n.marker.size,e=n.markerSpace.spacing;return{textStyle:r,orient:o,left:s,top:i,icon:l,itemHeight:a,itemGap:e}}return null}function D(n){let r=null;return n&&(r=E(n)),r}function O(n){let r=null;if(n.show){let t="top";n.site&&(t=n.site),r={position:t,show:!0,...n.font}}return r}function G(n){let r=null;return n&&(r=O(n)),r}function M(n,r,t="tree"){if(!n.enabled)return!1;switch(t){case"code":return I(n.filterCode,r);case"tree":return q(n,r);default:return!1}}function I(n,r){return new Function("data",n)(r)}function W(n){switch(n){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}function x(n,r){return W(n.operator).call(n.expressions,r)}function z(n,r,t,o){let s=n[r];if(s==null)return!1;switch(t==="eq"||t==="in"||t==="nin"?(s=s.toString(),o=o.toString()):(s=s*1,o=o*1),t){case"eq":return s===o;case"gt":return s>o;case"lt":return s<o;case"gte":return s>=o;case"lte":return s<=o;case"ne":return s!==o;case"in":return s.toString().includes(o.toString());case"nin":return!s.toString().includes(o.toString())}}function q(n,r){return x(n,t=>x(t,o=>z(r,...o)))}function C({type:n,value:r}){switch(n){case"linearGradient":const{angle:t,stops:o}=r;return{type:"linear",...g(t),colorStops:o.map(s=>({...s,offset:s.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:r.stops.map(s=>({...s,offset:s.offset/100})),global:!1}}}function g(n){const r={x:0,y:0,x2:0,y2:0},t=(s,i,l,a)=>{Object.assign(r,{x:s,y:i,x2:Math.floor(Math.abs(l)*100)/100,y2:Math.floor(Math.abs(a)*100)/100})};n%=360;const o={0:[0,1,0,0],45:[0,1,0,1],90:[0,0,1,0],135:[0,0,1,1],180:[0,0,0,1],225:[1,0,0,1],270:[1,0,0,0],315:[1,1,0,0]};if(o[n])t(...o[n]);else{const s=n%90*(2*Math.PI/360),i=Math.tan(s),l=1/Math.tan(s);let a,e;n>0&&n<90?(n<45?(e=1,a=i):(a=1,e=l),t(0,1,a,e-1)):n>90&&n<180?(n<135?(a=1,e=-i):(e=-1,a=-l*e),t(0,0,a,e)):n>180&&n<270?(n<225?(e=-1,a=i*e):(a=-1,e=l*a),t(1,0,a+1,e)):n>270&&n<=359&&(n<315?(a=-1,e=-i*a):(e=1,a=-l*e),t(1,1,a+1,e-1))}return r}function j({type:n,value:r}){switch(n){case"flat":return r;case"linearGradient":const{angle:t,stops:o}=r;return{type:"linear",...g(t),colorStops:o.map(i=>({...i,offset:i.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:r.stops.map(i=>({...i,offset:i.offset/100})),global:!1};case"image":const s=new Image;return r.url&&(s.src=r.url),{image:s,repeat:"repeat"}}}const S=function(){return class extends window.conch.Echarts{constructor(r,t){super(r,t),this.padding=[0,0,0,0],this.theme={seriesColor:[{type:"flat",value:"#2362E4"},{type:"flat",value:"#2782E7"},{type:"flat",value:"#2AA1EB"},{type:"flat",value:"#2DC0EE"},{type:"flat",value:"#31E0F2"},{type:"flat",value:"#34FFF5"}],backgroundColor:{show:!1,type:"image",fillType:"auto",url:"/s-static/img/psa40898cc-e317-4ab7-bf3f-d7877ee9c73f.png"},color:{show:!0,value:"#FFFFFF"},minorColor:{show:!0,value:"#FFFFFF"},gridColor:{show:!0,value:"#FFFFFF"},name:"\u4E3B\u98981"},this.config={menu:{chart:{barCfg:{barWidth:30,barGap:30,barRadius:{radiusType:"all",allRadius:0,ltRadius:0,rtRadius:0,rbRadius:0,lbRadius:0},barBgColor:{type:"flat",value:"#ffffff00"},barStroke:{color:"#0b71e600",width:0,style:"solid"},barShadow:{color:"#0b71e600",x:0,y:0,blur:0}},dataTips:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},site:"top"}},title:{title:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:16},site:"left"},subTitle:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u526F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"left"}},legend:{legend:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"horizontal-center-top",marker:{shape:"roundRect",size:14},markerSpace:{spacing:10}}},axis:{xaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}},yaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!0,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}}},tooltip:{textStyle:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},padding:{paddingX:10,paddingY:10},borderColor:"rgba(0, 0, 0, 0.65)",backgroundColor:"rgba(0, 0, 0, 0.65)"},expression:{list:[{color:{type:"flat",value:"#2362E4"},condition:{enabled:!1,operator:"OR",expressions:[{operator:"AND",expressions:[["colorField","eq","100"]]}]}}]},advance:{code:""}}},this.data=[{x:"1\u6708",y:48,s:"\u7CFB\u5217\u4E00",colorField:100},{x:"2\u6708",y:40,s:"\u7CFB\u5217\u4E00"},{x:"3\u6708",y:24,s:"\u7CFB\u5217\u4E00"},{x:"4\u6708",y:48,s:"\u7CFB\u5217\u4E00"},{x:"5\u6708",y:49,s:"\u7CFB\u5217\u4E00",colorField:200},{x:"6\u6708",y:58,s:"\u7CFB\u5217\u4E00",colorField:200}],this.type="echarts"}processData(){const{data:r}=this,t=Array.from(new Set(r.map(i=>i.s))),o=Array.from(new Set(r.map(i=>i.x))),s=[];return t.forEach(i=>{const a=r.filter(e=>e.s===i).map(e=>{const f=this.processExpression(e);return f?{value:e.y,itemStyle:f,rawData:e}:{value:e.y,rawData:e}});s.push({name:i,data:a})}),{seriesArr:t,xData:o,yDataArr:s}}setData(r){this.data=r,this.trigger("dataChange",r),this.render()}processExpression(r){const{config:t}=this,o=t?.menu?.expression?.list;let s=null;if(o)for(let i=0;i<o.length;i++){const l=o[i],a=M(l.condition,r),e={flat:l.color.value,linearGradient:C(l.color)};a&&(s={color:e[l.color.type]})}return s}processSeries(r){const{config:t}=this,o=t.menu&&t.menu.chart&&t.menu.chart.barCfg,s=o&&o.barWidth,i=o&&o.barGap,l=o.barRadius;let a=null;l.radiusType==="all"&&(a=l.allRadius),l.radiusType==="alone"&&(a=[l.ltRadius,l.rtRadius,l.rbRadius,l.lbRadius]);let e=null,f=!1;o.barBgColor.type==="flat"?(e=o.barBgColor.value,e.length===9&&e.substr(7)!=="00"&&(f=!0),e.length<=7&&(f=!0)):(e=C(o.barBgColor),f=!0);let u={},c=o.barStroke;const d=c.color,p=c.width,y=c.style;(d.length===9&&d.substr(7)!=="00"||d.length<=7)&&(u={borderColor:d,borderWidth:p,borderType:y});let h=o.barShadow,b={};const m=h.color,F=h.blur,w=h.x,P=h.y;(m.length===9&&m.substr(7)!=="00"||m.length<=7)&&(b={shadowColor:m,shadowBlur:F,shadowOffsetX:w,shadowOffsetY:P});const Y=G(t?.menu?.chart?.dataTips),v=[];return r.yDataArr.forEach(k=>{const X={name:k.name,data:k.data,type:"bar",barCategoryGap:100-s+"%"||"20%",barGap:i+"%"||"20%",showBackground:f,backgroundStyle:{color:e},itemStyle:{borderRadius:a,...u,...b},label:Y};v.push(X)}),v}transformOptions(){const{config:r}=this,t=this.processData(),{xAxis:o,yAxis:s}=R(r?.menu?.axis,t),i=D(r?.menu?.legend?.legend),l=B(r?.menu?.tooltip);let a=10;i&&i.top==="top"&&(a=30);let e=10;i&&i.top==="bottom"&&(e=20);const f=this.processSeries(t);let u={color:this.theme.seriesColor.map(d=>j(d)),grid:{containLabel:!0,left:"10",top:a,right:"10",bottom:e},tooltip:{show:!0,...l},legend:i,xAxis:s,yAxis:o,series:f};const c=r?.menu?.advance?.code;if(c)try{c.title=null,u=_.merge(_.cloneDeep(u),c)}catch{}return u}mounted(){this.instance.on("click","series",t=>{this.trigger("click",t?.data?.rawData)})}}}();return S.prototype._registerImg=function(n){},S}(),{key:"C843ba0be95bd3",width:400,height:250,options:`{\r
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
                      "default": 0,\r
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
                    "value": "#ffffff00"\r
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
}`,script:{lodashminjs:"/lib/lodash.min.js",echarts:"/lib/echarts.js"},utils:["getAxisConfig","getTooltipConfig","getLegendConfig","getLabelConfig","runExpression","transfromColorOfEcharts","transfromColorsOfEcharts"]},T,"echarts","2.0.0")})(window.Vue);})();
