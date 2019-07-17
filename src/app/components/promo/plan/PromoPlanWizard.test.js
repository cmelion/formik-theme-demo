import React from "react";

import { mount } from "enzyme";
import wait from "waait";
import configureStore from 'redux-mock-store';
import * as ReactRedux from 'react-redux';
import { RequestProvider } from 'react-request-hook';

import PromoPlanWizard from "./PromoPlanWizard";
import { formTestCases } from "./form.test.cases";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("As someone who wants to create a Promotion", () => {
    // TODO: Fix needed for - Warning: An update to Formik inside a test was not wrapped in act(...).
    // https://github.com/jaredpalmer/formik/issues/1543
    // for now just disable warnings in this test.
    let originalError = console.error;
    beforeAll(() => { console.error = jest.fn(); });
    afterAll(() => { console.error = originalError; });

    let ui;
    const initialState = { counter: { count: 0 } };
    const store = mockStore(initialState);
    // const dispatchSpy = jest.spyOn(store, 'dispatch');
    const axios = global.adapter.axiosInstance;

    afterEach(() => {
        axios.mockClear();
        jest.clearAllMocks();
        store.clearActions();
        global.adapter.reset();
    });

    const getTestCaseByField= (field) => formTestCases.filter(testCase => {
        return testCase.field === field;
    });

    const simulateChange = (field, target, value) => {
        field.simulate("change", {
            target: {
                name: target,
                value: value
            }
        });

        //simulate the blur
        field.simulate("blur");
    };

    const initializeFormTests = function(testCase, value) {
        ui = mount(<ReactRedux.Provider store={store}><RequestProvider value={axios}>
            <PromoPlanWizard />
        </RequestProvider></ReactRedux.Provider>);

        // Move to the correct section
        for (let i = 1; i <= testCase.step; i++) {
            const nextButton = ui.find('[aria-label="Next"]').hostNodes();
            expect(nextButton.length).toBe(1);
            nextButton.simulate("click");
        }

        // Set any

        const field = ui.find(`#${testCase.field}`).find(testCase.type);
        //insert a wrong value
        simulateChange(field, testCase.field, value);
    };

    describe("When I fill in the Promo Form", () => {
        formTestCases.forEach(function(testCase) {
            describe(testCase.desc, () => {
                beforeEach(() => {
                    initializeFormTests(testCase,testCase.badValue);
                });

                it(`Then the ${testCase.field} error is displayed`, async () => {
                    await wait(0);
                    ui.update();
                    const errors = ui.find(testCase.errorText);
                    expect(errors.length).toBeGreaterThan(0);
                });

                it(`And the bad ${testCase.field} value is displayed`, () => {
                    const field = ui.find(`#${testCase.field}`).find(testCase.type);
                    expect(field.prop("value")).toContain(testCase.badValue);
                });

                it("And the buttons are in the correct state", async () => {
                    await wait(0);
                    ui.update();
                    const button = ui.find("button");
                    expect(button.length).toBe(testCase.buttons.length);
                });

                describe(`When the ${testCase.field} is corrected`, () => {
                    it(`The ${testCase.field} error should be cleared`, async () => {
                        initializeFormTests(testCase, testCase.goodValue);
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
