import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import { App } from './app';
import configureStore from './app/store';
import './styles.scss';
import "typeface-roboto";

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
