webpackJsonp([5],{"4dif":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),i=s.n(a),r=(s("NYxO"),{data:function(){return{tip:"添加",specsAttrs:[{value:""}],info:{specsname:"",attrs:"",status:!1},dynamicValidateForm:{domains:[{value:""}]},rules:{specsname:[{required:!0,message:"请输入菜单名称",trigger:"blur"}]}}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(t){alert("submit!");var s=JSON.parse(i()(e.info)),a=e.$api.specsaddUrl;e.$route.params.id&&(a=e.$api.specseditUrl,s.id=e.$route.params.id),s.status=s.status?1:2;var r=[];e.specsAttrs.forEach(function(t){r.push(t.value)}),s.attrs=r?r.join(","):"",e.$axios.post(a,s).then(function(t){console.log(t.data),200==t.data.code?e.$router.push("/specs"):e.$message.error(t.data.msg),console.log(s,"提交")})}})},removeDomain:function(t){var e=this.specsAttrs.indexOf(t);-1!==e&&this.info.domains.splice(e,1)},addDomain:function(){this.specsAttrs.length<=5&&this.specsAttrs.push({value:"",key:Date.now()})}},created:function(){var t=this,e=this.$route.params.id;e&&(this.tip="修改",this.$axios.get(this.$api.specsinfoUrl,{params:{id:e}}).then(function(e){t.info.status=1==t.info.status,t.info=e.data.list[0],t.info.attrs.map(function(e,s){0==s?t.specsAttrs[0].value=e:t.specsAttrs.push({value:e})})}))}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-breadcrumb",{attrs:{separator:">"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),t._v(" "),s("el-breadcrumb-item",[s("a",{attrs:{href:"/specs"}},[t._v("商品规格列表")])]),t._v(" "),s("el-breadcrumb-item",[t._v("商品规格"+t._s(t.tip))])],1),t._v(" "),s("p"),t._v(" "),s("el-form",{ref:"info",staticClass:"demo-info",attrs:{model:t.info,rules:t.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"规格名称",prop:"specsname"}},[s("el-input",{staticClass:"resetW",model:{value:t.info.specsname,callback:function(e){t.$set(t.info,"specsname",e)},expression:"info.specsname"}})],1),t._v(" "),t._l(t.specsAttrs,function(e,a){return s("el-form-item",{key:e.key,attrs:{label:"规格属性"}},[s("el-input",{staticClass:"resetW",model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"domain.value"}}),t._v(" "),0==a?s("el-button",{attrs:{type:"primary"},on:{click:t.addDomain}},[t._v("新增域名")]):s("el-button",{attrs:{type:"danger"},on:{click:function(s){return s.preventDefault(),t.removeDomain(e)}}},[t._v("删除")])],1)}),t._v(" "),s("el-form-item",{attrs:{label:"状态",prop:"status"}},[s("el-switch",{model:{value:t.info.status,callback:function(e){t.$set(t.info,"status",e)},expression:"info.status"}})],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("info")}}},[t._v(t._s(t.tip))])],1)],2)],1)},staticRenderFns:[]};var o=s("VU/8")(r,n,!1,function(t){s("eyz+")},null,null);e.default=o.exports},"eyz+":function(t,e){}});
//# sourceMappingURL=5.efc415eee384de36b2a6.js.map