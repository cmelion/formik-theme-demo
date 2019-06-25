import { connectRoutes } from 'redux-first-router';

export const routePaths = {
    THEMELIST: '/',
    LOGIN: '/login'
};

export const { reducer } = connectRoutes(routePaths);


