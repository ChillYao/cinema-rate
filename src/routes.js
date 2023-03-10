import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from './componnet/main/Main';
import Details from './componnet/content/details/Details';
import ErrorPage from './componnet/error/ErrorPage';

export const AppRoutes = (props) => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Main {...props} />
    },
    {
      path: '/:id/:name/details',
      element: <Details {...props} />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]);
  return elements;
};
