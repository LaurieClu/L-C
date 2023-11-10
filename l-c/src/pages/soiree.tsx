import * as React from "react";
import { useState } from "react";
import { Table, Tag } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { TableContainer, Date } from "../styles/Soiree";
import { Airbnb } from "../components/Airbnb"
import { DataType, data } from "../data/soireeData";
import { WrapperPage } from "../styles/GlobalPage";


type TablePaginationPosition = NonNullable<TablePaginationConfig['position']>[number];


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
     const [bottom, setBottom] = useState<TablePaginationPosition>('bottomCenter');

    return (
        <WrapperPage>
            <TableContainer>
                {/* <Date>{setDate}</Date> */}
                <Table 
                rowSelection={{}}
                columns={columns} 
                pagination={{ position: [bottom] }} 
                dataSource={data} />
            </TableContainer>
            <Airbnb/>
        </WrapperPage>
    );
}

export default Soiree;
