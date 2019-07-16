export const formTestCases = [
    // Step 0
    {
        desc: "And I leave the Plan Name field blank",
        field: "promoPlanName",
        step: 0,
        badValue: "",
        goodValue: "beta_promo",
        errorText: "#promoPlanName-helper-text",
        buttons: ["Next"],
    },
    {
        desc: "And I leave the Plan Description field blank",
        field: "promoDescription",
        step: 0,
        badValue: "",
        goodValue: "Beta promotion 2019",
        errorText: "#promoDescription-helper-text",
        buttons: ["Next"],
    },
    {
        desc: "And I leave the Tenant ID field blank",
        field: "tenantId",
        step: 0,
        badValue: "",
        goodValue: "1",
        errorText: "#tenantId-helper-text",
        buttons: ["Next"],
    },
    // Step 1
    {
        desc: "And I leave the Code Prefix field blank",
        field: "codePrefix",
        step: 1,
        badValue: "",
        goodValue: "beta2019",
        errorText: "#codePrefix-helper-text",
        buttons: ["Back", "Submit"],
    },
];
