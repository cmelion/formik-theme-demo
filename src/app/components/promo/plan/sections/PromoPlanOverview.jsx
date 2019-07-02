import React from "react";
import TextField from "@material-ui/core/TextField";


const Form = props => {
    const {
        values: { planName, planDescription, planStartDate, planEndDate, approved },
        errors,
        touched,
        change,
    } = props;


    return (
        <>
            <h1>Plan Overview</h1>
            <TextField
                disabled={approved}
                id="planName"
                name="planName"
                helperText={touched.planName ? errors.planName : ""}
                error={touched.planName && Boolean(errors.planName)}
                label="Plan Name"
                value={planName}
                onChange={change.bind(null, "planName")}
            />
            <TextField
                id="planStartDate"
                name="planStartDate"
                label="Plan Start Date"
                type="datetime-local"
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={touched.planStartDate ? errors.planStartDate : ""}
                error={touched.planStartDate && Boolean(errors.planStartDate)}
                value={planStartDate}
                onChange={change.bind(null, "planStartDate")}
            />
            <TextField
                id="planEndDate"
                name="planEndDate"
                label="Plan End Date"
                type="datetime-local"
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={touched.planEndDate ? errors.planEndDate : ""}
                error={touched.planEndDate && Boolean(errors.planEndDate)}
                value={planEndDate}
                onChange={change.bind(null, "planEndDate")}
            />
            <TextField
                disabled={approved}
                id="planDescription"
                name="planDescription"
                helperText={touched.planDescription ? errors.planDescription : ""}
                error={touched.planDescription && Boolean(errors.planDescription)}
                label="Plan Description"
                value={planDescription}
                onChange={change.bind(null, "planDescription")}
                fullWidth
            />
        </>
    );
};

export default Form;
