import React from 'react';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import ConfirmText from "./Confirmer";
import {withRouter} from 'react-router-dom';
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
let userArray=[]
let userCounter=0
let users
class User {
    constructor(login,password,eMail) {
        this.login = login;
        this.password=password;
        this.eMail=eMail;
    }
}
function CreateAUser(){
    let userName=document.getElementById('loginField').value;
    let userPassword=document.getElementById('passwordField').value;
    let userEMail=document.getElementById('eMailField').value;
    userArray[userCounter]=new User(userName, userPassword,userEMail);
    userCounter+=1
}
class RegisterMenu extends React.Component{
    constructor(props){
        super(props)
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    confirmReg(){
        CreateAUser();
        this.nextPath('/auth/secret')
    }
    render() {
        return (
            <RegisterMenuComponent>
                <TextFields id="loginField" label="Логин" variant="outlined" />
                <TextFields id="eMailField" label="E-mail" variant="outlined"/>
                <TextFields id="passwordField" label="Пароль" variant="outlined" type='password'/>
                <LogButton onClick={()=>this.confirmReg()}>Регистрация</LogButton>
                <ConfirmText/>
            </RegisterMenuComponent>
        )
    }
}
export {userArray,userCounter,users}
export default withRouter(RegisterMenu);