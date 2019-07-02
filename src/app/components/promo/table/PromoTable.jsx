import React from 'react';
import MaterialTable from "material-table";
import { PromoPlanWizard } from '../plan/index';
import './styles.scss';

const DataTable = () => {
    return (
        <MaterialTable
            title="Promo Plan List"
            columns={[
                { title: 'Plan Name', field: 'planName' },
                { title: 'Plan Description', field: 'planDescription' },
                { title: 'Plan Start Date', field: 'planStartDate', type: 'datetime'},
                { title: 'Plan End Date', field: 'planEndDate', type: 'datetime' },
                { title: 'Code Prefix', field: 'codePrefix' },
                { title: 'Code Redemption Type', field: 'codeRedemptionType'},
                { title: 'Approved', field: 'approved', type: 'boolean' },
            ]}
            data={[
                {
                    planName: 'Mehmet', planDescription: 'Baran', planStartDate: "2019-06-24T10:30", planEndDate: "2019-10-24T10:30",
                    codePrefix: 'xyz', codeRedemptionType: 'multi-use',
                    approved: true
                },
                {
                    planName: 'Zerya Betül', planDescription: 'Baran', planStartDate: "2019-05-24T10:30", planEndDate: "2019-11-24T10:30",
                    codePrefix: 'xyz', codeRedemptionType: 'single-use',
                    approved: false
                },
            ]}
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
    );
};

export default DataTable;
