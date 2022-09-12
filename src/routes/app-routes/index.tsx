import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IAppRoutesProps } from './app-routes.type';

export const AppRoutes: FC<IAppRoutesProps> = ({ appRoutes }) => {
  return (
    <Routes>
      {appRoutes.map((routesProps, key) => (
        <Route key={key} {...routesProps} />
      ))}
    </Routes>
  );
};
