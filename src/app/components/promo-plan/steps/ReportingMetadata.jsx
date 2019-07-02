import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Form = props => {
    const {
        values: { planName, planDescription },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        console.log(errors);
        setFieldTouched(name, true, false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="promo.metadata.1"
                helperText={touched.planName ? errors.planName : ""}
                error={touched.planName && Boolean(errors.planName)}
                label="Plan Name"
                fullWidth
                value={planName}
                onChange={change.bind(null, "planName")}
            />
            <TextField
                id="planDescription"
                name="planDescription"
                helperText={touched.planDescription ? errors.planDescription : ""}
                error={touched.planDescription && Boolean(errors.planDescription)}
                label="Plan Description"
                fullWidth
                value={planDescription}
                onChange={change.bind(null, "planDescription")}
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
        </form>
    );
};

export default Form;
