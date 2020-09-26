import React from 'react';
import styled from "styled-components";
import LoginWindow from "./login/LoginWindow";
import RegisterWindow from "./register/RegisterWindow";

const RegisterWrapper=styled.div`
  width:100vw;
  height:91vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Border =styled.div`
   border: 3px solid #e3e3e3;
   border-radius:15px;
   display:flex;
   flex-direction:column; 
   margin-top:140px;
  `
const LogRegButtonsComponent=styled.div`
    width:100%;
    height:30%;
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

class LoginRegister extends React.Component{
    constructor(props){
        super(props);
        this.state={isLogin:true}
        this.loginClick=this.loginClick.bind(this)
        this.registerClick=this.registerClick.bind(this)
    }
    registerClick(){
        this.setState(state => ({isLogin:false}))
    }
    loginClick(){
        this.setState(state => ({isLogin:true}))
    }
    render() {
        if(this.state.isLogin){ return(
            <Border>
                <LogRegButtonsComponent>
                    <ButtonText onClick={this.loginClick}>Вход</ButtonText>
                    <ButtonText onClick={this.registerClick}>Регистрация</ButtonText>
                </LogRegButtonsComponent>
                <LoginWindow/>
            </Border>
        )}
            else{return(
            <Border>
                <LogRegButtonsComponent>
                    <ButtonText onClick={this.loginClick}>Вход</ButtonText>
                    <ButtonText onClick={this.registerClick}>Регистрация</ButtonText>
                </LogRegButtonsComponent>
                <RegisterWindow/>
            </Border>
        )}

    }
}
function Body(){
    return(
       <RegisterWrapper>
           <LoginRegister/>
       </RegisterWrapper>
    );
}
export default Body;

