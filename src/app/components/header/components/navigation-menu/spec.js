/*
 Copyright (c) 2016 Home Box Office, Inc. as an unpublished
 work. Neither this material nor any portion hereof may be copied
 or distributed without the express written consent of Home Box Office, Inc. *
 This material also contains proprietary and confidential information
 of Home Box Office, Inc. and its suppliers, and may not be used by or
 disclosed to any person, in whole or in part, without the prior written
 consent of Home Box Office, Inc.
 */

/* global describe, it */
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {NavigationMenu} from './index';

/* eslint-disable no-unused-expressions */
describe('Left Navigation Menu Suite', () => {
    const baseProps = {
        info: {},
        hamburgerMenu: {},
        hamburgerMenuToggled: sinon.spy(),
        target: 'foo'
    };

    describe('Toggle Navigation Menu State', () => {
        it('should set the isActive state to true', () => {
            const props = {
                ...baseProps
            };
            const wrapper = shallow(<NavigationMenu {...props} />);

            let menuItem = wrapper.find('.hamburger-navigation-menu .is-navigation');

            menuItem.first().simulate('click');
            expect(baseProps.hamburgerMenuToggled.called).to.be.true;
            expect(baseProps.hamburgerMenuToggled.calledWith(
                !baseProps.hamburgerMenu.isActive,
                baseProps.target
            )).to.be.true;

        });

        it('should not add the "is-active" to the when target does not match', () => {
            const props = {
                ...baseProps,
                hamburgerMenu: {
                    isActive: true,
                    target: baseProps.target
                }
            };
            const wrapper = shallow(<NavigationMenu {...props} />);

            let button = wrapper.find('.hamburger-navigation-menu');
            expect(button.hasClass('is-active')).to.be.true;
        });

    });

});
