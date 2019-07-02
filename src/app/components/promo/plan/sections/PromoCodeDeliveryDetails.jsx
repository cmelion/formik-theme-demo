import React from "react";
import TextField from "@material-ui/core/TextField";

const Form = props => {
    const {
        values: { codePrefix, codeRedemptionType, codeRandomCharLength, codeRedemptionLimit, codeCount, deliveryURL, approved },
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
                id="codeRedemptionType"
                select
                label="Redemption Type"
                value={codeRedemptionType}
                onChange={change.bind(null, "codeRedemptionType")}
                helperText={touched.codeRedemptionType ? errors.codeRedemptionType : ""}
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
            { codeRedemptionType === 'single-use' ? (
                <div>
                    <TextField
                        disabled={approved}
                        id="codeRandomCharLength"
                        name="codeRandomCharLength"
                        type="number"
                        helperText={touched.codeRandomCharLength ? errors.codeRandomCharLength : ""}
                        error={touched.codeRandomCharLength && Boolean(errors.codeRandomCharLength)}
                        label="Random Characters"
                        value={codeRandomCharLength}
                        onChange={change.bind(null, "codeRandomCharLength")}
                    />
                    <TextField
                        disabled={approved}
                        id="codeRedemptionLimit"
                        name="codeRedemptionLimit"
                        type="number"
                        helperText={touched.codeRedemptionLimit ? errors.codeRedemptionLimit : ""}
                        error={touched.codeRedemptionLimit && Boolean(errors.codeRedemptionLimit)}
                        label="Redemption Limit"
                        value={codeRedemptionLimit}
                        onChange={change.bind(null, "codeRedemptionLimit")}
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
