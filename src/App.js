import React from 'react';
import './App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './componnet/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
