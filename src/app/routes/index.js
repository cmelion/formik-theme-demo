import { connectRoutes } from 'redux-first-router';

export const routePaths = {
    DATATABLE: '/data-table',
    LOGIN: '/login',
    THEMELIST: '/',
};

export const { reducer } = connectRoutes(routePaths);


