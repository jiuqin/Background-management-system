webpackJsonp([19],{"9h/G":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("Dd8w"),s=a.n(r),n=a("NYxO"),o=a("mtWM"),i=a.n(o),l={data:function(){return{users:[],size:3,nowpage:1,total:0}},methods:s()({},Object(n.b)(["userinfoAsyncAdd"]),{tzadd:function(){this.$router.push("/user/add")},edit:function(t){this.$router.push("/user/"+t)},del:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$axios.post(e.$api.userdeletUrl,{uid:t}).then(function(t){200==t.data.code&&(e.users=t.data.list,e.$message({type:"success",message:"删除成功!"}))})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},pagechange:function(t){var e=this;console.log(t),this.nowpage=t,this.getusers().then(function(t){200==t.data.code?e.users=t.data.list:e.$message({type:"error",message:t.data.msg})})},getusers:function(){return this.$axios.get(this.$api.userlistUrl,{params:{size:this.size,page:this.nowpage}})},getusercount:function(){return this.$axios.get(this.$api.usercountUrl)}}),mounted:function(){var t=this;i.a.all([this.getusers(),this.getusercount()]).then(i.a.spread(function(e,a){t.users=e.data.list,t.total=a.data.list[0].total}))}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("角色列表")])],1),t._v(" "),a("p",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.tzadd()}}},[t._v("添加")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.users,"row-key":"id",border:"","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{attrs:{prop:"id",label:"用户编号",sortable:"",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名",sortable:"",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"roleid",label:"所属角色",sortable:"",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{effect:"dark"}},[t._v("启用")]):a("el-tag",{attrs:{effect:"dark",type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.edit(e.row.uid)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.del(e.row.uid)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.size},on:{"current-change":t.pagechange}})],1)},staticRenderFns:[]},c=a("VU/8")(l,u,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=19.e6f8cf175337898ca968.js.map