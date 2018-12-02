import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BaseRouter from './router/BaseRouter';
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(rootReducer,
    applyMiddleware(
        thunk // lets us dispatch() functions
      ));


ReactDOM.render(<BaseRouter store={store} />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
