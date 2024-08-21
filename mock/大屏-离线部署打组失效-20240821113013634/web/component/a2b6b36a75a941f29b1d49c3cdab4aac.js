(()=>{(function(B){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||window.conch.register("Ca2b6b36a75a941f29b1d49c3cdab4aac",function(){let v="/img/393e55483f0c40e5be15a4b68992af64.png";function O(n,e){const o=function(d){const c=d.label,f=d.axisLine,u=d.tickLine,y=d.splitLine;let p=2;c.customTickCount&&c.customTickCount.show&&(p=c.customTickCount.tickCount);const h={show:c.show,...c.textarea,backgroundColor:c.titleBgColor.value,padding:[c.padding.paddingY,c.padding.paddingX]},w={show:f.show,lineStyle:{color:f.lineStyle.color,width:f.lineStyle.width,type:f.lineStyle.style}},b={show:u.show,lineStyle:{color:u.lineStyle.color,width:u.lineStyle.width,type:u.lineStyle.style},length:u.length},g={show:y.show,lineStyle:{color:y.lineStyle.color,width:y.lineStyle.width,type:y.lineStyle.style}};return{axisLabel:h,axisLine:w,axisTick:b,splitLine:g,splitNumber:p}},l=e.xData,s=n.xaxis,i=n.yaxis,r=o(s),a=o(i),t={type:"category",...r,data:l},m={type:"value",...a};return{xAxis:t,yAxis:m}}function I(n,e){let o=null;return n&&(o=O(n,e)),o}function D(n){const e=n.textStyle,o=[n.padding.paddingY,n.padding.paddingX],l=n.backgroundColor,s=n.borderColor;return{textStyle:e,padding:o,backgroundColor:l,borderColor:s}}function q(n){let e=null;return n&&(e=D(n)),e}function P(n){if(n.show){const e=n.font,o=n.site.split("-"),l=o[0],s=o[1],i=o[2],r=n.marker.shape,a=n.marker.size,t=n.markerSpace.spacing;return{textStyle:e,orient:l,left:s,top:i,icon:r,itemHeight:a,itemGap:t}}return null}function E(n){let e=null;return n&&(e=P(n)),e}function G(n){let e=null;if(n.show){let o="top";n.site&&(o=n.site),e={position:o,show:!0,...n.font}}return e}function $(n){let e=null;return n&&(e=G(n)),e}function M(n,e,o="tree"){if(!n.enabled)return!1;switch(o){case"code":return W(n.filterCode,e);case"tree":return N(n,e);default:return!1}}function W(n,e){return new Function("data",n)(e)}function z(n){switch(n){case"OR":return Array.prototype.some;case"AND":return Array.prototype.every;default:return()=>!1}}function R(n,e){return z(n.operator).call(n.expressions,e)}function j(n,e,o,l){let s=n[e];if(s==null&&o!=="ne")return!1;switch(o==="eq"||o==="in"||o==="nin"||o==="ne"?(s=s&&s.toString(),l=l.toString()):(s=s*1,l=l*1),o){case"eq":return s===l;case"gt":return s>l;case"lt":return s<l;case"gte":return s>=l;case"lte":return s<=l;case"ne":return s!==l;case"in":return s.toString().includes(l.toString());case"nin":return!s.toString().includes(l.toString())}}function N(n,e){return R(n,o=>R(o,l=>j(e,...l)))}function L({type:n,value:e}){switch(n){case"linearGradient":const{angle:o,stops:l}=e;return{type:"linear",...C(o),colorStops:l.map(s=>({...s,offset:s.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:e.stops.map(s=>({...s,offset:s.offset/100})),global:!1}}}function C(n){const e={x:0,y:0,x2:0,y2:0},o=(s,i,r,a)=>{Object.assign(e,{x:s,y:i,x2:Math.floor(Math.abs(r)*100)/100,y2:Math.floor(Math.abs(a)*100)/100})};n%=360;const l={0:[0,1,0,0],45:[0,1,0,1],90:[0,0,1,0],135:[0,0,1,1],180:[0,0,0,1],225:[1,0,0,1],270:[1,0,0,0],315:[1,1,0,0]};if(l[n])o(...l[n]);else{const s=n%90*(2*Math.PI/360),i=Math.tan(s),r=1/Math.tan(s);let a,t;n>0&&n<90?(n<45?(t=1,a=i):(a=1,t=r),o(0,1,a,t-1)):n>90&&n<180?(n<135?(a=1,t=-i):(t=-1,a=-r*t),o(0,0,a,t)):n>180&&n<270?(n<225?(t=-1,a=i*t):(a=-1,t=r*a),o(1,0,a+1,t)):n>270&&n<=359&&(n<315?(a=-1,t=-i*a):(t=1,a=-r*t),o(1,1,a+1,t-1))}return e}function Y({type:n,value:e}){switch(n){case"flat":return e;case"linearGradient":const{angle:o,stops:l}=e;return{type:"linear",...C(o),colorStops:l.map(i=>({...i,offset:i.offset/100}))};case"radialGradient":return{type:"radial",x:.5,y:.5,r:1,colorStops:e.stops.map(i=>({...i,offset:i.offset/100})),global:!1};case"image":const s=new Image;return s.setAttribute("crossOrigin","anonymous"),e.url&&(s.src=e.url),{image:s,repeat:"repeat"}}}const A=function(){return class extends window.conch.Echarts{constructor(e,o){super(e,o),this.padding=[0,0,0,0],this.theme={seriesColor:[{type:"flat",value:"#2362E4"},{type:"flat",value:"#2782E7"}],backgroundColor:{show:!1,type:"image",fillType:"auto",url:v},color:{show:!0,value:"#FFFFFF"},minorColor:{show:!0,value:"#FFFFFF"},gridColor:{show:!0,value:"#FFFFFF"},name:"\u5B98\u65B9\u8272\u53611"},this.config={menu:{chart:{barCfg:{list:[{seriesType:"bar",barWidth:20,barGap:30,barRadius:{radiusType:"all",allRadius:0,ltRadius:0,rtRadius:0,rbRadius:0,lbRadius:0},barBgColor:{type:"flat",value:"#ffffff00"},barStroke:{color:"#0b71e6",width:0,style:"solid"},barShadow:{color:"#0b71e6",x:0,y:0,blur:0},lineStroke:{width:2,style:"solid"},smooth:!1,smoothNumber:.5,lineShadow:{color:"#0b71e600",x:0,y:0,blur:0},lineSwitch:!1,opacity:.3,symbol:!1},{seriesType:"line",barWidth:20,barGap:30,barRadius:0,barBgColor:{type:"flat",value:"#ffffff00"},barStroke:{color:"#0b71e6",width:0,style:"solid"},barShadow:{color:"#0b71e6",x:0,y:0,blur:0},lineStroke:{width:2,style:"solid"},smooth:!1,smoothNumber:.5,lineShadow:{color:"#0b71e600",x:0,y:0,blur:0},lineSwitch:!1,opacity:.3,symbol:!0}]},dataTips:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},site:"top"}},title:{title:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:16},site:"left"},subTitle:{show:!1,padding:{top:0,left:0,bottom:0,right:0},text:"\u8FD9\u662F\u526F\u6807\u9898",font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"left"}},legend:{legend:{show:!1,font:{fontFamily:"simSun",fontWeight:400,color:"#ffffff",fontSize:12},site:"horizontal-center-top",marker:{shape:"roundRect",size:14},markerSpace:{spacing:10}}},axis:{xaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!1,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}},yaxis:{label:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:12,color:"#FFFFFFB3"},titleBgColor:{type:"flat",value:"#ffffff00"},padding:{paddingX:0,paddingY:0},customTickCount:{show:!1,tickCount:5}},axisLine:{show:!0,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"}},tickLine:{show:!1,lineStyle:{color:"#FFFFFF4D",width:1,style:"solid"},length:5},splitLine:{show:!0,lineStyle:{color:"#FFFFFF1A",width:1,style:"solid"}}}},tooltip:{textStyle:{fontFamily:"simSun",fontWeight:400,color:"#FFFFFFB3",fontSize:12},padding:{paddingX:10,paddingY:10},borderColor:"rgba(0, 0, 0, 0.65)",backgroundColor:"rgba(0, 0, 0, 0.65)"},expression:{list:[{color:{type:"flat",value:"#02C37A"},condition:{enabled:!0,operator:"OR",expressions:[{operator:"AND",expressions:[["s","eq","\u7CFB\u5217\u4E8C"]]}]}}]},advance:{code:""}}},this.data=[{x:"1\u6708",y:60,s:"\u7CFB\u5217\u4E00",colorField:100},{x:"2\u6708",y:40,s:"\u7CFB\u5217\u4E00"},{x:"3\u6708",y:24,s:"\u7CFB\u5217\u4E00"},{x:"4\u6708",y:48,s:"\u7CFB\u5217\u4E00"},{x:"5\u6708",y:49,s:"\u7CFB\u5217\u4E00",colorField:200},{x:"6\u6708",y:58,s:"\u7CFB\u5217\u4E00",colorField:200},{x:"1\u6708",y:40,s:"\u7CFB\u5217\u4E8C",colorField:100},{x:"2\u6708",y:35,s:"\u7CFB\u5217\u4E8C"},{x:"3\u6708",y:10,s:"\u7CFB\u5217\u4E8C"},{x:"4\u6708",y:24,s:"\u7CFB\u5217\u4E8C"},{x:"5\u6708",y:33,s:"\u7CFB\u5217\u4E8C",colorField:200},{x:"6\u6708",y:38,s:"\u7CFB\u5217\u4E8C",colorField:200}],this.type="echarts"}resize(){!this.parentDom.offsetParent||super.resize()}processData(){const{data:e}=this,o=this.config?.menu?.chart?.barCfg?.list,l=Array.from(new Set(e.map(r=>r.s))),s=Array.from(new Set(e.map(r=>r.x))),i=[];return l.forEach((r,a)=>{const t=o[a]&&o[a].seriesType,m=e.filter(c=>c.s===r);let d=[];if(t==="bar"&&(d=m.map(c=>{const f=this.processExpression(c);return f?{value:c.y,itemStyle:f,rawData:c}:{value:c.y,rawData:c}}),i.push({name:r,data:d})),t==="line"){let c={};d=m.map(f=>{const u=this.processExpression(f);return u&&(c=u),{value:f.y,rawData:f}}),i.push({name:r,data:d,lineStyle:c})}}),{seriesArr:l,xData:s,yDataArr:i}}setData(e){this.data=e,this.trigger("dataChange",e),this.render()}processExpression(e){const{config:o}=this,l=o?.menu?.expression?.list;let s=null;if(l)for(let i=0;i<l.length;i++){const r=l[i],a=M(r.condition,e),t={flat:r.color.value,linearGradient:L(r.color)};a&&(s={color:t[r.color.type]})}return s}processSeries(e){let o=[];const{menu:l}=this.config;(l?.chart?.barCfg?.list).forEach((t,m)=>{const d=t.seriesType;if(d==="bar"){const c=t.barWidth,f=t.barGap,u=t.barRadius;let y=null;u.radiusType==="all"&&(y=u.allRadius),u.radiusType==="alone"&&(y=[u.ltRadius,u.rtRadius,u.rbRadius,u.lbRadius]);let p=null,h=!1;t.barBgColor.type==="flat"?(p=t.barBgColor.value,p.length===9&&p.substr(7)!=="00"&&(h=!0),p.length<=7&&(h=!0)):(p=L(t.barBgColor),h=!0);let w={},b=t.barStroke;const g=b.color,T=b.width,k=b.style;(g.length===9&&g.substr(7)!=="00"||g.length<=7)&&(w={borderColor:g,borderWidth:T,borderType:k});let F=t.barShadow,S={};const x=F.color,X=F.blur,H=F.x,V=F.y;(x.length===9&&x.substr(7)!=="00"||x.length<=7)&&(S={shadowColor:x,shadowBlur:X,shadowOffsetX:H,shadowOffsetY:V}),o.push({type:"bar",barCategoryGap:100-c+"%"||"20%",barGap:f+"%"||"20%",showBackground:h,backgroundStyle:{color:p},itemStyle:{borderRadius:y,...w,...S}})}if(d==="line"){let c={},f=t.lineStroke;const u=f.width,y=f.style;c={width:u,type:y};let p=t.smooth;p&&(p=t.smoothNumber);let h=t.lineShadow,w={};const b=h.color,g=h.blur,T=h.x,k=h.y;(b.length===9&&b.substr(7)!=="00"||b.length<=7)&&(w={shadowColor:b,shadowBlur:g,shadowOffsetX:T,shadowOffsetY:k});const F=t.lineSwitch?{areaStyle:{opacity:t.opacity}}:{},S=t.symbol?{}:{symbolSize:.01};o.push({type:"line",smooth:p,lineStyle:{...c,...w},...F,...S})}});const i=$(l?.chart?.dataTips),r=[];return e.yDataArr.forEach((t,m)=>{const d=o[m],c={name:t.name,data:t.data,...d,label:i};d.type==="line"&&(c.lineStyle={...c.lineStyle,...t.lineStyle},c.itemStyle={...c.itemStyle,...t.lineStyle}),r.push(c)}),r}transformOptions(){const{config:e}=this,o=this.processData(),{xAxis:l,yAxis:s}=I(e?.menu?.axis,o),i=E(e?.menu?.legend?.legend),r=q(e?.menu?.tooltip);let a=10;i&&i.top==="top"&&(a=30);let t=10;i&&i.top==="bottom"&&(t=20);const m=this.processSeries(o);let d={color:this.theme.seriesColor.map(f=>Y(f)),grid:{containLabel:!0,left:"10",top:a,right:"10",bottom:t},tooltip:{show:!0,trigger:"axis",axisPointer:{type:"none"},...r},legend:i,xAxis:l,yAxis:s,series:m};const c=_.cloneDeep(e?.menu?.advance?.code);if(c)try{c.title&&(c.title=null),d=_.merge(_.cloneDeep(d),c)}catch{}return d}mounted(){const e=this.instance;e.off("click"),e.getZr().on("click",o=>{!o.target?.culling&&this.trigger("click")}),e.on("click","series",o=>{this.trigger("click",o?.data?.rawData)})}}}();return A.prototype._registerImg=function(n){v=(n||"")+"/img/393e55483f0c40e5be15a4b68992af64.png"},A}(),{key:"Ccaeb23f7b5e4",width:400,height:250,options:`{
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
                "list": {
                  "name": "\u7CFB\u5217\u6837\u5F0F",
                  "type": "tabs",
                  "fold": false,
                  "template": {
                    "name": "\u7CFB\u5217<%= i + 1 %>",
                    "type": "object",
                    "children": {
                      "seriesType": {
                        "name": "\u7C7B\u578B",
                        "type": "radio",
                        "mode": "button",
                        "optionCol": 12,
                        "options": [
                          {
                            "label": "\u67F1\u72B6\u56FE",
                            "value": "bar"
                          },
                          {
                            "label": "\u7EBF\u9762\u56FE",
                            "value": "line"
                          }
                        ],
                        "default": "bar"
                      },
                      "barWidth": {
                        "name": "\u5BBD\u5EA6",
                        "type": "slider",
                        "showInput": true,
                        "min": 1,
                        "max": 100,
                        "step": 1,
                        "default": 20,
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "bar"
                          ]
                        ]
                      },
                      "barGap": {
                        "name": "\u95F4\u8DDD",
                        "description": "\u4E0D\u540C\u7CFB\u5217\u7684\u67F1\u95F4\u8DDD\u79BB",
                        "type": "slider",
                        "showInput": true,
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "default": 30,
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "bar"
                          ]
                        ]
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
                        },
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "bar"
                          ]
                        ]
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
                        },
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "bar"
                          ]
                        ]
                      },
                      "barStroke": {
                        "type": "stroke",
                        "name": "\u63CF\u8FB9",
                        "default": {
                          "color": "#0b71e6",
                          "width": 0,
                          "style": "solid"
                        },
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "bar"
                          ]
                        ]
                      },
                      "barShadow": {
                        "type": "shadow",
                        "name": "\u9634\u5F71",
                        "default": {
                          "color": "#0b71e6",
                          "x": 0,
                          "y": 0,
                          "blur": 0
                        },
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "bar"
                          ]
                        ]
                      },
                      "lineStroke": {
                        "type": "stroke",
                        "name": "\u63CF\u8FB9",
                        "components": [
                          "width",
                          "style"
                        ],
                        "default": {
                          "width": 2,
                          "style": "solid"
                        },
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "line"
                          ]
                        ]
                      },
                      "smooth": {
                        "type": "switch",
                        "name": "\u5E73\u6ED1",
                        "default": false,
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "line"
                          ]
                        ]
                      },
                      "smoothNumber": {
                        "type": "slider",
                        "name": "\u5E73\u6ED1\u5F20\u529B",
                        "min": 0,
                        "max": 1,
                        "step": 0.1,
                        "default": 0.5,
                        "showInPanel": [
                          [
                            ".smooth",
                            "$eq",
                            true
                          ]
                        ]
                      },
                      "lineShadow": {
                        "type": "shadow",
                        "name": "\u9634\u5F71",
                        "default": {
                          "color": "#0b71e600",
                          "x": 0,
                          "y": 0,
                          "blur": 0
                        },
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "line"
                          ]
                        ]
                      },
                      "lineSwitch": {
                        "type": "switch",
                        "name": "\u663E\u793A\u9762\u79EF",
                        "default": false,
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "line"
                          ]
                        ]
                      },
                      "opacity": {
                        "type": "slider",
                        "name": "\u900F\u660E",
                        "min": 0,
                        "max": 1,
                        "step": 0.1,
                        "default": 0.3,
                        "showInPanel": [
                          [
                            ".lineSwitch",
                            "$eq",
                            true
                          ]
                        ]
                      },
                      "symbol": {
                        "type": "switch",
                        "name": "\u663E\u793A\u7AEF\u70B9",
                        "default": true,
                        "showInPanel": [
                          [
                            ".seriesType",
                            "$eq",
                            "line"
                          ]
                        ]
                      }
                    }
                  },
                  "default": [
                    {
                      "seriesType": "bar",
                      "barWidth": 20,
                      "barGap": 30,
                      "barRadius": {
                        "radiusType": "all",
                        "allRadius": 0,
                        "ltRadius": 0,
                        "rtRadius": 0,
                        "rbRadius": 0,
                        "lbRadius": 0
                      },
                      "barBgColor": {
                        "type": "flat",
                        "value": "#ffffff00"
                      },
                      "barStroke": {
                        "color": "#0b71e6",
                        "width": 0,
                        "style": "solid"
                      },
                      "barShadow": {
                        "color": "#0b71e6",
                        "x": 0,
                        "y": 0,
                        "blur": 0
                      },
                      "lineStroke": {
                        "width": 2,
                        "style": "solid"
                      },
                      "smooth": false,
                      "smoothNumber": 0.5,
                      "lineShadow": {
                        "color": "#0b71e600",
                        "x": 0,
                        "y": 0,
                        "blur": 0
                      },
                      "lineSwitch": false,
                      "opacity": 0.3,
                      "symbol": false
                    },
                    {
                      "seriesType": "line",
                      "barWidth": 20,
                      "barGap": 30,
                      "barRadius": 0,
                      "barBgColor": {
                        "type": "flat",
                        "value": "#ffffff00"
                      },
                      "barStroke": {
                        "color": "#0b71e6",
                        "width": 0,
                        "style": "solid"
                      },
                      "barShadow": {
                        "color": "#0b71e6",
                        "x": 0,
                        "y": 0,
                        "blur": 0
                      },
                      "lineStroke": {
                        "width": 2,
                        "style": "solid"
                      },
                      "smooth": false,
                      "smoothNumber": 0.5,
                      "lineShadow": {
                        "color": "#0b71e600",
                        "x": 0,
                        "y": 0,
                        "blur": 0
                      },
                      "lineSwitch": false,
                      "opacity": 0.3,
                      "symbol": true
                    }
                  ]
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
                  "default": false
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
                    "name": "\u56FE\u5F62\u989C\u8272",
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
                    "value": "#02C37A"
                  },
                  "condition": {
                    "enabled": true,
                    "operator": "OR",
                    "expressions": [
                      {
                        "operator": "AND",
                        "expressions": [
                          [
                            "s",
                            "eq",
                            "\u7CFB\u5217\u4E8C"
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
}`,script:{lodashminjs:"/lib/lodash.min.js",echarts:"/lib/echarts.js"},utils:["getAxisConfig","getTooltipConfig","getLegendConfig","getLabelConfig","runExpression","transfromColorOfEcharts","transfromColorsOfEcharts"],img:{I7f422873dd6cd:"/img/393e55483f0c40e5be15a4b68992af64.png"}},B,"echarts","2.0.0")})(window.Vue);})();
