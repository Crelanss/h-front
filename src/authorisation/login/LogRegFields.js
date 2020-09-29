import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import {userArray,users} from "../register/RegisterMenu.js";
import {withRouter} from 'react-router-dom';

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

class LogRegFields extends React.Component{
    constructor(props) {
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    loginer(){
        for (let i=0; i<userArray.length;i++){
            if(userArray[i].login==document.getElementById('userLogin').value){
                if(userArray[i].password==document.getElementById('userPassword').value){
                    this.nextPath('/profile/lk')
                } else{alert('неверный пароль')}
            } else{alert('неверный логин')}
        }
    }

    render() {
        return (
            <LogRegFieldsComponent>
                <TextFields id="userLogin" label="Логин" variant="outlined"/>
                <TextFields id="userPassword" label="Пароль" variant="outlined" type='password'/>
                <LogButton onClick={()=>this.loginer()}>Войти</LogButton>
            </LogRegFieldsComponent>
        )
    }

}
export default withRouter(LogRegFields);
