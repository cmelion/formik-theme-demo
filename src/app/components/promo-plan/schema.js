import * as Yup from "yup";

export const validationSchema = Yup.object({
    planName: Yup.string("Enter your plan name")
        .required("Plan name is required"),
    planDescription: Yup.string("Enter your plan description")
        .required("Plan description is required"),
    codePrefix: Yup.string("Enter your code prefix")
        .required("Code prefix is required"),
});
