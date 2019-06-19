/*
 Copyright (c) 2016 Home Box Office, Inc. as an unpublished
 work. Neither this material nor any portion hereof may be copied
 or distributed without the express written consent of Home Box Office, Inc. *
 This material also contains proprietary and confidential information
 of Home Box Office, Inc. and its suppliers, and may not be used by or
 disclosed to any person, in whole or in part, without the prior written
 consent of Home Box Office, Inc.
 */

/* global describe, it, beforeEach */

import Chai from 'chai'; // You can use any testing library
import {expectEpic} from 'redux-observable-test-helpers';
import LogoutMenuEpics from '../epics';
import ActionTypes from '../actions/action-types';
import HamburgerActionTypes from '../../hamburger/actions/action-types';
import {api} from '../epics';

import {LOGOUT_MENU} from '../../../index';

// no-unused-vars fix for should
Chai.should();

/* eslint-disable camelcase, max-len, max-statements */
describe('Items Epics', () => {
    let call;

    beforeEach(() => {
        if (call && call.reset) {
            call.reset();
        }
    });

    describe('loadInfoEpic', () => {

        it('calls the correct API', () => {
            const response = [];

            expectEpic(LogoutMenuEpics, {
                expected: ['-a', {
                    a: {type: ActionTypes.LOAD_INFO_FULFILLED, payload: response}
                }],
                action: ['a', {
                    a: {type: ActionTypes.LOAD_INFO_PENDING}
                }],
                response: ['-a', {
                    a: response
                }],
                call: call,
                callArgs: [api.loadInfo]
            });
        });

        it('handles LOAD_INFO_ERROR', () => {
            const FOO_ERROR = 'Foo Error';
            const response = {message: FOO_ERROR};

            expectEpic(LogoutMenuEpics, {
                expected: ['-(a|)', {
                    a: {type: ActionTypes.LOAD_INFO_ERROR, payload: response}
                }],
                action: ['(a|)', {
                    a: {type: ActionTypes.LOAD_INFO_PENDING}
                }],
                response: ['-#', null, {xhr: {response}}],
                call: call,
                callArgs: [api.loadInfo]
            });
        });

        it('visibly notifies the user upon LOAD_INFO_ERROR', () => {
            const FOO_ERROR = 'Foo Error';
            const response = FOO_ERROR;
            /* eslint-disable quotes */
            const notification = {
                customStyles: {
                    "notification--error": "tools-notification tools-notification--error"
                },
                message: 'Loading Application Info failed: "' + response + '"',
                type: "ERROR"
            };
            /* eslint-enable quotes */

            expectEpic(LogoutMenuEpics, {
                expected: ['a', {
                    a: {type: 'NEW_NOTIFICATION', payload: notification}
                }],
                action: ['a', {
                    a: {type: ActionTypes.LOAD_INFO_ERROR, payload: response}
                }],
                response: ['-a', {
                    a: response
                }],
                replace: {key: 'id', value:'any'}
            });
        });

    });

    describe('logoutOpenEpic', () => {

        it('does not trigger loadInfo when de-activating the LOGOUT_MENU ', () => {
            expectEpic(LogoutMenuEpics, {
                expected: [[]],
                action: ['a', {
                    a: {type: HamburgerActionTypes.TOGGLE_HAMBURGER, payload: {target: LOGOUT_MENU, isActive: false}}
                }],
                response: ['-']
            });
        });

        it('does trigger loadInfo if the target is LOGOUT_MENU', () => {
            expectEpic(LogoutMenuEpics, {
                expected: ['a', {
                    a: {type: ActionTypes.LOAD_INFO_PENDING}
                }],
                action: ['a', {
                    a: {type: HamburgerActionTypes.TOGGLE_HAMBURGER, payload: {target: LOGOUT_MENU, isActive: true}}
                }],
                response: ['-']
            });
        });

        it('does not trigger loadInfo if the target is not LOGOUT_MENU', () => {
            expectEpic(LogoutMenuEpics, {
                expected: ['-'],
                action: ['a|', {
                    a: {type: HamburgerActionTypes.TOGGLE_HAMBURGER, payload: {target: null}}
                }],
                response: ['-']
            });
        });

    });

});

