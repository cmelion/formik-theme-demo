import React from "react";
import { hot } from 'react-hot-loader';
import TextField from "@material-ui/core/TextField";


const Form = props => {
    const {
        values: {
            approved,
            promoPlanId,
            promoDescription,
            promoPlanName,
            promoValidityEndTime,
            promoValidityStartTime,
            tenantId,
        },
        errors,
        touched,
        change,
    } = props;


    return (
        <>
            <h1>Plan Overview</h1>
            <TextField
                disabled={true}
                id="promoPlanId"
                label="Plan ID"
                value={promoPlanId}
            />
            <TextField
                disabled={approved}
                id="promoPlanName"
                helperText={touched.promoPlanName ? errors.promoPlanName : ""}
                error={touched.promoPlanName && Boolean(errors.promoPlanName)}
                label="Plan Name"
                value={promoPlanName}
                onChange={change.bind(null, "promoPlanName")}
            />
            <TextField
                disabled={approved}
                id="tenantId"
                helperText={touched.tenantId ? errors.tenantId : ""}
                error={touched.tenantId && Boolean(errors.tenantId)}
                label="Tenant ID"
                value={tenantId}
                onChange={change.bind(null, "tenantId")}
            />
            <TextField
                disabled={approved}
                id="promoValidityStartTime"
                label="Plan Start Date"
                type="datetime-local"
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={touched.promoValidityStartTime ? errors.promoValidityStartTime : ""}
                error={touched.promoValidityStartTime && Boolean(errors.promoValidityStartTime)}
                value={promoValidityStartTime}
                onChange={change.bind(null, "promoValidityStartTime")}
            />
            <TextField
                disabled={approved}
                id="promoValidityEndTime"
                label="Plan End Date"
                type="datetime-local"
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={touched.promoValidityEndTime ? errors.promoValidityEndTime : ""}
                error={touched.promoValidityEndTime && Boolean(errors.promoValidityEndTime)}
                value={promoValidityEndTime}
                onChange={change.bind(null, "promoValidityEndTime")}
            />
            <TextField
                disabled={approved}
                id="promoDescription"
                helperText={touched.promoDescription ? errors.planDescription : ""}
                error={touched.promoDescription && Boolean(errors.promoDescription)}
                label="Plan Description"
                value={promoDescription}
                onChange={change.bind(null, "promoDescription")}
                fullWidth
            />
        </>
    );
};

export default hot(module)(Form);
