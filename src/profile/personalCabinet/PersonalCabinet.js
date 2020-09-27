import React from 'react';
import styled from "styled-components";
import UserData from "./UserData";

const PersonalCabinetComponent=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:1540px;
    height:440px;
    background:#F2F4FA;
    margin-top:60px;
    justify-content:space-evenly;
`
const NamePanel=styled.div`
    height:10%;
    width:90%;
    font-family:Proxima Nova Light;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
`



function PersonalCabinet(){
    return(
        <PersonalCabinetComponent>
            <NamePanel>Суворов Артем Вячеславович</NamePanel>
            <UserData/>
        </PersonalCabinetComponent>
    )
}

export default PersonalCabinet;