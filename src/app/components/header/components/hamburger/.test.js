/* global describe, it, beforeEach */
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {Hamburger} from './index';

/* eslint-disable no-unused-expressions */
describe('CSS Hamburger Menu Suite', () => {
    const baseProps = {
        children: 'toggle menu',
        hamburgerMenu: {},
        hamburgerMenuToggled: sinon.spy(),
        target: 'foo'
    };

    beforeEach(() => {
        baseProps.hamburgerMenuToggled.reset();
    });

    describe('Button Styles', () => {
        it('should create a Hamburger to left-arrow (htla) button by default', ()=> {
            const props = {
                ...baseProps
            };
            const wrapper = shallow(<Hamburger {...props} />);
            expect(wrapper.text()).to.contain('toggle menu');

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('hamburger--htla')).to.be.true;
        });

        it('should create a Rotating hamburger icon (rot) button', ()=> {
            const props = {
                ...baseProps,
                menuType: 'rot'
            };
            const wrapper = shallow(<Hamburger {...props} />);
            expect(wrapper.text()).to.contain('toggle menu');

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('hamburger--rot')).to.be.true;
        });

        it('should create a Hamburger to "x" (htx) button', ()=> {
            const props = {
                ...baseProps,
                menuType: 'htx'
            };
            const wrapper = shallow(<Hamburger {...props} />);
            expect(wrapper.text()).to.contain('toggle menu');

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('hamburger--htx')).to.be.true;
        });

        it('should create a Hamburger to left-arrow (htla) button', ()=> {
            const props = {
                ...baseProps,
                menuType: 'htla'
            };
            const wrapper = shallow(<Hamburger {...props} />);
            expect(wrapper.text()).to.contain('toggle menu');

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('hamburger--htla')).to.be.true;
        });

        it('should create a Hamburger to left-arrow (htra) button', ()=> {
            const props = {
                ...baseProps,
                menuType: 'htra'
            };
            const wrapper = shallow(<Hamburger {...props} />);
            expect(wrapper.text()).to.contain('toggle menu');

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('hamburger--htra')).to.be.true;
        });

    });

    describe('Toggle Button State', () => {
        it('should set hamburgerMenu isActive state to true', ()=> {
            const mockEvent = {
                stopPropagation: sinon.spy(),
                preventDefault: sinon.spy()
            };

            const props = {
                ...baseProps
            };
            const wrapper = shallow(<Hamburger {...props} />);

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('is-active')).to.be.false;

            button.simulate('click', mockEvent);
            expect(props.hamburgerMenuToggled.calledTwice).to.be.true;
            expect(props.hamburgerMenuToggled.calledWith(
                !props.hamburgerMenu.isActive,
                props.target
            )).to.be.true;
        });

        it('should set hamburgerMenu isActive state to false', ()=> {
            const mockEvent = {
                stopPropagation: sinon.spy(),
                preventDefault: sinon.spy()
            };

            const props = {
                ...baseProps,
                hamburgerMenu: {target: baseProps.target, isActive: true},
            };
            const wrapper = shallow(<Hamburger {...props} />);

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('is-active')).to.be.true;

            button.simulate('click', mockEvent);
            expect(props.hamburgerMenuToggled.calledOnce).to.be.true;
            expect(props.hamburgerMenuToggled.calledWith(
                !props.hamburgerMenu.isActive,
                props.target
            )).to.be.true;
        });

        it('should not add the "is-active" to the when target does not match', ()=> {
            const props = {
                ...baseProps,
                hamburgerMenu: {
                    isActive: true,
                    target: baseProps.target
                }
            };
            const wrapper = shallow(<Hamburger {...props} />);

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('is-active')).to.be.true;
        });

        it('should add the "is-active" to the button when hamburgerMenu.isActive is true and target matches', ()=> {
            const props = {
                ...baseProps,
                hamburgerMenu: {
                    isActive: true,
                    target: 'bar'
                }
            };
            const wrapper = shallow(<Hamburger {...props} />);

            let button = wrapper.find('.hamburger');
            expect(button.hasClass('is-active')).to.be.false;
        });
    });

    describe('Actions', () => {
        require('./actions/spec');
    });

    describe('Reducers', () => {
        require('./reducers/.test');
    });

});
