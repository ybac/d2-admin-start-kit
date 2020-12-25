import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'page1',
        name: 'page1',
        meta: {
          title: '页面 1',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          title: '页面 2',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'page3',
        name: 'page3',
        meta: {
          title: '页面 3',
          auth: true
        },
        component: _import('demo/page3')
      },
      {
        path: 'order',
        name: 'order',
        meta: {
          title: '订单管理',
          auth: true
        },
        component: _import('demo/order/pag')
      },
      {
        path: 'luru',
        name: 'luru',
        meta: {
          title: '手动录入',
          auth: true
        },
        component: _import('demo/order/luru')
      },
      {
        path: 'hist',
        name: 'hist',
        meta: {
          title: '历史订单查询',
          auth: true
        },
        component: _import('demo/order/hist')
      },
      {
        path: 'jiexi',
        name: 'jiexi',
        meta: {
          title: '订单解析',
          auth: true
        },
        component: _import('demo/order/jiexi')
      },
      {
        path: 'yclgl',
        name: 'yclgl',
        meta: {
          title: '原材料管理',
          auth: true
        },
        component: _import('demo/wuliao/yclgl')
      },
      {
        path: 'scwlgl',
        name: 'scwlgl',
        meta: {
          title: '生产物料管理',
          auth: true
        },
        component: _import('demo/wuliao/scwlgl')
      },
      {
        path: 'slgl',
        name: 'slgl',
        meta: {
          title: '上料管理',
          auth: true
        },
        component: _import('demo/wuliao/slgl')
      },
      {
        path: 'product',
        name: 'product',
        meta: {
          title: '生产管理',
          auth: true
        },
        component: _import('demo/product')
      },
      {
        path: 'zhiliang',
        name: 'zhiliang',
        meta: {
          title: '质量控制',
          auth: true
        },
        component: _import('demo/zhiliang')
      },
      {
        path: 'oee',
        name: 'oee',
        meta: {
          title: 'OEE',
          auth: true
        },
        component: _import('demo/oee')
      },
      {
        path: 'scddgl',
        name: 'scddgl',
        meta: {
          title: '生产调度管理',
          auth: true
        },
        component: _import('demo/scddgl')
      },
      {
        path: 'war',
        name: 'war',
        meta: {
          title: '报警记录',
          auth: true
        },
        component: _import('demo/war')
      },
      {
        path: 'peifang',
        name: 'peifang',
        meta: {
          title: '配方管理',
          auth: true
        },
        component: _import('demo/feifang')
      },
      {
        path: 'table',
        name: 'table',
        meta: {
          title: 'table',
          auth: true
        },
        component: _import('demo/order/table')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
