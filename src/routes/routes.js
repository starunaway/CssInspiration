import Loadable from 'react-loadable';
import React from 'react';

const ROUTES = [
  {
    description: '首页',
    path: '/home',
    component: Loadable({
      loader: () => import('@pages/home'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: [],
  },
  {
    description: '打勾',
    path: '/successTick',
    component: Loadable({
      loader: () => import('@pages/successTick'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['打勾'],
  },
  {
    description: '聚光灯',
    path: '/spotLight',
    component: Loadable({
      loader: () => import('@pages/spotLight'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['聚光灯', 'spotlight'],
  },
  {
    description: 'Grid布局',
    path: '/grid',
    component: Loadable({
      loader: () => import('@pages/cssGrid'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['Grid布局', 'Grid'],
  },
  {
    description: '倒计时',
    path: '/countDown',
    component: Loadable({
      loader: () => import('@pages/countDown'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['倒计时'],
  },
  {
    description: '菜单',
    path: '/humburgerMenu',
    component: Loadable({
      loader: () => import('@pages/humburgerMenu'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['菜单', 'menu', 'Menu', 'MENU'],
  },
  {
    description: '翻牌子',
    path: '/flippingCard',
    component: Loadable({
      loader: () => import('@pages/flippingCard'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['翻转', 'cover', '卡片', 'card'],
  },
  {
    description: 'Input动态Label',
    path: '/input1',
    component: Loadable({
      loader: () => import('@pages/input1'),
      loading: () => <span>Loading...</span>,
    }),
    keywords: ['Input', '输入', 'Form', 'input'],
  },
];

export default ROUTES;
