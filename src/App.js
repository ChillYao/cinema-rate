import React from 'react';
import './App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import Header from './componnet/header/Header';
import Main from './componnet/main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="App">
        <h1>Setup React Redux</h1>
        <Main />
      </div>
    </Provider>
  );
};

export default App;
