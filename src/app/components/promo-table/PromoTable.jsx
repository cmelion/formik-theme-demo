import React from 'react';
import MaterialTable from "material-table";
import { PromoPlanWizard } from '../promo-plan';

const DataTable = () => {
    return (
        <MaterialTable
            title="Promo Plan List"
            columns={[
                { title: 'Plan Name', field: 'planName' },
                { title: 'Plan Description', field: 'planDescription' },
                { title: 'Code Prefix', field: 'codePrefix' },
                { title: 'Approved', field: 'approved', type: 'boolean' },
            ]}
            data={[
                { planName: 'Mehmet',      planDescription: 'Baran', codePrefix: 'xyz', approved: true },
                { planName: 'Zerya Betül', planDescription: 'Baran', codePrefix: 'xyz', approved: false },
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
