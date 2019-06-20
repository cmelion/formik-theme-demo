import React from 'react';
import cx from 'classnames';

//TODO: now that this isn't just a Hamburger, maybe it should be renamed?
// Assumes target state is in sync (no shared state)
const Hamburger = ({children, hamburgerMenu, hamburgerMenuToggled, menuType, target, className}) => {
    const hamburgerStyles = [
        'rot',
        'htx',
        'htla',
        'htra'
    ];
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (target !== hamburgerMenu.target) {
            hamburgerMenuToggled(false, hamburgerMenu.target);
            hamburgerMenuToggled(true, target);
        } else {
            hamburgerMenuToggled(!hamburgerMenu.isActive, target);
        }
    };
    return (
        <span onClick={handleClick}
              className={
                  cx({
                      [className]: className,
                      hamburger: !menuType || menuType === 'grid' || hamburgerStyles.indexOf(menuType) > -1,
                      'hamburger--rot': menuType === 'rot',
                      'hamburger--htx': menuType === 'htx',
                      'hamburger--htla': menuType === 'htla' || !menuType, // default
                      'hamburger--htra': menuType === 'htra',
                      'tcon-grid tcon-grid--rearrange': menuType === 'grid',
                      circumflex: menuType === 'caret',
                      'text-only': menuType === 'text'
                  })
              }>
            <span className={
                cx({
                    'bar-item': hamburgerStyles.indexOf(menuType) > -1,
                    'tcon-grid__item': menuType === 'grid',
                    'circumflex-item': menuType === 'caret',
                    'text-button': menuType === 'text'
                })
            }>{children}</span>
        </span>
    );
};

// Hamburger.propTypes = {
//     hamburgerMenu: React.PropTypes.object.isRequired,
//     hamburgerMenuToggled: React.PropTypes.func.isRequired,
//     menuType: React.PropTypes.string,
//     className: React.PropTypes.string,
//     target: React.PropTypes.string.isRequired
// };

export default Hamburger;
