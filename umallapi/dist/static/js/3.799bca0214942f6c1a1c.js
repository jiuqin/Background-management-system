webpackJsonp([3],{tCFq:function(e,t){},vP2J:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),o=i.n(a),s=i("mvHQ"),l=i.n(s),r=i("NYxO"),n={data:function(){return{dialogImageUrl:"",dialogVisible:!1,fileList:[],img:"",tip:"添加",info:{catename:"",pid:"",status:!1},cates:[],rules:{catename:[{required:!0,message:"请输入分类名称",trigger:"blur"}],pid:[{required:!0,message:"请选择上级菜单",trigger:"change"}]}}},methods:{handleRemove:function(e,t){},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},filechange:function(e){console.log(e),this.img=e.raw},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){alert("submit!"),console.log(t.info,"info");var i=JSON.parse(l()(t.info)),a=t.$api.cateaddUrl;t.$route.params.id&&(a=t.$api.cateeditUrl,i.id=Number(t.$route.params.id)),i.status=i.status?1:2;var o=new FormData;for(var s in i)o.append(s,i[s]);t.img&&o.append("img",t.img),console.log(o,"h"),console.log(i,"d"),t.$axios.post(a,o).then(function(e){200==e.data.code?t.$router.push("/category"):t.$message.error(e.data.msg),console.log(o,"form添加提交")})}})}},computed:o()({},Object(r.c)(["getcatelist"])),created:function(){var e=this;this.$axios.get(this.$api.catelistUrl).then(function(t){e.cates=t.data.list});var t=this.$route.params.id;t&&(this.tip="修改",this.$axios.get(this.$api.cateinfoUrl,{params:{id:t}}).then(function(t){console.log(t.data,"cateinfo"),e.info=t.data.list,console.log(e.info.img,"imginfo"),e.fileList=e.info.img?[{url:e.$api.baseUrl+e.info.img}]:[],e.info.status=1==e.info.status}))}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/category"}}},[e._v("商品分类列表")]),e._v(" "),i("el-breadcrumb-item",[e._v("商品分类"+e._s(e.tip))])],1),e._v(" "),i("p"),e._v(" "),i("el-form",{ref:"info",staticClass:"demo-info",attrs:{model:e.info,rules:e.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"上级菜单",prop:"pid"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.pid,callback:function(t){e.$set(e.info,"pid",t)},expression:"info.pid"}},e._l(e.getcatelist,function(e){return i("el-option",{key:e.id,attrs:{label:e.catename,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"分类名称",prop:"catename"}},[i("el-input",{staticClass:"resetW",model:{value:e.info.catename,callback:function(t){e.$set(e.info,"catename",t)},expression:"info.catename"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"图片"}},[i("el-upload",{attrs:{action:"#","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"auto-upload":!1,"on-change":e.filechange,"file-list":e.fileList}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-switch",{model:{value:e.info.status,callback:function(t){e.$set(e.info,"status",t)},expression:"info.status"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("info")}}},[e._v(e._s(e.tip))])],1)],1)],1)},staticRenderFns:[]};var u=i("VU/8")(n,c,!1,function(e){i("tCFq")},null,null);t.default=u.exports}});
//# sourceMappingURL=3.799bca0214942f6c1a1c.js.map