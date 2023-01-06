import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
