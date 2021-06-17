import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk))); 
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

//for installing material-ui in react 17
//npm install --save --legacy-peer-deps @material-ui/core