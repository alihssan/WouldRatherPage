import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {createStore} from 'redux'
import reducer from './reducers/Combine_Reducer'
import middleware from './Middleware/combineMid'
import {Provider} from 'react-redux'

const store=createStore(reducer,middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


