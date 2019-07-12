const CACHE_PROMOS = 'CACHE_PROMOS';

export const cachePromos = payload => ({type: "CACHE_PROMOS", payload: {data: payload}});

export const constants = {
    CACHE_PROMOS,
};

export default {
    cachePromos,
};
