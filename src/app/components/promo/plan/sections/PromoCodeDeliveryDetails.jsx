import React from "react";
import TextField from "@material-ui/core/TextField";

const Form = props => {
    const {
        values: { codePrefix, codeUsageType, codeLength, redemptionLimit, codeCount, deliveryURL, approved },
        errors,
        touched,
        change,
    } = props;

    const redemptionTypes = [
        {value: 'single-use', label: 'Single Use'},
        {value: 'multi-use', label: 'Multi Use'},
        {value: 'unlimited-offer', label: 'Unlimited Offer'},

    ];

    return (
        <>
            <h1>PromoCode Delivery</h1>
            <TextField
                disabled={approved}
                id="codePrefix"
                name="codePrefix"
                helperText={touched.codePrefix ? errors.codePrefix : ""}
                error={touched.codePrefix && Boolean(errors.codePrefix)}
                label="Code Prefix"
                value={codePrefix}
                onChange={change.bind(null, "codePrefix")}
            />
            <TextField
                disabled={approved}
                id="codeUsageType"
                select
                label="Redemption Type"
                value={codeUsageType}
                onChange={change.bind(null, "codeUsageType")}
                helperText={touched.codeUsageType ? errors.codeUsageType : ""}
                SelectProps={{
                    native: true,
                }}
            >
                <option></option>
                {redemptionTypes.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            { codeUsageType === 'single-use' ? (
                <div>
                    <TextField
                        disabled={approved}
                        id="codeLength"
                        name="codeLength"
                        type="number"
                        helperText={touched.codeLength ? errors.codeLength : ""}
                        error={touched.codeLength && Boolean(errors.codeLength)}
                        label="Random Characters"
                        value={codeLength}
                        onChange={change.bind(null, "codeLength")}
                    />
                    <TextField
                        disabled={approved}
                        id="redemptionLimit"
                        name="redemptionLimit"
                        type="number"
                        helperText={touched.redemptionLimit ? errors.redemptionLimit : ""}
                        error={touched.redemptionLimit && Boolean(errors.redemptionLimit)}
                        label="Redemption Limit"
                        value={redemptionLimit}
                        onChange={change.bind(null, "redemptionLimit")}
                    />
                    <TextField
                        disabled={approved}
                        id="codeCount"
                        name="codeCount"
                        type="number"
                        helperText={touched.codeCount ? errors.codeCount : ""}
                        error={touched.codeCount && Boolean(errors.codeCount)}
                        label="Code Count"
                        value={codeCount}
                        onChange={change.bind(null, "codeCount")}
                    />
                </div>
            ) : null }
            <TextField
                disabled={approved}
                id="deliveryURL"
                name="deliveryURL"
                helperText={touched.deliveryURL ? errors.deliveryURL : ""}
                error={touched.deliveryURL && Boolean(errors.deliveryURL)}
                label="Delivery URL"
                value={deliveryURL}
                onChange={change.bind(null, "deliveryURL")}
                fullWidth
            />
        </>
    );
};

export default Form;
