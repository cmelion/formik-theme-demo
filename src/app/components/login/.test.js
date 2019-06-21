/*
 Copyright (c) 2016 Home Box Office, Inc. as an unpublished
 work. Neither this material nor any portion hereof may be copied
 or distributed without the express written consent of Home Box Office, Inc. *
 This material also contains proprietary and confidential information
 of Home Box Office, Inc. and its suppliers, and may not be used by or
 disclosed to any person, in whole or in part, without the prior written
 consent of Home Box Office, Inc.
 */

/* global describe, it, beforeEach, afterEach */
import React from 'react';
import {Login} from './';
import sinon from 'sinon';
import {shallow/*, mount*/} from 'enzyme';
import {expect} from 'chai';
//import global from '../../../../test/helpers/globals';

/* eslint-disable no-unused-expressions, max-statements, no-console, camelcase, max-nested-callbacks, no-undef */
describe('Login container', () => {
    let wrapper,
        instance,
        props = {};

    beforeEach(() => {
        props = {
            listenForMessages: sinon.spy(),
            login: sinon.spy(),
            loginAndRegister: sinon.spy(),
            loggingIn: sinon.spy(),
            items: [],
            info: {}
        };
    });
    afterEach(() => {
        props.login.reset();
        props.listenForMessages.reset();
    });

    describe('Component Lifecycle methods', () => {
        describe('componentDidMount', () => {

            beforeEach(() => {
                wrapper = shallow(<Login {...props} />);
                instance = wrapper.instance();
            });

            it('should start listening for messages', () => {
                instance.componentDidMount();
                expect(props.listenForMessages).to.have.been.called;
            });

        });

    });

    describe('render form', () => {

        beforeEach(() => {
            wrapper = shallow(<Login {...props} />);
        });

        it('should render the common login in an iframe', () => {
            const input = wrapper.find('iframe');
            expect(input).to.have.length(1);
        });

    });

    // Actions
    require('./actions/.test');

    // Epics
    require('./epics/spec');

    // Reducers
    require('./reducers/.test');
});
