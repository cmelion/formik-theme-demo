import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import global styles before app is configured
import './styles.scss';
import "typeface-roboto";

import { App } from './app/index';
import configureStore from './app/store';


const store = configureStore();

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
