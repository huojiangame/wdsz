(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-transfer-transfer"],{"0cb0":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"content-login"},[s("v-uni-view",{staticClass:"input-group"},[s("v-uni-view",{staticClass:"input-row border"},[s("v-uni-text",{staticClass:"title-lang"},[t._v("原辅助ID：")]),s("m-input",{staticClass:"m-input",attrs:{type:"text",disabled:!1,clearable:!0,focus:!0,placeholder:"请输入辅助续费ID"},model:{value:t.transferInfo.oldUserId,callback:function(e){t.$set(t.transferInfo,"oldUserId",e)},expression:"transferInfo.oldUserId"}})],1),s("v-uni-view",{staticClass:"input-row border"},[s("v-uni-text",{staticClass:"title-lang"},[t._v("原辅助密码：")]),s("m-input",{attrs:{type:"password",displayable:!0,placeholder:"请输入登录辅助的密码"},model:{value:t.transferInfo.oldPassword,callback:function(e){t.$set(t.transferInfo,"oldPassword",e)},expression:"transferInfo.oldPassword"}})],1),s("v-uni-view",{staticClass:"input-row border"},[s("v-uni-text",{staticClass:"title-lang"},[t._v("原区服ID：")]),s("m-input",{staticClass:"m-input",attrs:{type:"text",disabled:!1,clearable:!0,placeholder:"请输入原区服ID,如2,17"},model:{value:t.transferInfo.oldServerId,callback:function(e){t.$set(t.transferInfo,"oldServerId",e)},expression:"transferInfo.oldServerId"}})],1),s("v-uni-view",{staticClass:"input-row border"},[s("v-uni-text",{staticClass:"title-lang"},[t._v("新辅助ID：")]),s("m-input",{staticClass:"m-input",attrs:{type:"text",disabled:!1,clearable:!0,placeholder:"请输入辅助续费ID"},model:{value:t.transferInfo.newUserId,callback:function(e){t.$set(t.transferInfo,"newUserId",e)},expression:"transferInfo.newUserId"}})],1),s("v-uni-view",{staticClass:"input-row border"},[s("v-uni-text",{staticClass:"title-lang"},[t._v("新区服ID：")]),s("m-input",{staticClass:"m-input",attrs:{type:"text",disabled:!1,clearable:!0,placeholder:"请输入新区服ID,如5,21"},model:{value:t.transferInfo.newServerId,callback:function(e){t.$set(t.transferInfo,"newServerId",e)},expression:"transferInfo.newServerId"}})],1)],1),s("v-uni-view",{staticClass:"btn-center"},[s("v-uni-button",{staticClass:"primary",attrs:{type:"primary",size:"mini",disabled:t.disabledBtn},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1),t.transferSuccess?s("v-uni-view",{staticClass:"result-wrap content"},[s("v-uni-view",{staticClass:"success-title"},[t._v(t._s(t.result.message))]),s("v-uni-view",{staticClass:"item-wrap"},[t._v("原帐号："+t._s(t.result.oldAccount))]),s("v-uni-view",{staticClass:"item-wrap"},[t._v("新帐号："+t._s(t.result.newAccount))])],1):t._e(),s("v-uni-view",[s("v-uni-view",{staticClass:"content"},[s("v-uni-view",{staticClass:"sub-title"},[t._v("自助转卡规则:")]),t._l(t.transfer.rules,(function(e,n){return s("v-uni-view",{key:n,staticClass:"item-wrap"},[t._v(t._s(e))])}))],2)],1)],1)},a=[]},"32c5":function(t,e,s){var n=s("48ec");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=s("4f06").default;a("dd4ab492",n,!0,{sourceMap:!1,shadowMode:!1})},3441:function(t,e,s){"use strict";s("7a82");var n=s("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("d401"),s("d3b7"),s("25f0");var a=n(s("a199")),r=n(s("3980")),i=n(s("c2db")),o=s("098a"),l={components:{mInput:r.default},data:function(){return{transfer:i.default,disabledBtn:!1,transferSuccess:!1,result:"",transferInfo:{oldUserId:"",oldPassword:"",oldServerId:"",newUserId:"",newServerId:""}}},onLoad:function(){},methods:{handleSubmit:function(){var t=this;if(this.transferInfo.oldUserId&&this.transferInfo.oldPassword&&this.transferInfo.oldServerId&&this.transferInfo.newUserId&&this.transferInfo.newServerId){this.disabledBtn=!0;var e={from_id:this.transferInfo.oldUserId,from_server:this.transferInfo.oldServerId,from_pwd_md5:a.default.MD5(this.transferInfo.oldPassword).toString(),to_id:this.transferInfo.newUserId,to_server:this.transferInfo.newServerId};(0,o.transferTime)(e).then((function(e){t.disabledBtn=!1;var s=e.code,n=e.message;200===s?(t.$toast("转移成功"),t.result=e,t.transferSuccess=!0):uni.showModal({title:"转移失败",content:n})})).catch((function(){t.disabledBtn=!1}))}else this.$toast("输入信息不全")}}};e.default=l},3493:function(t,e,s){"use strict";s.r(e);var n=s("0cb0"),a=s("87d8");for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);s("e2d9");var i=s("f0c5"),o=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,"5d89f45f",null,!1,n["a"],void 0);e["default"]=o.exports},"48ec":function(t,e,s){var n=s("24fb");e=n(!1),e.push([t.i,".title-lang[data-v-5d89f45f]{width:30%;height:%?50?%;min-height:%?50?%;padding:%?15?% 0;padding-left:%?30?%;line-height:%?50?%}.content[data-v-5d89f45f]{padding:%?10?% %?30?%;-webkit-user-select:text;user-select:text}.sub-title[data-v-5d89f45f]{font-weight:600}.item-wrap[data-v-5d89f45f]{color:#969799;padding-bottom:%?20?%}.btn-center[data-v-5d89f45f]{display:flex;align-items:center;justify-content:center;margin:%?20?% 0}.result-wrap[data-v-5d89f45f]{margin-bottom:%?40?%}.success-title[data-v-5d89f45f]{color:#0b9422;\r\n\t/* font-size: 36px; */font-weight:600}",""]),t.exports=e},"87d8":function(t,e,s){"use strict";s.r(e);var n=s("3441"),a=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c2db:function(t){t.exports=JSON.parse('{"rules":["1、转卡时需要输入原账号的辅助续费ID+区服（辅助上看到的区服ID，比如579， 60015，70012之类的）+登录辅助的密码，以及新账号的辅助续费ID+区服。","2、自助转卡是指将A角色（原账号）中的剩余时间转移到B角色（新账号），方便玩家老区换新区。","3、目前只能普通卡转普通卡，VIP卡转VIP卡，跨类型转卡暂时不支持。","4、转卡会损失5%的剩余时间，剩余时间不足40天的按2天计算，此举为了防止用户两个号之间频繁来回转卡。","5、原账号和新账号都有剩余时间的，是将原账号剩余时间的95%加到新账号上，不是互换。","6、永久卡不支持自助转移，联系客服转移。","7、永久卡减少5%的剩余时间无意义，因此永久卡转卡需要根据原账号已使用的辅助时间按照月卡数收取手续费。不足1个月按月卡收费，超过1个月不足2个月按2个月卡收费，以此类推。VIP永久卡参考VIP月卡收取手续费。","8、如果原账号是永久卡，新账号还有剩余时间，一定要先将新账号的剩余时间转移到其他号，否则会导致新账号剩余时间作废，切记。"]}')},e2d9:function(t,e,s){"use strict";var n=s("32c5"),a=s.n(n);a.a}}]);