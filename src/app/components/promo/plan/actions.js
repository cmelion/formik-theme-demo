const UPDATE_PROMO = 'UPDATE_PROMO';

export const updatePromo = payload => ({type: UPDATE_PROMO, payload: payload});

export const constants = {
    UPDATE_PROMO,
};

export default {
    updatePromo,
};
