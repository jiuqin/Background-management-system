webpackJsonp([7],{XzgE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),o=i.n(a),s=i("mvHQ"),r=i.n(s),l=i("NYxO"),n={data:function(){return{dialogImageUrl:"",dialogVisible:!1,fileList:[],img:"",tip:"添加",info:{title:"",status:!1},cates:[],rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},methods:{handleRemove:function(t,e){},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},filechange:function(t){console.log(t),this.img=t.raw},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(t){alert("submit!"),console.log(e.info,"info");var i=JSON.parse(r()(e.info)),a=e.$api.banneraddUrl;e.$route.params.id&&(a=e.$api.bannereditUrl,i.id=Number(e.$route.params.id)),i.status=i.status?1:2;var o=new FormData;for(var s in i)o.append(s,i[s]);e.img&&o.append("img",e.img),console.log(o,"h"),console.log(i,"d"),e.$axios.post(a,o).then(function(t){200==t.data.code?e.$router.push("/banner"):e.$message.error(t.data.msg),console.log(o,"form添加提交")})}})}},computed:o()({},Object(l.c)(["getcatelist"])),created:function(){var t=this;this.$axios.get(this.$api.catelistUrl).then(function(e){t.cates=e.data.list});var e=this.$route.params.id;e&&(this.tip="修改",this.$axios.get(this.$api.bannerinfoUrl,{params:{id:e}}).then(function(e){console.log(e.data,"bannerinfo"),t.info=e.data.list,console.log(t.info.img,"imginfo"),t.fileList=t.info.img?[{url:t.$api.baseUrl+t.info.img}]:[],t.info.status=1==t.info.status}))}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",{attrs:{to:{path:"/banner"}}},[t._v("轮播图列表")]),t._v(" "),i("el-breadcrumb-item",[t._v("轮播图"+t._s(t.tip))])],1),t._v(" "),i("p"),t._v(" "),i("el-form",{ref:"info",staticClass:"demo-info",attrs:{model:t.info,rules:t.rules,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{staticClass:"resetW",model:{value:t.info.title,callback:function(e){t.$set(t.info,"title",e)},expression:"info.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"图片"}},[i("el-upload",{attrs:{action:"#","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"auto-upload":!1,"on-change":t.filechange,"file-list":t.fileList}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),t._v(" "),i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-switch",{model:{value:t.info.status,callback:function(e){t.$set(t.info,"status",e)},expression:"info.status"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("info")}}},[t._v(t._s(t.tip))])],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(n,u,!1,function(t){i("aOFN")},null,null);e.default=c.exports},aOFN:function(t,e){}});
//# sourceMappingURL=7.f26a6b2bd61e5fc7ed5c.js.map