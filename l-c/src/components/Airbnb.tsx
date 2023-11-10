import * as React from "react";
import { useState } from "react";
import Card from "antd/es/card/Card";
import { Checkbox, Input} from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  };

const { TextArea } = Input

export const Airbnb= () =>{
    const [checked, isChecked] = useState (false)

    return (
        <div>
            <Card title="Airbnb" style={{ width: 300}}>
                <Checkbox onChange={onChange}> Trouvé </Checkbox>
                <div style={{paddingTop:"15px"}}>
                <TextArea rows={4} placeholder="Entrer adresse"/>
                </div>
                
            </Card>
        </div>
    )
}