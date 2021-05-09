import loadable from '@loadable/component';
import { v1 as uuidV1 } from 'uuid';
import Icons from './components/helpers/Icons';

const LoginPage = loadable(() => import('./components/pages/Login'));
const HomePage = loadable(() => import('./components/pages/Home'));
const DashboardPage = loadable(() => import('./components/pages/home/Dashboard'));
const UsersPage = loadable(() => import('./components/pages/home/Users'));

export const publicRoutes = [
  { key: uuidV1(), path: '/login', component: LoginPage },
  { key: uuidV1(), path: '/', component: HomePage }
];

export const privateRoutes = [
  { key: uuidV1(), path: '/dashboard', component: DashboardPage, icon: Icons.DashboadIcon, title: 'Dashboard', sidebarMenu: true },
  { key: uuidV1(), path: '/users', component: UsersPage, icon: Icons.UsersIcon, title: 'Users', sidebarMenu: true }
];
