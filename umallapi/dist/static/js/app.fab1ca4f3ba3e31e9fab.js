webpackJsonp([24],{Dyg3:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App",data:function(){return{}},methods:{},components:{}},l,!1,function(e){n("Dyg3")},null,null).exports,s=n("NYxO"),r=n("//Fk"),a=n.n(r),c=n("mtWM"),u=n.n(c),d=n("/ocq");i.default.use(d.a);var m=[{path:"/",redirect:"/home",meta:{requireAuth:!0},component:function(){return n.e(10).then(n.bind(null,"42Hy"))},children:[{path:"/home",component:function(){return n.e(16).then(n.bind(null,"I2Tb"))},meta:{select:"/home"}},{path:"/menu",component:function(){return n.e(14).then(n.bind(null,"OPLk"))},meta:{select:"/menu"}},{path:"/menu/add",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"ydNh"))},meta:{select:"/menu"}},{path:"/menu/:id",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"ydNh"))},meta:{select:"/menu"}},{path:"/role",component:function(){return n.e(20).then(n.bind(null,"KNBx"))},meta:{select:"/role"}},{path:"/role/add",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Sig7"))},meta:{select:"/role"}},{path:"/role/:id",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"Sig7"))},meta:{select:"/role"}},{path:"/user",component:function(){return n.e(19).then(n.bind(null,"9h/G"))},meta:{select:"/user"}},{path:"/user/add",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"3+7e"))},meta:{select:"/user"}},{path:"/user/:id",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"3+7e"))},meta:{select:"/user"}},{path:"/category",component:function(){return n.e(21).then(n.bind(null,"BhqW"))},meta:{select:"/category"}},{path:"/category/add",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"vP2J"))},meta:{select:"/category"}},{path:"/category/:id",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"vP2J"))},meta:{select:"/category"}},{path:"/specs",component:function(){return n.e(17).then(n.bind(null,"ZtMV"))},meta:{select:"/specs"}},{path:"/specs/add",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"4dif"))},meta:{select:"/specs"}},{path:"/specs/:id",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"4dif"))},meta:{select:"/specs"}},{path:"/goods",component:function(){return n.e(13).then(n.bind(null,"sevd"))},meta:{select:"/goods"}},{path:"/goods/add",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"I2cX"))},meta:{select:"/goods"}},{path:"/goods/:id",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"I2cX"))},meta:{select:"/goods"}},{path:"/member",component:function(){return n.e(12).then(n.bind(null,"SRbI"))},meta:{select:"/member"}},{path:"/member/add",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"YtGA"))},meta:{select:"/member"}},{path:"/member/:id",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"YtGA"))},meta:{select:"/member"}},{path:"/banner",component:function(){return n.e(15).then(n.bind(null,"s/z0"))},meta:{select:"/banner"}},{path:"/banner/add",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"XzgE"))},meta:{select:"/banner"}},{path:"/banner/:id",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"XzgE"))},meta:{select:"/banner"}},{path:"/seckill",component:function(){return n.e(18).then(n.bind(null,"xLgw"))},meta:{select:"/seckill"}},{path:"/seckill/add",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"SBKC"))},meta:{select:"/seckill"}},{path:"/seckill/:id",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"SBKC"))},meta:{select:"/seckill"}}]},{path:"/login",component:function(){return n.e(11).then(n.bind(null,"xJsL"))}},{path:"*",component:function(){return n.e(22).then(n.bind(null,"tsbH"))}}],p=new d.a({routes:m,mode:"history"});p.beforeEach(function(e,t,n){"/login"!=e.path?(S.getters.getuserinfo||n("/login"),n()):n()});var f=p,h=n("zL8q"),g=n.n(h),b=u.a.create({baseURL:"",timeout:3e3});b.interceptors.request.use(function(e){var t=sessionStorage.getItem("token");return e.headers.Authorization=t||"",e},function(e){return a.a.reject(e)}),b.interceptors.response.use(function(e){return 403==e.data.code&&(h.Message.error(e.data.msg),f.push("/login")),e},function(e){return a.a.reject(e)});var U,y=b,A=n("bOdI"),k=n.n(A),P=(U={baseUrl:"http://localhost:3000",menuinfoUrl:"/api/menuinfo",menuaddUrl:"/api/menuadd",menulistUrl:"/api/menulist",menueditUrl:"/api/menuedit",menudeleteUrl:"/api/menudelete",roleinfoUrl:"/api/roleinfo",roleaddUrl:"/api/roleadd",rolelistUrl:"/api/rolelist",roleeditUrl:"/api/roleedit",roledeleteUrl:"/api/roledelete",userlistUrl:"/api/userlist",usercountUrl:"/api/usercount",userloginUrl:"/api/userlogin",useraddUrl:"/api/useradd",usereditUrl:"/api/useredit",userdeletUrl:"/api/userdelete",usrinfoUrl:"/api/userinfo",catelistUrl:"/api/catelist",cateinfoUrl:"/api/cateinfo",cateaddUrl:"/api/cateadd",cateeditUrl:"/api/cateedit",catedeletUrl:"/api/catedelete",specslistUrl:"/api/specslist",specsaddUrl:"/api/specsadd",specscountUrl:"/api/specscount"},k()(U,"specslistUrl","/api/specslist"),k()(U,"specsinfoUrl","/api/specsinfo"),k()(U,"specseditUrl","/api/specsedit"),k()(U,"specsdeleteUrl","/api/specsdelete"),k()(U,"goodslistUrl","/api/goodslist"),k()(U,"goodsaddUrl","/api/goodsadd"),k()(U,"goodslistUrl","/api/goodslist"),k()(U,"goodsinfoUrl","/api/goodsinfo"),k()(U,"goodseditUrl","/api/goodsedit"),k()(U,"goodsdeleteUrl","/api/goodsdelete"),k()(U,"goodscountUrl","/api/goodscount"),k()(U,"memberlistUrl","/api/memberlist"),k()(U,"memberinfoUrl","/api/memberinfo"),k()(U,"membereditUrl","/api/memberedit"),k()(U,"banneraddUrl","/api/banneradd"),k()(U,"bannerlistUrl","/api/bannerlist"),k()(U,"bannerinfoUrl","/api/bannerinfo"),k()(U,"bannereditUrl","/api/banneredit"),k()(U,"bannerdeleteUrl","/api/bannerdelete"),k()(U,"seckilladdUrl","/api/seckadd"),k()(U,"seckilllistUrl","/api/secklist"),k()(U,"seckillinfoUrl","/api/seckinfo"),k()(U,"seckilleditUrl","/api/seckedit"),k()(U,"seckilldeleteUrl","/api/seckdelete"),U),v={menuAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.menulistUrl,{params:{istree:1}}).then(function(n){console.log(n.data.list),e.commit("setmenulist",n.data.list),t(n)})})},roleAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.rolelistUrl).then(function(n){console.log(n.data.list),e.commit("setrolelist",n.data.list),t(n)})})},userinfoAsyncAdd:function(e,t){return new a.a(function(n,i){y.post(P.userloginUrl,t).then(function(t){console.log(t,"userinfores"),e.commit("setuserinfo",t.data.list),n(t)})})},cateAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.catelistUrl,{params:{istree:1}}).then(function(n){console.log(n.data.list),e.commit("setcatelist",n.data.list),t(n)})})},specsAsyncAdd:function(e,t){return new a.a(function(n,i){y.get(P.specslistUrl,t).then(function(t){console.log(t.data.list),e.commit("setspecslist",t.data.list),n(t)})})},goodsAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.goodslistUrl).then(function(n){console.log(n.data.list),e.commit("setgoodslist",n.data.list),t(n)})})},memberAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.memberlistUrl).then(function(n){console.log(n.data.list),e.commit("setmemberlist",n.data.list),t(n)})})},bannerAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.bannerlistUrl).then(function(n){console.log(n.data.list),e.commit("setbannerlist",n.data.list),t(n)})})},seckillAsyncAdd:function(e){return new a.a(function(t,n){y.get(P.seckilllistUrl).then(function(n){console.log(n.data.list,"限时秒杀"),e.commit("setseckilllist",n.data.list),t(n)})})},loginOutAsync:function(e){e.commit("loginout"),sessionStorage.removeItem("token")}},w=n("qVef");i.default.use(s.a);var S=new s.a.Store({state:{menulist:[],roles:[],userinfo:[],catelist:[],goodslist:[],memberlist:[],seckilllist:[]},mutations:{setmenulist:function(e,t){e.menulist=t},setrolelist:function(e,t){e.roles=t},setuserinfo:function(e,t){e.userinfo=t},setcatelist:function(e,t){e.catelist=t},setspecslist:function(e,t){e.specslist=t},setgoodslist:function(e,t){e.goodslist=t},setmemberlist:function(e,t){e.memberlist=t},setbannerlist:function(e,t){e.bannerlist=t},setseckilllist:function(e,t){e.seckilllist=t},loginout:function(e){e.userinfo=null}},actions:v,getters:{getmenulist:function(e){return e.menulist},getrolelist:function(e){return e.roles},getuserinfo:function(e){return e.userinfo},getcatelist:function(e){return e.catelist},getspecslist:function(e){return e.specslist}},plugins:[Object(w.a)()]}),x=(n("tvR6"),n("HSQo")),I=n.n(x),O=n("zMdo"),q=n.n(O),z={install:function(e){I()(e.prototype,{$chart:{get:function(){return{line1:function(e){this.chart=q.a.init(document.getElementById(e)),this.chart.clear(),this.chart.setOption({xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0}]})}}}}})}};i.default.prototype.$axios=y,i.default.prototype.$api=P,i.default.use(g.a),i.default.use(z),i.default.config.productionTip=!1,new i.default({el:"#app",router:f,store:S,components:{App:o},template:"<App/>"})},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.fab1ca4f3ba3e31e9fab.js.map