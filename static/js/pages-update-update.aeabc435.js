(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-update-update"],{"0277":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("098a"),i=n("4899"),u={data:function(){return{wdszSaleChannel:"",update:"",showUpdate:!1}},onLoad:function(){this.wdszSaleChannel=(0,i.getChannel)(),this.handleGetUpdate()},onPullDownRefresh:function(){console.log("refresh"),this.showUpdate=!0,setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},computed:{hasNewVersion:function(){var e=this.utils.version,t=this.$global.wdszVersion;return e>t}},methods:{handleGetUpdate:function(){var e=this;(0,a.getUpdate)({login_type:30}).then((function(t){e.update=t})).catch((function(e){console.log(e)}))},downloadImage:function(){uni.showLoading({title:"下载中"});var e=this;uni.downloadFile({url:this.update.pkgUrl,success:function(t){console.log("downloadFile success, res is",t),e.imageSrc=t.tempFilePath,uni.hideLoading()},fail:function(e){console.log("downloadFile fail, err is:",e)}})},hideButton:function(){this.showUpdate=!1},handleUpdate:function(){}}};t.default=u},"24d3":function(e,t,n){"use strict";n.r(t);var a=n("0277"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},"2cfd":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"summary-wrap"},[e.showUpdate?n("v-uni-view",[n("v-uni-button",{attrs:{type:"primary",plain:"true",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleUpdate.apply(void 0,arguments)}}},[e._v("更新")]),n("v-uni-text",{staticStyle:{width:"10upx",display:"inline-block"}}),n("v-uni-button",{attrs:{type:"primary",plain:"true",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideButton.apply(void 0,arguments)}}},[e._v("收起")])],1):e._e(),n("v-uni-view",[e._v("当前版本为V"+e._s(e.$global.wdszVersionName))]),n("v-uni-view",{staticStyle:{"margin-top":"10px",color:"#1989fa"}},["test"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"1"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl1}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"2"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl2}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"3"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl3}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"4"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl4}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"5"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl5}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"7"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl7}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"8"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl8}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e(),"31"===e.wdszSaleChannel?n("a",{attrs:{href:e.update.pkgUrl31}},[n("v-uni-text",[e._v("点击下载辅助APP")])],1):e._e()]),n("v-uni-view",[e._v("更新说明：")]),n("v-uni-view",e._l(e.update.updateDescription,(function(t,a){return n("v-uni-view",{key:a},[n("v-uni-view",[e._v(e._s(t.title))]),e._l(t.content,(function(t,a){return n("v-uni-view",{key:a,staticClass:"summary-content"},[e._v(e._s(t))])}))],2)})),1)],1)],1)},i=[]},"579b":function(e,t,n){"use strict";var a=n("ada1"),i=n.n(a);i.a},"74a4":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".summary-wrap[data-v-1ec1eb0e]{padding:0 %?15?%}.summary-content[data-v-1ec1eb0e]{color:#969799}.highlight[data-v-1ec1eb0e]{color:red}",""]),e.exports=t},"7a9d":function(e,t,n){"use strict";n.r(t);var a=n("2cfd"),i=n("24d3");for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("579b");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"1ec1eb0e",null,!1,a["a"],void 0);t["default"]=s.exports},ada1:function(e,t,n){var a=n("74a4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("568f6a90",a,!0,{sourceMap:!1,shadowMode:!1})}}]);