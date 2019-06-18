import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

const Form = props => {
    const {
        values: { email, password },
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
                id="email"
                name="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                label="Email"
                fullWidth
                value={email}
                onChange={change.bind(null, "email")}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                id="password"
                name="password"
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                label="Password"
                fullWidth
                type="password"
                value={password}
                onChange={change.bind(null, "password")}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    )
                }}
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
