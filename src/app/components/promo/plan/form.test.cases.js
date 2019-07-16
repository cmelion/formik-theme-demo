export const formTestCases = [
    {
        desc: "And I leave the Plan Name field blank",
        field: "promoPlanName",
        step: 0,
        badValue: "",
        goodValue: "beta_promo",
        errorText: "#promoPlanName-helper-text",
        buttonCount: 1,
        submitButton: false
    },
    {
        desc: "And I leave the Code Prefix field blank",
        field: "codePrefix",
        step: 1,
        badValue: "",
        goodValue: "beta2019",
        errorText: "#codePrefix-helper-text",
        buttonCount: 2,
        submitButton: false
    },
];
