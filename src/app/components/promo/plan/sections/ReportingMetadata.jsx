import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Form = props => {
    const {
        values: { metadataList },
        errors,
        touched,
        change,
        isValid,
    } = props;

    return (
        <>
            <h1>Metadata</h1>
            <TextField
                name="promo.metadata.1"
                helperText={touched.planName ? errors.planName : ""}
                error={touched.planName && Boolean(errors.planName)}
                label="Plan Name"
                fullWidth
                value={metadataList[0]}
                onChange={change.bind(null, "planName")}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
            >
                Submit
            </Button>
        </>
    );
};

export default Form;
