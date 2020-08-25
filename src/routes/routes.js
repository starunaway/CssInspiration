import Loadable from 'react-loadable';
import Loading from '@pages/loading';

const ROUTES = [
  {
    description: '首页',
    path: '/home',
    component: Loadable({
      loader: () => import('@pages/home'),
      loading: Loading,
    }),
    keywords: [],
  },
  {
    description: '打勾',
    path: '/successTick',
    component: Loadable({
      loader: () => import('@pages/successTick'),
      loading: Loading,
    }),
    keywords: ['打勾'],
  },
  {
    description: '聚光灯',
    path: '/spotLight',
    component: Loadable({
      loader: () => import('@pages/spotLight'),
      loading: Loading,
    }),
    keywords: ['聚光灯', 'spotlight'],
  },
  {
    description: 'Grid布局',
    path: '/grid',
    component: Loadable({
      loader: () => import('@pages/cssGrid'),
      loading: Loading,
    }),
    keywords: ['Grid布局', 'Grid'],
  },
  {
    description: '倒计时',
    path: '/countDown',
    component: Loadable({
      loader: () => import('@pages/countDown'),
      loading: Loading,
    }),
    keywords: ['倒计时'],
  },
  {
    description: '菜单',
    path: '/humburgerMenu',
    component: Loadable({
      loader: () => import('@pages/humburgerMenu'),
      loading: Loading,
    }),
    keywords: ['菜单', 'menu', 'Menu', 'MENU'],
  },
  {
    description: '翻牌子',
    path: '/flippingCard',
    component: Loadable({
      loader: () => import('@pages/flippingCard'),
      loading: Loading,
    }),
    keywords: ['翻转', 'cover', '卡片', 'card'],
  },
  {
    description: 'Input动态Label',
    path: '/input1',
    component: Loadable({
      loader: () => import('@pages/input1'),
      loading: Loading,
    }),
    keywords: ['Input', '输入', 'Form', 'input'],
  },
];

export default ROUTES;
