import * as React from "react";
import { MenuData } from "../data/menuData";
import { NavLink } from 'react-router-dom';
import { WrapperMenu, Logo, LogoTitle, WrapperGlobal, List, WrapperLink } from "./WrapperMenu";

export const Menu = () => {

    return (
        <div>
            <WrapperGlobal>
                <WrapperMenu>
                <Logo>
                    <LogoTitle> Licornes & Clémentines</LogoTitle>
                </Logo>
                    {MenuData.map((item, index) => {
                        return (
                            <List key={index} className={item.cName}>
                                <WrapperLink>
                                    <NavLink to={item.path}
                                        style={
                                            ({isActive}) => (
                                            isActive 
                                            ? {
                                                display: 'flex',
                                                textDecoration: 'none',
                                                backgroundColor: 'rgba(255, 255, 255, 0.45)',
                                                color: 'white',
                                                fontSize:"18px",
                                                backgroundSize:"contain",
                                                height: "50px",
                                                width: "130%",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }
                                            :{
                                                textDecoration:"none",
                                                color:"white",
                                                fontSize:"18px",
                                            }
                                            )
                                        }
                                    >
                                    <span>{item.title}</span>
                                    </NavLink>
                                </WrapperLink>
                            </List>
                        )
                    })}
                </WrapperMenu>
            </WrapperGlobal>
        </div>
    )
}
