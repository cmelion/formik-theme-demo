import React from "react";
import TextField from "@material-ui/core/TextField";

const Form = props => {
    const {
        values: { codePrefix, approved },
        errors,
        touched,
        change,
    } = props;

    return (
        <>
            <TextField
                disabled={approved}
                id="codePrefix"
                name="codePrefix"
                helperText={touched.codePrefix ? errors.codePrefix : ""}
                error={touched.codePrefix && Boolean(errors.codePrefix)}
                label="Code Prefix"
                fullWidth
                value={codePrefix}
                onChange={change.bind(null, "codePrefix")}
            />
        </>
    );
};

export default Form;
