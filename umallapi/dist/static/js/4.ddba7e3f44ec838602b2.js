webpackJsonp([4],{"3ZGB":function(e,t){},Sig7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Dd8w"),a=r.n(s),i=r("mvHQ"),n=r.n(i),o=r("NYxO"),l={data:function(){return{tip:"添加",info:{rolename:"",status:!0,menus:""},menus:[],defaultProps:{children:"children",label:"title"},defaultkeys:[],rules:{rolename:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:20,message:"角色名称长度不符合",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var r=JSON.parse(n()(t.info)),s=t.$api.roleaddUrl;t.$route.params.id&&(s=t.$api.roleeditUrl,r.id=Number(t.$route.params.id)),r.status=r.status?1:2,r.menus=t.$refs.tree.getCheckedKeys()?t.$refs.tree.getCheckedKeys().join(","):"",t.$axios.post(s,r).then(function(e){200==e.data.code?t.$router.push("/role"):t.$message.error(e.data.msg)})}})}},computed:a()({},Object(o.c)(["getmenulist"])),created:function(){var e=this;this.menus=this.getmenulist;var t=this.$route.params.id;t&&(this.tip="修改",this.$axios.get(this.$api.roleinfoUrl,{params:{id:t}}).then(function(t){e.info=t.data.list,e.info.status=1==e.info.status,e.defaultkeys=e.info.menus?e.info.menus.split(","):[]}))}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),r("el-breadcrumb-item",{attrs:{to:{path:"/role"}}},[e._v("角色列表")]),e._v(" "),r("el-breadcrumb-item",[e._v("角色"+e._s(e.tip))])],1),e._v(" "),r("p"),e._v(" "),r("el-form",{ref:"info",staticClass:"demo-info",attrs:{model:e.info,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"rolename"}},[r("el-input",{staticClass:"resetW",model:{value:e.info.rolename,callback:function(t){e.$set(e.info,"rolename",t)},expression:"info.rolename"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"角色权限"}},[r("el-tree",{ref:"tree",attrs:{data:e.menus,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defaultkeys,props:e.defaultProps}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-switch",{model:{value:e.info.status,callback:function(t){e.$set(e.info,"status",t)},expression:"info.status"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("info")}}},[e._v(e._s(e.tip))])],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(l,u,!1,function(e){r("3ZGB")},null,null);t.default=m.exports}});
//# sourceMappingURL=4.ddba7e3f44ec838602b2.js.map