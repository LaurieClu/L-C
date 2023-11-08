import * as React from "react";
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { WrapperContainer, Date } from "../styles/Soiree";
import { CloseOutlined } from "@ant-design/icons";
import { DataType, data } from "../data/soireeData";


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
    {
        title: 'Annulation',
        key: 'annulation',
        dataIndex: 'annulation',
        render: (_, { annulation }) => (
            <>
                <CloseOutlined />
            </>
        ),
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
