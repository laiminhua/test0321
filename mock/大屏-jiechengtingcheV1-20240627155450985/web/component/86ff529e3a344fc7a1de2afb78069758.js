(()=>{(function(f){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||(window.conch.createCss(".Ceecb6a0cac4cb{color:#fff}.Ceecb6a0cac4cb *{outline:none;box-sizing:border-box}.Ceecb6a0cac4cb p,.Ceecb6a0cac4cb dl,.Ceecb6a0cac4cb ol,.Ceecb6a0cac4cb ul{margin:0;padding:0}.Ceecb6a0cac4cb li{list-style:none}.Ceecb6a0cac4cb .container{width:100%;height:100%}","C1cf1515dc2abe"),window.conch.register("C86ff529e3a344fc7a1de2afb78069758",function(){const s=function(){return class extends window.conch.VueSFC{constructor(r,e){super(r,e),this.type="vueSFC";var n={name:"chart",data(){return{padding:[0,0,0,0],theme:{},data:[{ydata:[87.53,82.09,76.45,63.38,41.26,82.09],xdata:["\u4E2D\u539F\u8DEF\u7B2C\u4E00\u505C\u8F66\u573A","\u80DC\u5229\u8DEF\u7B2C\u4E8C\u505C\u8F66\u573A","\u4EBA\u6C11\u8DEF\u7B2C\u4E09\u505C\u8F66\u573A","\u6587\u660C\u8DEF\u7B2C\u56DB\u505C\u8F66\u573A","\u89E3\u653E\u8DEF\u7B2C\u4E94\u505C\u8F66\u573A"]}],opts:{}}},mounted(){this.init()},methods:{setData(t){this.data=t},init(){const t=document.getElementById("charttop"),a=echarts.init(t);let o=this.data[0].xdata,i=this.data[0].ydata,c=[];for(var d=0;d<i.length;d++)c.push(100);let g={title:{show:!1},tooltip:{show:!0,formatter:"{b}",position:"right"},grid:{borderWidth:0,top:"0%",left:"5%",right:"10%",bottom:"0%"},yAxis:[{inverse:!0,type:"category",axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,inside:!1},data:o}],xAxis:{type:"value",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1}},series:[{name:"",type:"bar",zlevel:2,barWidth:10,itemStyle:{normal:{barBorderRadius:[0,50,50,0],color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(46, 252, 208, 0.99)"},{offset:1,color:"rgba(46, 252, 208, 0.99)"}])}},data:i,label:{normal:{show:!0,position:[0,-20],rich:{name:{color:"#fff",fontSize:14}},formatter:function(l){let p="",{value:v,name:u}=l;return u.length>6&&(p=u.substring(0,10)),`{name|${p}}`}}}},{type:"bar",barGap:"-100%",barWidth:10,top:-8,itemStyle:{normal:{color:"rgba(255, 255, 255,0.2)",barBorderRadius:[0,50,50,0]}},label:{normal:{color:"#555",show:!0,position:"right",offset:[-70,-15],textStyle:{fontSize:14,fontWeight:"bold",color:""},rich:{value:{color:"rgba(52, 248, 209, 1)",fontSize:14}},formatter:function(l){return`{value| ${i[l.dataIndex]}%}`}}},data:c}]};a.setOption(g)}},watch:{}},h=function(){var a=this,o=a._self._c;return o("div",{staticStyle:{height:"250px",width:"550px"},attrs:{id:"charttop"}})},b=[],y=Object.assign({render:h,staticRenderFns:b},n);this.vueInstConfig=y,this.__mergeVueInstData()}}}();return s.prototype._registerImg=function(m=""){let r={},e=Object.keys(r).map(n=>`--${n}: url('${r[n]}')`).join(";");if(e){let n=`.Ceecb6a0cac4cb {
            ${e}
          }`;window.conch.createCss(n,"cssVar9f80e15f9204")}},s}(),{key:"Ceecb6a0cac4cb",width:500,height:250,options:`{\r
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
}`,script:{echarts_480js:"/lib/echarts_4.8.0.js"},img:{}},f,"vueSFC","2.0.0"))})(window.Vue);})();
