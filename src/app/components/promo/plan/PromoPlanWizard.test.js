import React from "react";

import { mount } from "enzyme";
import wait from "waait";
import configureStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';
import { RequestProvider } from 'react-request-hook';

import PromoPlanWizard from "./PromoPlanWizard";

const middlewares = [];
const mockStore = configureStore(middlewares);

let ui;
describe("As someone who wants to Register", () => {
    // TODO: Fix needed for - Warning: An update to Formik inside a test was not wrapped in act(...).
    // https://github.com/jaredpalmer/formik/issues/1543
    // for now just disable warnings in this test.
    let originalError = console.error;
    beforeAll(() => {
        console.error = jest.fn();
    });
    afterAll(() => {
        console.error = originalError;
    });

    let wrapper;
    const initialState = { counter: { count: 0 } };
    const store = mockStore(initialState);
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const axios = global.adapter.axiosInstance;

    afterEach(() => {
        axios.mockClear();
        jest.clearAllMocks();
        store.clearActions();
        global.adapter.reset();
    });


    const initializeTest = function(testCase, value) {
        ui = mount(<ReactRedux.Provider store={store}><RequestProvider value={axios}><PromoPlanWizard /></RequestProvider></ReactRedux.Provider>);

        const field = ui.find(`#${testCase.field}`).find("input");

        //insert a wrong email
        field.simulate("change", {
            target: {
                name: testCase.field,
                value: value
            }
        });

        //simulate the blur
        field.simulate("blur");
    };
    const testCases = [
        {
            desc: "And I leave the Plan Name field blank",
            field: "promoPlanName",
            badValue: "",
            goodValue: "beta_promo",
            errorText: "#promoPlanName-helper-text",
            buttonText: "Next",
            buttonCount: 1,
            submitButton: false
        },
    ];
    describe("When I fill in the Promo Form", () => {
        testCases.forEach(function(testCase) {
            describe(testCase.desc, () => {
                beforeEach(() => {
                    initializeTest(testCase,testCase.badValue);
                });

                it(`Then the ${testCase.field} error is displayed`, async () => {
                    await wait(0);
                    ui.update();
                    const errors = ui.find(testCase.errorText);
                    expect(errors.length).toBeGreaterThan(0);
                });

                it(`And the bad ${testCase.field} value is displayed`, () => {
                    const field = ui.find(`#${testCase.field}`).find("input");
                    expect(field.prop("value")).toContain(testCase.badValue);
                });

                it("And the buttons are in the correct state", async () => {
                    await wait(0);
                    ui.update();
                    const button = ui.find("button");
                    expect(button.length).toBe(testCase.buttonCount);
                    expect(button.text()).toBe(testCase.buttonText);
                });

                describe(`When the ${testCase.field} is corrected`, () => {
                    it(`The ${testCase.field} error should be cleared`, async () => {
                        initializeTest(testCase, testCase.goodValue);
                        await wait(0);
                        ui.update();
                        const errors = ui.find(`p[children="${testCase.errorText}"]`);
                        expect(errors.length).toBe(0);
                    });
                });
            });
        });
    });

});
