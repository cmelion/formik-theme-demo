import * as Yup from "yup";

export const validationSchema = Yup.object({
    promoPlanName: Yup.string("Enter your plan name")
        .required("Plan name is required"),
    promoDescription: Yup.string("Enter your plan description")
        .required("Plan description is required"),
    tenantId: Yup.number("Enter your tentant id")
        .required("Tenant ID is required"),
    promoValidityStartTime: Yup.date("Enter your plan start date")
        .required("Plan start date is required"),
    promoValidityEndTime: Yup.date("Enter your plan end date")
        .required("Plan end date is required"),
    codePrefix: Yup.string("Enter your code prefix")
        .required("Code prefix is required"),
    codeUsageType: Yup.string("Enter your code redemption type")
        .required("Code redemption type is required"),
    codeLength: Yup.number("Enter the number of random characters to generate")
        .when("codeUsageType", {
            is: "single-use",
            then: Yup.number().required("Random Character Count is required")
        }),
    redemptionLimit: Yup.number("Enter code redemption limit")
        .when("codeUsageType", {
            is: "single-use",
            then: Yup.number().required("Redemption Limit is required")
        }),
    codeCount: Yup.number("Enter code count")
        .when("codeUsageType", {
            is: "single-use",
            then: Yup.number().required("Code Count is required")
        }),
    deliveryURL: Yup.string().url("Enter the delivery URL"),
});
