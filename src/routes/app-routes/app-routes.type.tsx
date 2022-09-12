import { ReactElement } from 'react';

export type RouteObj = {
  path: string;
  exact?: boolean;
  element: ReactElement;
};

export interface IAppRoutesProps {
  appRoutes: RouteObj[];
}
