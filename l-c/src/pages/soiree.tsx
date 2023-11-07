import * as React from "react";
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { WrapperContainer, Date } from "../styles/Soiree";

export interface DataType {
    key: string;
    name: string;
    statut: number;
    paiement: string;
    annulation: string[];
}

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
    },
    {
        title: 'Paiement',
        dataIndex: 'paiement',
        key: 'paiement',
    },
    {
        title: 'Annulation',
        key: 'annulation',
        dataIndex: 'annulation',
        render: (_, { annulation }) => (
            <>
                {annulation.map((annulation) => {
                    let color = annulation.length > 5 ? 'geekblue' : 'green';
                    if (annulation === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={annulation}>
                            {annulation.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

export const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        statut: 32,
        paiement: 'New York No. 1 Lake Park',
        annulation: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        statut: 42,
        paiement: 'London No. 1 Lake Park',
        annulation: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        statut: 32,
        paiement: 'Sydney No. 1 Lake Park',
        annulation: ['cool', 'teacher'],
    },
];

const Soiree = () => {
    return (
        <WrapperContainer>
            {/* <Date>{setDate}</Date> */}
            <Table columns={columns} dataSource={data} />
        </WrapperContainer>
    );
}

export default Soiree;
