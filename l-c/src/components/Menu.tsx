import * as React from "react";
import { MenuData } from "../data/menuData";
import { Link } from 'react-router-dom';
import { WrapperMenu, Logo, LogoTitle, WrapperGlobal } from "./WrapperMenu";


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
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </WrapperMenu>
            </WrapperGlobal>
        </div>
    )
}
