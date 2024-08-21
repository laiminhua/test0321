(()=>{(function(i){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||(window.conch.createCss(".C29905d36b92fb{color:#fff}.C29905d36b92fb *{outline:none;box-sizing:border-box}.C29905d36b92fb p,.C29905d36b92fb dl,.C29905d36b92fb ol,.C29905d36b92fb ul{margin:0;padding:0}.C29905d36b92fb li{list-style:none}.C29905d36b92fb .container{width:100%;height:100%}","C637a4e8850bd3"),window.conch.register("C70e5a915febf4e61bba4bcd572405d3c",function(){const l=function(){return class extends window.conch.VueSFC{constructor(r,e){super(r,e),this.type="vueSFC";var n={name:"chart",data(){return{padding:[0,0,0,0],theme:{},data:[{tl:[{name:"\u672C\u5468"},{name:"\u4E0A\u5468"}],dxdata:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"],bz:[4.9,7.3,9.2,5.6,7.7,5.6,4.2],sz:[2.9,5,4.4,2.7,5.7,4.6,1.2]}],opts:{}}},mounted(){this.init()},methods:{setData(t){this.data=t},init(){const t=document.getElementById("chartzr"),a=echarts.init(t);let o={tooltip:{trigger:"axis",formatter:"{b}<br />{a0}: {c0}<br />{a1}: {c1}",axisPointer:{type:"shadow",label:{backgroundColor:"#6a7985"}},textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"\u5FAE\u8F6F\u96C5\u9ED1",fontSize:12}},grid:{left:"1%",right:"4%",bottom:"6%",top:30,padding:"0 0 10 0",containLabel:!0},legend:{right:10,top:0,icon:"circle",itemGap:16,itemWidth:18,itemHeight:10,data:this.data[0].tl,textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"\u5FAE\u8F6F\u96C5\u9ED1",fontSize:12}},xAxis:[{type:"category",boundaryGap:!0,data:this.data[0].dxdata,axisLabel:{interval:0,margin:15,textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"\u5FAE\u8F6F\u96C5\u9ED1",fontSize:12}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#fff",opacity:.2}},splitLine:{show:!1}}],yAxis:[{type:"value",splitNumber:5,axisLabel:{textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"\u5FAE\u8F6F\u96C5\u9ED1",fontSize:12}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:["#fff"],opacity:.06}}}],series:[{name:this.data[0].tl[0].name,type:"bar",data:this.data[0].bz,barWidth:10,barGap:0,label:{normal:{show:!1,position:"top",textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"\u5FAE\u8F6F\u96C5\u9ED1",fontSize:12}}},itemStyle:{normal:{barBorderRadius:3,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(250, 114, 37, 0.49)"},{offset:.9,color:"rgba(250, 114, 37, 0.49)"},{offset:.25,color:"rgba(250, 114, 37, 1)"},{offset:0,color:"rgba(250, 114, 37,1)"}],!1)}}},{name:this.data[0].tl[1].name,type:"bar",data:this.data[0].sz,barWidth:10,barGap:.2,label:{normal:{show:!1,position:"top",textStyle:{color:"#a8aab0",fontStyle:"normal",fontFamily:"\u5FAE\u8F6F\u96C5\u9ED1",fontSize:12}}},itemStyle:{normal:{barBorderRadius:3,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:1,color:"rgba(253, 197, 0, 0.49)"},{offset:.9,color:"rgba(253, 197, 0, 0.49)"},{offset:.25,color:"rgba(253, 197, 0, 1)"},{offset:0,color:"rgba(253, 197, 0, 1)"}],!1)}}}]};a.setOption(o)}},watch:{}},d=function(){var a=this,o=a._self._c;return o("div",{staticStyle:{height:"250px",width:"500px"},attrs:{id:"chartzr"}})},c=[],f=Object.assign({render:d,staticRenderFns:c},n);this.vueInstConfig=f,this.__mergeVueInstData()}}}();return l.prototype._registerImg=function(s=""){let r={},e=Object.keys(r).map(n=>`--${n}: url('${r[n]}')`).join(";");if(e){let n=`.C29905d36b92fb {
            ${e}
          }`;window.conch.createCss(n,"cssVar47020ad16a9ee")}},l}(),{key:"C29905d36b92fb",width:500,height:250,options:`{\r
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
}`,script:{echarts_480js:"/lib/echarts_4.8.0.js"},img:{}},i,"vueSFC","2.0.0"))})(window.Vue);})();
