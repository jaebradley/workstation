import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import {
  Provider,
} from 'react-redux';
import Todos from './todos';
import store from './data/store';

const App = () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
