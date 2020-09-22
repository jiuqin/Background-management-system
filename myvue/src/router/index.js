import Vue from 'vue'
//1、引入路由
import VueRouter from 'vue-router'

// 引入store
import store from '../store'

//2、安装路由插件
Vue.use(VueRouter)
//3、路由配置

//路由重定向
//路由懒加载
var routes = [{
    path: '/',
    redirect: '/home',
    meta: {
      requireAuth: true
    },
    component: () => import('../components/Index'),
    children: [{
        path: '/home', //home
        component: () => import('../components/pages/Home'),
        meta: {
          select: '/home'
        } //设置左侧栏的index 
      }, {
        path: '/menu', //菜单管理
        component: () => import('../components/pages/menu/Menu'),
        meta: {
          select: '/menu'
        }
      }, {
        path: '/menu/add',
        component: () => import('../components/pages/menu/Info'),
        meta: {
          select: '/menu'
        }
      }, {
        path: '/menu/:id',
        component: () => import('../components/pages/menu/Info'),
        meta: {
          select: '/menu'
        }
      }, {
        path: '/role', //角色管理
        component: () => import('../components/pages/role/Role'),
        meta: {
          select: '/role'
        }
      }, {
        path: '/role/add',
        component: () => import('../components/pages/role/Info'),
        meta: {
          select: '/role'
        }
      }, {
        path: '/role/:id',
        component: () => import('../components/pages/role/Info'),
        meta: {
          select: '/role'
        }
      }, {
        path: '/user', //管理员管理
        component: () => import('../components/pages/user/User'),
        meta: {
          select: '/user'
        }
      }, {
        path: '/user/add',
        component: () => import('../components/pages/user/Info'),
        meta: {
          select: '/user'
        }
      }, {
        path: '/user/:id',
        component: () => import('../components/pages/user/Info'),
        meta: {
          select: '/user'
        }
      },
      {
        path: '/category', //商品分类
        component: () => import('../components/pages/category/Category'),
        meta: {
          select: '/category'
        }
      },
      {
        path: '/category/add',
        component: () => import('../components/pages/category/Info'),
        meta: {
          select: '/category'
        }
      },
      {
        path: '/category/:id',
        component: () => import('../components/pages/category/Info'),
        meta: {
          select: '/category'
        }
      }, {
        path: '/specs', //商品规格
        component: () => import('../components/pages/specs/Specs'),
        meta: {
          select: '/specs'
        }
      }, {
        path: '/specs/add',
        component: () => import('../components/pages/specs/Info'),
        meta: {
          select: '/specs'
        }
      }, {
        path: '/specs/:id',
        component: () => import('../components/pages/specs/Info'),
        meta: {
          select: '/specs'
        }
      }, {
        path: '/goods', //商品管理
        component: () => import('../components/pages/goods/Goods'),
        meta: {
          select: '/goods'
        }
      }, {
        path: '/goods/add',
        component: () => import('../components/pages/goods/Info'),
        meta: {
          select: '/goods'
        }
      }, {
        path: '/goods/:id',
        component: () => import('../components/pages/goods/Info'),
        meta: {
          select: '/goods'
        }
      },
      {
        path: '/member', //会员管理
        component: () => import('../components/pages/member/Member'),
        meta: {
          select: '/member'
        }
      }, {
        path: '/member/add',
        component: () => import('../components/pages/member/Info'),
        meta: {
          select: '/member'
        }
      }, {
        path: '/member/:id',
        component: () => import('../components/pages/member/Info'),
        meta: {
          select: '/member'
        }

      }, {
        path: '/banner', //轮播图管理
        component: () => import('../components/pages/banner/Banner'),
        meta: {
          select: '/banner'
        }
      },
      {
        path: '/banner/add',
        component: () => import('../components/pages/banner/Info'),
        meta: {
          select: '/banner'
        }
      },
      {
        path: '/banner/:id',
        component: () => import('../components/pages/banner/Info'),
        meta: {
          select: '/banner'
        }
      }, {
        path: '/seckill', //秒杀活动
        component: () => import('../components/pages/seckill/Seckill'),
        meta: {
          select: '/seckill'
        }
      },
      {
        path: '/seckill/add',
        component: () => import('../components/pages/seckill/Info'),
        meta: {
          select: '/seckill'
        }
      },
      {
        path: '/seckill/:id',
        component: () => import('../components/pages/seckill/Info'),
        meta: {
          select: '/seckill'
        }
      }
    ]

  },
  {
    path: '/login',
    component: () => import('../components/Login')

  },
  {
    path: '*',
    component: () => import('../components/Notfound')
  }
]
//4、实例化路由对象
var router = new VueRouter({
  routes: routes,
  mode: 'history'
})
// 全局守卫--守卫的是所有的路由--进入每一个路由之前执行
router.beforeEach((to, from, next) => {
  //  如果进入登录页面，直接进入就可以
  if (to.path == '/login') {
    next();
    return;
  };
  // 判断有没有用户信息

  if (!store.getters.getuserinfo) {
    next('/login')
  };

  next()
})

//5、将router实例对象导出
export default router
