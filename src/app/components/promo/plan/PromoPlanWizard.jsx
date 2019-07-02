import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import {Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import {default as PromoPlanFields} from "./sections/PromoPlanOverview";
import {default as PromoCodeDeliveryFields} from "./sections/PromoCodeDeliveryDetails";
import {validationSchema} from "./schema";
import styles from './styles.module.scss';

export const submitValues = ({planName, password}) => {
    console.log({planName, password});
};

const PromoPlanWizard = (props) => {
    const [step, setStep] = useState(0);
    return (
        <div className={styles.container}>
            <Paper elevation={1} className={styles.paper}>
                <Formik
                    initialValues={props}
                    validationSchema={validationSchema}
                    onSubmit={submitValues}
                >
                    {props => {
                        const {
                            values: {approved},
                            errors,
                            handleSubmit,
                            handleChange,
                            isValid,
                            setFieldTouched,
                        } = props;

                        const change = (name, e) => {
                            e.persist();
                            handleChange(e);
                            console.log(errors);
                            setFieldTouched(name, true, false);
                        };
                        const steps = [
                            <PromoPlanFields         key={1} {...props} change={change}/>,
                            <PromoCodeDeliveryFields key={2} {...props} change={change}/>
                        ];
                        return (
                            <form onSubmit={handleSubmit} className="promo-form">
                                {approved ? (
                                    <>
                                        {steps}
                                    </>) : (
                                    <>
                                        {steps[step]}
                                        <p/>
                                        <Box display="flex" flexDirection="row">
                                            {step > 0 ? (
                                                <Button
                                                    onClick={() => setStep(step - 1)}
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Back
                                                </Button>
                                            ) : null}
                                            {step === steps.length - 1 ? (
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                    disabled={!isValid}
                                                >
                                                    Submit
                                                </Button>
                                            ) : (
                                                <Button
                                                    onClick={() => setStep(step + 1)}
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Next
                                                </Button>
                                            )}
                                        </Box>
                                    </>
                                )}

                            </form>
                        )
                    }
                    }
                </Formik>
            </Paper>
        </div>
    )
};


export default PromoPlanWizard;
