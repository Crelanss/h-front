import React from 'react';
import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";

const SideMenuComponent=styled.div`
    height:85%;
    width:20%;
`


function SideMenu(){
    return(
        <SideMenuComponent>
            <ButtonContainer/>
        </SideMenuComponent>
    )
}

export default SideMenu;