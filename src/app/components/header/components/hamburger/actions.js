const TOGGLE_HAMBURGER = 'TOGGLE_HAMBURGER';

export const toggleHamburgerMenu = (isActive, target) => ({
    type: TOGGLE_HAMBURGER,
    payload: {isActive: isActive, target: target}
});

export const constants = {
    TOGGLE_HAMBURGER
};

export default {
   toggleHamburgerMenu: toggleHamburgerMenu
};
