import React from 'react';
import './App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './componnet/header/Header';
import Main from './componnet/main/Main';
import Details from './componnet/content/details/Details';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path="/" component={Main} />
            <Route path="/:id/:name/details" component={Details} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
