import React from 'react';
import styled from "styled-components";
import SideMenu from "./SideMenu/SideMenu";
import DashBoard from "./DashBoard/DashBoard";
const MyDocumentsComponent=styled.div`
    display:flex;
    width:1540px;
    height:90%;
    background:#F2F4FA;
    margin-top:60px;
    padding-top:5vh;
    
`

function MyDocuments(){
    return(
        <MyDocumentsComponent>
            <SideMenu/>
            <DashBoard/>
        </MyDocumentsComponent>

    )
}

export default MyDocuments;