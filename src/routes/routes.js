import HumburgerMenu from '@pages/humburgerMenu';
import Home from '@pages/home';
import flippingCard from '@pages/flippingCard';
import Input1 from '@pages/input1';
import CountDown from '@pages/countDown';
import Grid from '@pages/cssGrid';
import SpotLight from '@pages/spotLight';

const ROUTES = [
  {
    description: '首页',
    path: '/home',
    component: Home,
    keywords: [],
  },
  {
    description: '聚光灯',
    path: '/spotLight',
    component: SpotLight,
    keywords: ['聚光灯', 'spotlight'],
  },
  {
    description: 'Grid布局',
    path: '/grid',
    component: Grid,
    keywords: ['Grid布局', 'Grid'],
  },
  {
    description: '倒计时',
    path: '/countDown',
    component: CountDown,
    keywords: ['倒计时'],
  },
  {
    description: '菜单',
    path: '/humburgerMenu',
    component: HumburgerMenu,
    keywords: ['菜单', 'menu', 'Menu', 'MENU'],
  },
  {
    description: '翻牌子',
    path: '/flippingCard',
    component: flippingCard,
    keywords: ['翻转', 'cover', '卡片', 'card'],
  },
  {
    description: 'Input动态Label',
    path: '/input1',
    component: Input1,
    keywords: ['Input', '输入', 'Form', 'input'],
  },
];

export default ROUTES;
