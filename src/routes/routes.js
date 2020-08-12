import HumburgerMenu from '@pages/humburgerMenu';
import Home from '@pages/home';
import flippingCard from '@pages/flippingCard';
const ROUTES = [
  {
    description: '首页',
    path: '/home',
    component: Home,
    keywords: [],
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
];

export default ROUTES;
