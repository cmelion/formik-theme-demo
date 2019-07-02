import React from "react";
import TextField from "@material-ui/core/TextField";


const Form = props => {
    const {
        values: { planName, planDescription, approved },
        errors,
        touched,
        change,
    } = props;


    return (
        <>
            <TextField
                disabled={approved}
                id="planName"
                name="planName"
                helperText={touched.planName ? errors.planName : ""}
                error={touched.planName && Boolean(errors.planName)}
                label="Plan Name"
                fullWidth
                value={planName}
                onChange={change.bind(null, "planName")}
            />
            <TextField
                disabled={approved}
                id="planDescription"
                name="planDescription"
                helperText={touched.planDescription ? errors.planDescription : ""}
                error={touched.planDescription && Boolean(errors.planDescription)}
                label="Plan Description"
                fullWidth
                value={planDescription}
                onChange={change.bind(null, "planDescription")}
            />
        </>
    );
};

export default Form;
