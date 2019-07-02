import { connectRoutes } from 'redux-first-router';

export const routePaths = {
    PROMOTABLE: '/promotions',
    LOGIN: '/login',
    THEMELIST: '/',
};

export const { reducer } = connectRoutes(routePaths);


