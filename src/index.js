import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import App from './containers/App'
import thunk from 'redux-thunk'
import reducers from './reducers'
const middleware = [ thunk ];
    
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// let store = createStore(
//     reducers,
//     applyMiddleware(...middleware)
// )
const composeEnhancers =
	"development" === process.env.NODE_ENV
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;
// Use redux-thunk as a redux middleware
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, {}, enhancer);


render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)
