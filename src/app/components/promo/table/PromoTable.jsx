import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import { useResource } from "react-request-hook";
import api from "../../../store/api";
import { PromoPlanWizard } from '../plan/index';
import './styles.scss';

const DataTable = () => {
    const dispatch = useDispatch();
    const [response, getPromos] = useResource(api.getPromos);
    const { currentPage: page, data: promosList } = useSelector(
        (state) => state.promosListCached
    );

    // function onMore() {
    //     if (page < 10) {
    //         getPromos(page + 1);
    //     }
    // }

    useEffect(() => {
        if (page === 0) {
            getPromos(1);
        }
    }, [page, getPromos]);

    // TODO: determine how to add page to the deps without creating an infinite loop
    // see https://github.com/facebook/create-react-app/issues/6880
    useEffect(() => {
        if (response.data) {
            dispatch({ type: "CACHE_PROMOS", payload: { page: page + 1, data: response.data } });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response.data, dispatch]);

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
                    { title: 'Tenant ID', field: 'tenantId', type: 'number', hidden: true },
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
