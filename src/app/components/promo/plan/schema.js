import * as Yup from "yup";

export const validationSchema = Yup.object({
    planName: Yup.string("Enter your plan name")
        .required("Plan name is required"),
    planDescription: Yup.string("Enter your plan description")
        .required("Plan description is required"),
    planStartDate: Yup.date("Enter your plan start date")
        .required("Plan start date is required"),
    planEndDate: Yup.date("Enter your plan end date")
        .required("Plan end date is required"),
    codePrefix: Yup.string("Enter your code prefix")
        .required("Code prefix is required"),
    codeRedemptionType: Yup.string("Enter your code redemption type")
        .required("Code redemption type is required"),
    codeRandomCharLength: Yup.number("Enter the number of random characters to generate"),
    codeRedemptionLimit: Yup.number("Enter code redemption limit"),
    codeCount: Yup.number("Enter code count"),
    deliveryURL: Yup.string().url("Enter the delivery URL"),
});
