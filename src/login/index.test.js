import React from "react";
import Paper from "@material-ui/core/Paper";
import { Formik } from "formik";
import InputForm, { submitValues } from "./index";
import { Form } from "./form";
import { shallow } from "enzyme";


describe('Given a correctly filled in Registration form', () => {
    console.log = jest.fn();

    beforeEach(() => {
        console.log.mockClear();
    });

    describe('When the user submits the form', () => {
        it("Then the values are logged to the console", async () => {
            const form = shallow(<InputForm />);
            const formik = form.find(Paper).dive().find(Formik);
            const innerForm = formik.dive().find(Form);
            // Don't test Formik here, but do confirm the correct handler was passed
            expect(formik.props().onSubmit).toBe(submitValues);
            expect(innerForm).toBeDefined();

            const values = {
                name: "",
                email: "",
                confirmPassword: "",
                password: ""
            };

            submitValues(values);
            expect(console.log).toHaveBeenCalledTimes(1);
        });
    })
});
