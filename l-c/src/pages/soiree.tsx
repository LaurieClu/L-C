import * as React from "react";
import { useState } from "react";
import { Table, Tag } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { WrapperContainer, Date } from "../styles/Soiree";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { DataType, data } from "../data/soireeData";

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (data: DataType) => ({
    disabled: data.name === 'Disabled User', // Column configuration not to be checked
    annulation: data.annulation,
  }),
};

// type TablePaginationPosition = NonNullable<TablePaginationConfig['position']>[number];

// const bottomOptions = [
//     { label: 'bottomCenter', value: 'bottomCenter' }
//   ];

export const columns: ColumnsType<DataType> = [
    {
        title: 'Prénom',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Statut',
        dataIndex: 'statut',
        key: 'statut',
        render: (_, { statut }) => (
            <>
                {statut.map((statut) => {
                    let color = statut.length > 7 ? 'blue' : 'purple';
                    if (statut === 'Inactif') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={statut}>
                            {statut.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Paiement',
        dataIndex: 'paiement',
        key: 'paiement',
        render: (_, { paiement }) => (
            <>
                {paiement.map((paiement) => {
                    let color = paiement.length > 5 ? 'green' : 'green';
                    if (paiement === 'En attente') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={paiement}>
                            {paiement.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    Table.SELECTION_COLUMN,
    {
        title: 'Annulation',
        key: 'annulation',
        dataIndex: 'annulation',
        render: (_, { annulation }) => (
            <>
            
            </>
        ),
    },
];



const Soiree = () => {
    // const [bottom, setBottom] = useState<TablePaginationPosition>('bottomLeft');

    return (
        <WrapperContainer>
            {/* <Date>{setDate}</Date> */}
            <Table 
            rowSelection={{}}
            columns={columns} 
            // pagination={{ position: [bottom] }} 
            dataSource={data} />
        </WrapperContainer>
    );
}

export default Soiree;
