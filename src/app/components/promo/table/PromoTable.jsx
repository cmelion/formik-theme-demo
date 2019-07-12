import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import { useResource } from "react-request-hook";
import api from "../api";
import { cachePromos } from './actions'
import { PromoPlanWizard } from '../plan';
import './styles.scss';

const DataTable = () => {
    const dispatch = useDispatch();
    const [response, getPromos] = useResource(api.getPromos);
    const { data: promosList } = useSelector(
        (state) => state.promosListCached
    );

    // Load everything when the component loads for now to simplify client-side search/reporting
    // revisit when and if performance suffers
    useEffect(() => {
        if (promosList.length === 0) {
            getPromos();
        }
    }, [getPromos, promosList.length]);

    useEffect(() => {
        if (promosList.length === 0 && response.data) {
            dispatch(cachePromos(response.data));
        }
    }, [response.data, promosList.length, dispatch]);

    return (
        <>
            <MaterialTable
                title="Promo Plan List"
                columns={[
                    { title: 'Promo Plan Name', field: 'promoPlanName' },
                    { title: 'Promo Description', field: 'promoDescription' },
                    { title: 'Plan Start Date', field: 'promoValidityStartTime', type: 'datetime'},
                    { title: 'Plan End Date', field: 'promoValidityEndTime', type: 'datetime' },
                    { title: 'Code Prefix', field: 'codePrefix' },
                    { title: 'Code Redemption Type', field: 'codeUsageType'},
                    { title: 'Tenant ID', field: 'tenantId', type: 'numeric', hidden: true },
                    { title: 'Approved', field: 'approved', type: 'boolean' },
                ]}
                data={ promosList }
                options={{
                    filtering: true,
                    columnsButton: true,
                }}
                detailPanel={rowData => {
                    return (
                        <PromoPlanWizard {...rowData}/>
                    )
                }}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add New Promo',
                        isFreeAction: true,
                        onClick: (event) => alert("You want to add a new promotion")
                    },
                    rowData => ({
                        icon: 'edit',
                        tooltip: 'Edit User',
                        onClick: (event, rowData) => alert("You want to edit " + rowData.name),
                        disabled: rowData.approved
                    })
                ]}
            />
        </>
    );
};

export default hot(module)(DataTable);
