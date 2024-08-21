(()=>{(function(Vue){const _checkedConch=()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0};_checkedConch()||(window.conch.createCss(".C77d779427445f{color:#fff}.C77d779427445f *{outline:none;box-sizing:border-box}.C77d779427445f p,.C77d779427445f dl,.C77d779427445f ol,.C77d779427445f ul{margin:0;padding:0}.C77d779427445f li{list-style:none}.C77d779427445f .container{width:100%;height:100%}","Cccac4968b0508"),window.conch.register("C16fac8b906dc407dbf21bb6600e5e8a3",function(){let I891895207a404cdfa01d9324dd6d75ed="/img/d613cc90278c4237aa77145e7b2dc266.png",I7f803af4d47944b8a415870aceb76f7b="/img/658c4938eb864a598a8a73bd4123e8ae.png";const _comp=function(){return class extends window.conch.VueSFC{constructor(dom,config){super(dom,config),this.type="vueSFC";var _vueSFCExport={name:"chart",data(){return{padding:[0,0,0,0],theme:{},img1:I7f803af4d47944b8a415870aceb76f7b,img2:I891895207a404cdfa01d9324dd6d75ed,data:[{name:"\u652F\u4ED8\u5B9D",value:60},{name:"\u5FAE\u4FE1",value:30},{name:"\u5176\u4ED6",value:10}],opts:{}}},mounted(){this.init()},methods:{setData(r){this.data=r},init(){const chartContainer=document.getElementById("chartzf"),chart=echarts.init(chartContainer);let data=this.data,arrName=getArrayValue(data,"name"),arrValue=getArrayValue(data,"value"),sumValue=eval(arrValue.join("+")),objData=array2obj(data,"name"),optionData=getData(data);function getArrayValue(r,n){var n=n||"value",a=[];return r&&r.forEach(function(t){a.push(t[n])}),a}function array2obj(r,e){let n={};for(var a=0;a<r.length;a++)n[r[a][e]]=r[a];return n}function getData(r){let e={series:[],yAxis:[]};for(let n=0;n<r.length;n++)e.series.push({name:"",type:"pie",clockWise:!1,hoverAnimation:!1,radius:[73-n*15+"%",68-n*15+"%"],center:["30%","55%"],label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:[{value:r[n].value,name:r[n].name},{value:sumValue-r[n].value,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]}),e.series.push({name:"",type:"pie",silent:!0,z:1,clockWise:!1,hoverAnimation:!1,radius:[73-n*15+"%",68-n*15+"%"],center:["30%","55%"],label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:[{value:7.5,itemStyle:{color:"rgb(3, 31, 62)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1},{value:2.5,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]}),e.yAxis.push((r[n].value/sumValue*100).toFixed(2)+"%");return e}let option={legend:{show:!0,icon:"none",top:"center",left:"50%",data:arrName,width:50,padding:[0,5],itemGap:25,formatter:function(r){return"{title|"+r+"}   {value|"+objData[r].value+"}  {title|%}"},textStyle:{rich:{title:{fontSize:16,lineHeight:15,color:"#fff"},value:{fontSize:18,lineHeight:20,color:"#fff"}}}},graphic:{elements:[{type:"image",style:{image:this.img1,width:50,height:50},left:"25%",top:"43%"}]},tooltip:{show:!0,trigger:"item",formatter:"{a}{b}:{d}%"},color:["rgba(0, 144, 255, 1)","rgba(90, 245, 202, 1)","rgba(255, 255, 0, 1)"],grid:{top:"0%",bottom:"5%",left:"30%",containLabel:!1},yAxis:[{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,inside:!0,textStyle:{color:"#fff",fontSize:16},show:!1},data:optionData.yAxis}],xAxis:[{show:!1}],series:optionData.series};chart.setOption(option)}},watch:{}},render=function r(){var e=this,n=e._self._c;return n("div",{staticStyle:{height:"250px",width:"500px"},attrs:{id:"chartzf"}})},staticRenderFns=[],vueInstConfig=Object.assign({render,staticRenderFns},_vueSFCExport);this.vueInstConfig=vueInstConfig,this.__mergeVueInstData()}}}();return _comp.prototype._registerImg=function(r=""){let e={};I891895207a404cdfa01d9324dd6d75ed=r+"/img/d613cc90278c4237aa77145e7b2dc266.png",e.I891895207a404cdfa01d9324dd6d75ed=I891895207a404cdfa01d9324dd6d75ed,I7f803af4d47944b8a415870aceb76f7b=r+"/img/658c4938eb864a598a8a73bd4123e8ae.png",e.I7f803af4d47944b8a415870aceb76f7b=I7f803af4d47944b8a415870aceb76f7b;let n=Object.keys(e).map(a=>`--${a}: url('${e[a]}')`).join(";");if(n){let a=`.C77d779427445f {
            ${n}
          }`;window.conch.createCss(a,"cssVara15a09b57f1d7")}},_comp}(),{key:"C77d779427445f",width:500,height:250,options:`{\r
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
}`,img:{I891895207a404cdfa01d9324dd6d75ed:"/img/d613cc90278c4237aa77145e7b2dc266.png",I7f803af4d47944b8a415870aceb76f7b:"/img/658c4938eb864a598a8a73bd4123e8ae.png"},script:{echarts_480js:"/lib/echarts_4.8.0.js"}},Vue,"vueSFC","2.0.0"))})(window.Vue);})();
