import React from "react";
import { Form } from "./form";
import { mount } from "enzyme";
import wait from "waait";
import { Formik } from "formik";
import {validationSchema} from "./schema";

let ui, button;
describe("As someone who wants to Register", () => {
    // TODO: Fix needed for - Warning: An update to Formik inside a test was not wrapped in act(...).
    // https://github.com/jaredpalmer/formik/issues/1543
    // for now just disable warnings in this test.
    beforeAll(() => {
        console.error = jest.fn();
    });

    afterAll(() => {
        console.error = originalError;
    });
    const mockSubmitFn = jest.fn();
    const defaultValues = {
        name: "",
        email: "",
        confirmPassword: "",
        password: ""
    };

    const initializeTest = function(testCase, value) {
        ui = mount(<Formik
            render={props => <Form {...props} />}
            initialValues={defaultValues}
            validationSchema={validationSchema}
            onSubmit={mockSubmitFn}
        />);

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
            desc: "And I leave the name field blank",
            field: "name",
            badValue: "",
            goodValue: "foo",
            errorText: "Name is required",
        },
        {
            desc: "Or I enter an invalid email address",
            field: "email",
            badValue: "foo",
            goodValue: "foo@bar.com",
            errorText: "Enter a valid email",
        },
        {
            desc: "Or I enter a password that is too short",
            field: "password",
            badValue: "foo",
            goodValue: "12345678",
            errorText: "Password must contain at least 8 characters",
        },
    ];

    describe("When I fill in the Registration Form", () => {
        testCases.forEach(function(testCase) {
            describe(testCase.desc, () => {
                beforeEach(() => {
                    initializeTest(testCase,testCase.badValue);
                });

                it(`Then the ${testCase.field} error is displayed`, async () => {
                    await wait(0);
                    ui.update();
                    // TODO: Move this into a DSL/PageObject
                    const errors = ui.find(`p[children="${testCase.errorText}"]`);
                    expect(errors.length).toBeGreaterThan(0);
                });

                it(`And the bad ${testCase.field} value is displayed`, () => {
                    // TODO: Move this into a DSL/PageObject
                    const field = ui.find(`#${testCase.field}`).find("input");
                    expect(field.prop("value")).toContain(testCase.badValue);
                });

                it("And the submit button remains disabled", async () => {
                    await wait(0);
                    ui.update();
                    // TODO: Move this into a DSL/PageObject
                    const button = ui.find("button");
                    expect(button.length).toBe(1);
                    expect(button.props().disabled).toBe(true);
                });

                describe(`When the ${testCase.field} is corrected`, () => {
                    it(`Then the ${testCase.field} error should be cleared`, async () => {
                        initializeTest(testCase, testCase.goodValue);
                        await wait(0);
                        ui.update();
                        // TODO: Move this into a DSL/PageObject
                        const errors = ui.find(`p[children="${testCase.errorText}"]`);
                        expect(errors.length).toBe(0);
                    });
                });
            });
        });
    });

    describe("When password and confirmation don't match ", () => {
        it("Then the password error is displayed", async () => {
            ui = mount(<Formik
                render={props => <Form {...props} />}
                initialValues={defaultValues}
                validationSchema={validationSchema}
                onSubmit={mockSubmitFn}
            />);

            const passwordField = ui.find("#password").find("input");
            const confirmPassword = ui.find("#confirmPassword").find("input");

            //insert a valid password
            passwordField.simulate("change", {
                target: {
                    name: "password",
                    value: "fooBarBaz1"
                }
            });

            //insert a mismatched confirm password
            confirmPassword.simulate("change", {
                target: {
                    name: "confirmPassword",
                    value: "foo"
                }
            });

            //simulate the blur
            confirmPassword.simulate("blur");
            await wait(0);
            ui.update();
            const errors = ui.find('p[children="Password does not match"]');
            expect(errors.length).toBeGreaterThan(0);
        });

    });

    describe("When all fields have been entered correctly", () => {
        it("Then the submit button is enabled", async () => {
            const validValues = {
                name: testCases[0].badValue,
                email: testCases[1].goodValue,
                confirmPassword: testCases[2].goodValue,
                password: testCases[2].goodValue
            };

            ui = mount(<Formik
                render={props => <Form {...props} />}
                initialValues={validValues}
                validationSchema={validationSchema}
                onSubmit={mockSubmitFn}
            />);
            button = ui.find("button");
            expect(button.props().disabled).toBe(true);

            // We need to set touched to trigger validation
            const field = ui.find("#name").find("input");
            field.simulate("change", {
                target: {
                    name: "name",
                    value: testCases[0].goodValue
                }
            });
            //simulate the blur
            field.simulate("blur");
            await wait(0);
            ui.update();
            button = ui.find("button");
            expect(button.props().disabled).toBe(false);
        });
        describe("When the form is submitted", () => {
            it("Then submitValues is called", async () => {
                // TODO: Move this into a DSL/PageObject
                ui.find('form').simulate('submit', { preventDefault () {} });
                await wait(0);
                ui.update();
                expect(mockSubmitFn).toHaveBeenCalled();
            });
        });
    });

});
