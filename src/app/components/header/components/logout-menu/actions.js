const LOAD_INFO_ERROR = 'LOAD_INFO_ERROR';
const LOAD_INFO_FULFILLED = 'LOAD_INFO_FULFILLED';
const LOAD_INFO_PENDING = 'LOAD_INFO_PENDING';

export const infoLoaded = info => ({
    type: LOAD_INFO_FULFILLED,
    payload: info
});

export const loadInfo = () => ({
    type: LOAD_INFO_PENDING
});

export const loadInfoError = error => ({
    type: LOAD_INFO_ERROR,
    payload: error.xhr.response ? error.xhr.response : error.message
});

export const constants = {
    LOAD_INFO_ERROR,
    LOAD_INFO_FULFILLED,
    LOAD_INFO_PENDING
};

export default {
    infoLoaded,
    loadInfo,
    loadInfoError
};
