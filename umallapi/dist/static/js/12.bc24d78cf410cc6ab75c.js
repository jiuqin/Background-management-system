webpackJsonp([12],{SRbI:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),a=r.n(n),l=r("NYxO"),s={data:function(){return{memberlist:[]}},methods:a()({},Object(l.b)(["memberAsyncAdd"]),{tzadd:function(){this.$router.push("/member/add")},edit:function(t){this.$router.push("/member/"+t)},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.$api.menudeleteUrl,{id:t}).then(function(t){200==t.data.code&&(e.memberlist=t.data.list,e.$message({type:"success",message:"删除成功!"}))})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}),created:function(){var t=this;this.memberAsyncAdd().then(function(e){console.log(e.data.list,"123"),t.memberlist=e.data.list})}},i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),r("el-breadcrumb-item",[t._v("会员列表")])],1),t._v(" "),r("p",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.tzadd()}}},[t._v("添加")])],1),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.memberlist,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[r("el-table-column",{staticStyle:{"text-align":"center"},attrs:{prop:"id",label:"用户编号",sortable:"",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"nickname",label:"昵称",width:"180"}}),t._v(" "),r("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?r("el-tag",{attrs:{effect:"dark"}},[t._v("启用")]):r("el-tag",{attrs:{effect:"dark",type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return t.edit(e.row.uid)}}},[t._v("编辑")]),t._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(r){return t.del(e.row.uid)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var o=r("VU/8")(s,i,!1,function(t){r("bCSL")},null,null);e.default=o.exports},bCSL:function(t,e){}});
//# sourceMappingURL=12.bc24d78cf410cc6ab75c.js.map