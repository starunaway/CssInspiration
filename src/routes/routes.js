import HumburgerMenu from '@pages/humburgerMenu';
import Home from '@pages/home';

const ROUTES = [
  {
    name: '首页',
    path: '/home',
    component: Home,
  },
  {
    name: '剪贴板复制',
    path: '/humburgerMenu',
    component: HumburgerMenu,
  },
];

export default ROUTES;
