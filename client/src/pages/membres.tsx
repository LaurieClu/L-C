import * as React from "react";
import { Membres } from "../components/Membres";
import { WrapperPage } from "../styles/GlobalPage";
import { TableContainer } from "../styles/Soiree";

const membres = () => {
    return (
        <WrapperPage>
            <TableContainer>
                <Membres/>
            </TableContainer>
        </WrapperPage>
    )
}

export default membres; 