import React from 'react';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import ConfirmText from "./Confirmer";
const RegisterMenuComponent=styled.div`
    width:100%;
    height:90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    
`
const TextFields=styled(TextField)({
    width:540
})
const LogButton=styled.button`
    width:540px;
    height:56px;
    border:1px solid rgba(0, 0, 0, 0.5);
    border-radius:3px;
    background:#0D356C;
    font-family:Montserrat Regular;
    color:white;
    font-style: normal;
    font-size: 24px;
    letter-spacing:1px;
`

function RegisterMenu(){
    return(
        <RegisterMenuComponent>
            <TextFields id="outlined-basic" label="Логин" variant="outlined" />
            <TextFields id="outlined-basic" label="E-mail" variant="outlined" />
            <TextFields id="outlined-basic" label="Пароль" variant="outlined" />
            <TextFields id="outlined-basic" label="Повторите пароль" variant="outlined" />
            <LogButton>Регистрация</LogButton>
            <ConfirmText/>
        </RegisterMenuComponent>
    )
}

export default RegisterMenu;