(()=>{(function(c){(()=>{if(!window.conch)return console.info("\u8BF7\u5148\u52A0\u8F7Dcomp\u5305"),!0})()||(window.conch.createCss(".C096a0626e0be3 *{outline:none;box-sizing:border-box}.C096a0626e0be3 p,.C096a0626e0be3 dl,.C096a0626e0be3 ol,.C096a0626e0be3 ul{margin:0;padding:0}.C096a0626e0be3 li{list-style:none}.C096a0626e0be3 .bgContainer{width:100%;height:100%}","C007a37ce480aa"),window.conch.register("C5a6b9e2276ad45cea2df2d1f6451572a",function(){let r="/img/9fd8f25da78c4461806ed1ab93ae7454.png";const a=function(){return class extends window.conch.Default{constructor(n,i){super(n,i),this.opts={image:"",config:{repeat:"contain",radius:0,opacity:100}},this.data=null,this.useResizeScale=!1}init(n){this.opts={...this.opts,...n},this.render()}render(n,i,e){const o={"no-repeat":"100% 100%",contain:"contain",auto:"auto"};return n("div",{class:"bgContainer",style:{...(()=>e.image?{"border-radius":`${e.config.radius}px`,"background-repeat":"no-repeat","background-position":"center","background-image":`url(${e.image})`,"background-size":o[e.config.repeat],opacity:e.config.opacity/100}:{"background-repeat":"no-repeat","background-image":`url(${r})`,"background-position":"center"})()},on:{click:this.clickEventHandler.bind(this)}})}clickEventHandler(n){this.trigger("click")}setData(n={}){this.data=n,this.trigger("dataChange",n),this.render()}}}();return a.prototype._registerImg=function(t){r=(t||"")+"/img/9fd8f25da78c4461806ed1ab93ae7454.png"},a}(),{key:"C096a0626e0be3",width:400,height:250,options:`{\r
  "actions": [\r
    {\r
      "label": "\u70B9\u51FB",\r
      "identified": "click"\r
    }\r
  ],\r
  "blueprint": {\r
    "name": "comp.name",\r
    "group": "UI",\r
    "inputs": [\r
      {\r
        "name": "\u663E\u793A",\r
        "type": "exec"\r
      },\r
      {\r
        "name": "\u9690\u85CF",\r
        "type": "exec"\r
      },\r
      {\r
        "name": "\u6570\u636E",\r
        "type": "any"\r
      }\r
    ],\r
    "outputs": []\r
  },\r
  "propertyPanel": {\r
    "image": {\r
      "name": "\u56FE\u7247",\r
      "type": "media",\r
      "mode": "image",\r
      "description": "\u70B9\u51FB\u66F4\u6539\u6309\u94AE\u53EF\u6253\u5F00\u8D44\u6E90\u7BA1\u7406\u5668\u4E0A\u4F20/\u9009\u62E9\u56FE\u7247",\r
      "default": ""\r
    },\r
    "config": {\r
      "name": "\u56FE\u7247\u8BBE\u7F6E",\r
      "type": "suite",\r
      "children": {\r
        "repeat": {\r
          "name": "\u5C55\u793A\u65B9\u5F0F",\r
          "type": "select",\r
          "options": [\r
            {\r
              "label": "\u62C9\u4F38",\r
              "value": "no-repeat"\r
            },\r
            {\r
              "label": "\u81EA\u9002\u5E94",\r
              "value": "contain"\r
            },\r
            {\r
              "label": "\u5B9E\u9645\u5927\u5C0F",\r
              "value": "auto"\r
            }\r
          ],\r
          "default": "no-repeat",\r
          "col": 24\r
        },\r
        "radius": {\r
          "type": "number",\r
          "name": "\u5706\u89D2",\r
          "default": 0,\r
          "col": 12\r
        },\r
        "opacity": {\r
          "type": "number",\r
          "name": "\u900F\u660E\u5EA6",\r
          "default": 100,\r
          "col": 12\r
        }\r
      }\r
    }\r
  }\r
}`,img:{Ib7bc9ecc4c3e4e38a0b81872896484ab:"/img/9fd8f25da78c4461806ed1ab93ae7454.png"}},c,"default","2.0.0"))})(window.Vue);})();
