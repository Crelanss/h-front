import React from 'react';
import styled from "styled-components";

const ButtonContainerComponent=styled.div`
    display:flex;
    flex-direction:column;
    height:40%;
    width:100%;
    justify-content:space-between;
    padding-left:0;
    
`
const NavButton=styled.button`
    border:none;
    outline: none;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    width:150px;
    font-family:Proxima Nova Light;
    color:rgba(79, 74, 184, 1);
    &:hover{
       color:black;
    }
    background:none;
    text-align:left;
`

function ButtonContainer(){
    return(
        <ButtonContainerComponent>
            <NavButton>Все</NavButton>
            <NavButton>Принятые</NavButton>
            <NavButton>Непринятые</NavButton>
            <NavButton>В обработке</NavButton>
        </ButtonContainerComponent>
    )
}

export default ButtonContainer;