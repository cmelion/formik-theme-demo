import { connectRoutes } from 'redux-first-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer as rootReducer } from '../index';
import { routePaths } from '../routes';


// Root store
export default function configureStore() {
    const {
        middleware: routerMiddleware,
        enhancer: routerEnhancer,
        initialDispatch
    } = connectRoutes(routePaths, { initialDispatch: false });

    const store = createStore(
        rootReducer,
        compose(
            routerEnhancer,
            applyMiddleware(thunk, routerMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    initialDispatch();

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer', () => {
            const nextRootReducer = require('../reducer');

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
