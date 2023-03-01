import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './componnet/header/Header';
import Main from './componnet/main/Main';
import Details from './componnet/content/details/Details';

import { appRoutes } from './redux/actions/routes';
import { AppRoutes } from './routes';

const App = (props) => {
  const { appRoutes } = props;
  const routesArray = [
    {
      id: 1,
      path: '/',
      component: Main
    },
    {
      id: 2,
      path: '/:id/:name/details',
      component: Details
    }
  ];

  useEffect(() => {
    appRoutes(routesArray);
  }, [routesArray, appRoutes]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  appRoutes: PropTypes.func
};

export default connect(null, { appRoutes })(App);
