import React from 'react';
import styled from "styled-components";

const LogRegButtonsComponent=styled.div`
    width:100%;
    height:20%;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ButtonText=styled.button`
    border:none;
    outline: none;
    background:none;
    border-bottom:3px solid gray;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    width:270px;
    font-family:Proxima Nova Light;
    color:grey;
    &:hover{
       border-color:black;
       color:black;
    }
`

function LogRegButtons(){
    return(
            <LogRegButtonsComponent>
                <ButtonText>Вход</ButtonText>
                <ButtonText>Регистрация</ButtonText>
            </LogRegButtonsComponent>
    )
}
export default LogRegButtons;
