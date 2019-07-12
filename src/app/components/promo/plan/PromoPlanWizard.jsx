import React, {useEffect, useState} from "react";
import { hot } from 'react-hot-loader';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import {Formik} from "formik";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { useResource } from "react-request-hook";
import api from "../api";
import { updatePromo } from './actions'
import {default as PromoPlanFields} from "./sections/PromoPlanOverview";
import {default as PromoCodeDeliveryFields} from "./sections/PromoCodeDeliveryDetails";
import {validationSchema} from "./schema";
import styles from './styles.module.scss';

const PromoPlanWizard = (props) => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(0);
    const [response, savePromo] = useResource(api.savePromo);
    const submitValues = (values, actions) => {
        actions.resetForm();
        delete values.tableData;  // remove objects added by material-table
        savePromo(values);
    };

    useEffect(() => {
        if (response.data) {
            dispatch(updatePromo({ data: response.data }));
        }
    }, [response.data, dispatch]);
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


export default hot(module)(PromoPlanWizard);
