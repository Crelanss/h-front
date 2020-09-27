import React from 'react';
import styled from "styled-components";
import DocMenu from "./DocMenu";
import SearchLine from "./SearchLine";

const DashBoardComponent=styled.div`
    height:90%;
    width:70%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
function DashBoard(){
    return(
        <DashBoardComponent>
            <SearchLine/>
            <DocMenu/>
        </DashBoardComponent>
    )
}

export default DashBoard;