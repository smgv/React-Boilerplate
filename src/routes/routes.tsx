import { RouteObj } from './app-routes/app-routes.type';

import ProtectedRoute from './protected-route';
import Counter from '../components/eg-counter';

export const APP_ROUTES: RouteObj[] = [
  {
    path: '/',
    exact: true,
    element: <ProtectedRoute component={Counter} />,
  },
];
