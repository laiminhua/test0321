(()=>{(function(u){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||(window.conch.createCss(".C16033996bdf8a{color:#fff}.C16033996bdf8a *{outline:none;box-sizing:border-box}.C16033996bdf8a p,.C16033996bdf8a dl,.C16033996bdf8a ol,.C16033996bdf8a ul{margin:0;padding:0}.C16033996bdf8a li{list-style:none}.C16033996bdf8a .container{width:100%;height:100%}","C9957289109dbd"),window.conch.register("C0fff2478881f4db28c5fe491186383c9",function(){let s="/img/b83d6b6eb272487e8cb91de3595d9c15.png";const c=function(){return class extends window.conch.VueSFC{constructor(t,a){super(t,a),this.type="vueSFC";var r={name:"chart",data(){return{padding:[0,0,0,0],theme:{},img1:"Iff7e9d024af644fe9e6bcb6ca55e670f",data:[{fbtotal:"173",fb:[{value:30,name:"\u5730\u78C1\u5C0F\u8F66",itemStyle:{color:"#E8B828"}},{value:20,name:"\u9AD8\u4F4D\u89C6\u9891",itemStyle:{color:"#2FFCD8"}},{value:10,name:"\u5C01\u95ED\u9053\u95F8",itemStyle:{color:"#008BF6"}},{value:10,name:"\u7ACB\u4F53\u8F66\u5E93",itemStyle:{color:"#2FFCD8"}}]}],opts:{}}},mounted(){this.init()},methods:{setData(o){this.data=o},init(){const o=document.getElementById("chartqy"),l=echarts.init(o);let e=[{name:"\u4E1C\u57CE",value:60.83,zs:9796},{name:"\u897F\u57CE",value:21.83,zs:3328},{name:"\u988D\u4E1C",value:12.83,zs:1220}],h=e.map(n=>n.name),y=e.map(n=>n.value),i=20,g=[new echarts.graphic.LinearGradient(1,0,0,1,[{offset:1,color:"#40F9D4"},{offset:0,color:"#40F9D4"}]),new echarts.graphic.LinearGradient(1,0,0,1,[{offset:1,color:"#81DFFF"},{offset:0,color:"#81DFFF"}]),new echarts.graphic.LinearGradient(1,0,0,1,[{offset:1,color:"#0090FF"},{offset:0,color:"#0090FF"}])],F={xAxis:{splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},grid:{left:"10%",right:150,top:"10%",bottom:"10%"},yAxis:[{inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:h}],series:[{type:"bar",barWidth:i,legendHoverLink:!1,symbolRepeat:!0,silent:!0,itemStyle:{color:function(n){return g[n.dataIndex]}},data:e,label:{normal:{color:"#b3ccf8",show:!0,position:["0px","-20px"],textStyle:{fontSize:12},formatter:function(n){let f="";return f="{color1|"+n.name+"}     {color3|"+n.data.zs+"}",f},rich:{color1:{color:"#fff",fontWeight:700,fontSize:15},color2:{color:"#fff",fontWeight:700,fontSize:15},color3:{color:"#93C0FF",fontWeight:700,fontSize:15},color4:{color:"#93C0FF",fontSize:15}}}},z:1},{type:"pictorialBar",animationDuration:0,symbolRepeat:"fixed",symbolMargin:"20%",symbol:"roundRect",symbolSize:[14,i],itemStyle:{normal:{color:"#000"}},label:{normal:{show:!0,color:"#fff",position:"right",offset:[0,2],distance:30,textStyle:{color:"#fff"},formatter:function(n){return"                {color4value|"+n.data+"}{color4unit|%}"},rich:{value:{fontSize:17,fontWeight:600},unit:{padding:[0,6],fontSize:17},color4:{color:"#fff",fontSize:17}}}},data:y,z:0},{type:"pictorialBar",itemStyle:{color:"#000"},symbolRepeat:"fixed",symbolMargin:6,symbol:"roundRect",symbolClip:!0,symbolSize:[4,i+1],symbolPosition:"start",symbolOffset:[0,0],data:e,z:2}]};l.setOption(F)}},watch:{}},p=function(){var l=this,e=l._self._c;return e("div",{staticStyle:{height:"250px",width:"400px"},attrs:{id:"chartqy"}})},m=[],b=Object.assign({render:p,staticRenderFns:m},r);this.vueInstConfig=b,this.__mergeVueInstData()}}}();return c.prototype._registerImg=function(d=""){let t={};s=d+"/img/b83d6b6eb272487e8cb91de3595d9c15.png",t.Iff7e9d024af644fe9e6bcb6ca55e670f=s;let a=Object.keys(t).map(r=>`--${r}: url('${t[r]}')`).join(";");if(a){let r=`.C16033996bdf8a {
            ${a}
          }`;window.conch.createCss(r,"cssVard2c0e3a44900a")}},c}(),{key:"C16033996bdf8a",width:400,height:250,options:`{\r
  "actions": [\r
    {\r
      "label": "\u70B9\u51FB",\r
      "identified": "click",\r
      "hasCallback": true\r
    },\r
    {\r
      "label": "\u5F53\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6",\r
      "identified": "dataChange",\r
      "hasCallback": true\r
    }\r
  ],\r
  "fields": [\r
    {\r
      "name": "x",\r
      "desc": "\u7C7B\u522B\u540D\u79F0"\r
    },\r
    {\r
      "name": "y",\r
      "desc": "\u6570\u503C"\r
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
            "chartCfg": {\r
              "name": "\u56FE\u8868\u8BBE\u7F6E",\r
              "type": "group",\r
              "fold": false,\r
              "children": {\r
                "radius": {\r
                  "name": "\u534A\u5F84",\r
                  "type": "slider",\r
                  "default": 80\r
                },\r
                "aperture": {\r
                  "name": "\u5B54\u5F84",\r
                  "type": "slider",\r
                  "default": 72\r
                },\r
                "distance": {\r
                  "name": "\u95F4\u8DDD",\r
                  "type": "slider",\r
                  "default": 0\r
                },\r
                "pieRadius": {\r
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
                "pieStroke": {\r
                  "type": "stroke",\r
                  "name": "\u63CF\u8FB9",\r
                  "default": {\r
                    "color": "#0b71e600",\r
                    "width": 0,\r
                    "style": "solid"\r
                  }\r
                },\r
                "angle": {\r
                  "type": "suite",\r
                  "name": "\u89D2\u5EA6",\r
                  "children": {\r
                    "start": {\r
                      "name": "\u8D77",\r
                      "type": "number",\r
                      "default": 5,\r
                      "min": 0,\r
                      "max": 360,\r
                      "step": 1,\r
                      "col": 12\r
                    }\r
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
                "labelType": {\r
                  "name": "\u6570\u636E\u7C7B\u578B",\r
                  "type": "radio",\r
                  "options": [\r
                    {\r
                      "label": "\u540D\u79F0",\r
                      "value": "name"\r
                    },\r
                    {\r
                      "label": "\u6570\u503C",\r
                      "value": "value"\r
                    },\r
                    {\r
                      "label": "\u767E\u5206\u6BD4",\r
                      "value": "percent"\r
                    }\r
                  ],\r
                  "default": "percent"\r
                },\r
                "precision": {\r
                  "type": "number",\r
                  "name": "\u7CBE\u5EA6",\r
                  "step": 1,\r
                  "min": 0,\r
                  "default": 2,\r
                  "showInPanel": {\r
                    "conditions": [\r
                      [\r
                        ".labelType",\r
                        "$eq",\r
                        "percent"\r
                      ]\r
                    ]\r
                  }\r
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
                      "label": "outside",\r
                      "value": "outside"\r
                    },\r
                    {\r
                      "label": "inside",\r
                      "value": "inside"\r
                    },\r
                    {\r
                      "label": "center",\r
                      "value": "center"\r
                    }\r
                  ],\r
                  "default": "outside"\r
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
                    "name": "\u73AF\u989C\u8272",\r
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
}`,img:{Iff7e9d024af644fe9e6bcb6ca55e670f:"/img/b83d6b6eb272487e8cb91de3595d9c15.png"},script:{echarts_480js:"/lib/echarts_4.8.0.js"}},u,"vueSFC","2.0.0"))})(window.Vue);})();
