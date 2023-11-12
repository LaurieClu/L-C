import * as React from "react";
import { useState, useEffect } from "react";
import { Tag } from "antd";


export const PaiementTag = () => {

    const [active, setActive] = useState(false)
    const [textTag, setTextTag] = useState ("En attente")
    const [ colorTag, setColorTag] = useState ("volcano")

    const handleClick = () => {
        if (active){
            setActive(false)
            setTextTag("En attente")
            setColorTag("volcano");
        }else {
            setActive(true)
            setTextTag("A payé")
            setColorTag("green")
        }
       
    };

    return (
        <Tag 
            id= 'paiementTag'
            color={colorTag} 
            onClick={handleClick}
            key={textTag}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 85, height: 25 }}
            onChange={
                (e) => {
                  localStorage.setItem('paiementTag',`${active}`);
                  setActive(active);
                }
              }>
            {textTag.toUpperCase()}
        </Tag>
    )
}
