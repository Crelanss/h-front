import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import {Link, NavLink} from "react-router-dom";

const LogRegFieldsComponent=styled.div`
    width:100%;
    height:70%;     
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

function LogRegFields(){
    return(
        <LogRegFieldsComponent>
            <TextFields id="outlined-basic" label="Логин" variant="outlined"/>
            <TextFields id="outlined-basic" label="Пароль" variant="outlined"/>
            <Link to='/profile'> <LogButton >Войти</LogButton></Link>
        </LogRegFieldsComponent>
    )
}
export default LogRegFields;
