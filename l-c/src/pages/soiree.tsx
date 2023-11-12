import * as React from "react";
import { useState } from "react";
import { Select, Table, Tag } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { TableContainer, Date } from "../styles/Soiree";
import { Airbnb } from "../components/Airbnb"
import { DataType, data } from "../data/soireeData";
import { CardWrapper, WrapperPage } from "../styles/GlobalPage";
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { NbPlaces } from "../components/NbPlaces";
import { PaiementTag } from "../components/PaiementTag";



type TablePaginationPosition = NonNullable<TablePaginationConfig['position']>[number];


// const tagRender = (props: CustomTagProps) => {
//   const { label, value } = props;
  
//   return (
//     <Tag
//       color={value}
//       style={{ marginRight: 3 }}
//     >
//       {label}
//     </Tag>
//   );
// };



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
        render: (_, {  }) => (
//             <>
//                 {paiement.map((paiement) => {
//                     let color = paiement.length > 5 ? 'green' : 'green';
//                     if (paiement === 'En attente') {
//                         color = 'volcano';
//                     }
//                     return (
//                         <Select
//                             mode="multiple"
//                             tagRender={tagRender}
//                             defaultValue= {'volcano'}
//                             style={{ width: 100 }}
//                             options={[
//                                 { value: 'green', label: 'A payé' },
//                                 { value: 'volcano', label: 'En attente' },
                                
// ]}>
                        
//                          </Select> 
                        <PaiementTag></PaiementTag>
                    )
                // })}
            // </>
        // ),
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
            <CardWrapper>
                <Airbnb/>
                <NbPlaces/>
            </CardWrapper>
        </WrapperPage>
    );
}

export default Soiree;
