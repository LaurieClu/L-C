import * as React from "react";
import { useState, useEffect } from "react";
import Card from "antd/es/card/Card";
import { Checkbox, Input} from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';



const { TextArea } = Input

export const Airbnb= () =>{
    const [isChecked, setChecked] = useState(localStorage.getItem('airbnbCheckbox') === 'true');

    const [adress, setAdress] = useState (() => {
         // getting stored value
        const saved = localStorage.getItem("adress");
        return saved || "Entrer adresse";
    });


    useEffect(() => {
        // storing input adress
        localStorage.setItem("adress", (adress));
      }, [adress]);

    return (
        <div>
            <Card title="Airbnb" style={{ width: 300}}>
                <Checkbox 
                id='airbnbCheckbox'
                checked = {isChecked}
                onChange={
                    (e) => {
                      localStorage.setItem('airbnbCheckbox',`${e.target.checked}`);
                      setChecked(e.target.checked);
                    }
                  }>  Trouvé
                </Checkbox>
                <div style={{paddingTop:"15px"}}>

                  {isChecked ?
                    <TextArea 
                    value = {adress} 
                    onChange={(e:any) => setAdress(e.target.value)} 
                    rows={4} 
                    placeholder="Entrer adresse"/>
                    : null
                    }
                     
                </div>
                
            </Card>
        </div>
    )
}