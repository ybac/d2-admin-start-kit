import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([
  // { path: '/index', title: '首页', icon: 'home' },
  {
    title: '订单管理',
    icon: 'folder-o',
    children: [
      { path: '/order', title: '订单接收' },
      { path: '/luru', title: '手动录入' },
      { path: '/hist', title: '历史订单查询' },
      { path: '/jiexi', title: '订单解析' },
      { path: '/table', title: 'table' }
    ]
  },
  {
    title: '物料管理',
    icon: 'folder-o',
    children: [
      { path: '/yclgl', title: '原材料管理' },
      { path: '/scwlgl', title: '生产物料管理' },
      { path: '/slgl', title: '上料管理' }
    ]
  },
  { path: '/product', title: '生产管理', icon: 'folder-o' },
  { path: '/zhiliang', title: '质量控制', icon: 'folder-o' },
  { path: '/oee', title: 'OEE', icon: 'folder-o' },
  { path: '/scddgl', title: '生产调度管理', icon: 'folder-o' },
  { path: '/war', title: '报警记录', icon: 'folder-o' },
  { path: '/peifang', title: '配方管理', icon: 'folder-o' }
])

export const menuAside = supplementPath([
  // { path: '/index', title: '首页', icon: 'home' },
  {
    title: '订单管理',
    icon: 'folder-o',
    children: [
      { path: '/order', title: '订单接收' },
      { path: '/luru', title: '手动录入' },
      { path: '/hist', title: '历史订单查询' },
      { path: '/jiexi', title: '订单解析' },
      { path: '/table', title: 'table' }
    ]
  },
  {
    title: '物料管理',
    icon: 'folder-o',
    children: [
      { path: '/yclgl', title: '原材料管理' },
      { path: '/scwlgl', title: '生产物料管理' },
      { path: '/slgl', title: '上料管理' }
    ]
  },
  { path: '/product', title: '生产管理', icon: 'folder-o' },
  { path: '/zhiliang', title: '质量控制', icon: 'folder-o' },
  { path: '/oee', title: 'OEE', icon: 'folder-o' },
  { path: '/scddgl', title: '生产调度管理', icon: 'folder-o' },
  { path: '/war', title: '报警记录', icon: 'folder-o' },
  { path: '/peifang', title: '配方管理', icon: 'folder-o' }
])
