import { connectRoutes } from 'redux-first-router';

export const routePaths = {
    PROMOTABLE: '/promo-table',
    LOGIN: '/login',
    THEMELIST: '/',
};

export const { reducer } = connectRoutes(routePaths);


