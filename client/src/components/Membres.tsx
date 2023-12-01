import * as React from "react";
import { useState, useEffect } from "react";
import { Table } from "antd";
import { TMembres, getMembres } from "../api/membres";
import { ColumnsType } from "antd/es/table";
import { CheckOutlined, CloseOutlined} from "@ant-design/icons";

export const columns: ColumnsType<TMembres> = [
    {
        title: 'name',
        dataIndex: 'name',
    },
    {
        title: 'username',
        dataIndex: 'username',
    },
    {
        title: 'statut',
        dataIndex: 'statut',
    },
    {
        title: 'participe',
        dataIndex: 'participe',
        key: 'participe',
        render: (_, { participe}) => (
            
                participe ? <CheckOutlined/> : <CloseOutlined/>
            
        )
    }
]

export const Membres = () => {

    const [dataSource, setDataSource] = useState([])
    const [membres, setMembres] = useState<TMembres[]>([])


    useEffect(()=> {
        getData()
    }, [])

    const getData = async () => {
        const res = await fetch("http://localhost:5000/membres");
        const response = await res.json()
        setMembres(response);
    }

    const data =  membres.map(membre=> ({
        name: membre.name,
        username: membre.username,
        statut: membre.statut,
        participe: membre.participe
        }))

    return (
        <div >
            {/* {membres.map((membre) => (
            <li key={membre._id}> {membre.name} 
            </li>      
            ))} */}
            
            <Table columns={columns} dataSource={data}></Table>
        </div>
    )
}