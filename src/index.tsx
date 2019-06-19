import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import './styles.scss';
import { App, reducer as rootReducer} from './app';
import { Provider } from 'react-redux'
// import registerServiceWorker from './registerServiceWorker'

import "typeface-roboto";

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)));

const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

/* istanbul ignore next */
if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept('./app', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    })
}

// registerServiceWorker()
