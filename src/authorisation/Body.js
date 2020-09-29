import React from 'react';
import styled from "styled-components";
import LoginWindow from "./login/LoginWindow";
import RegisterWindow from "./register/RegisterWindow";
import {Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import CreateASecretQuestion from "./createASecreetQuestion/CreateASecretQuestion";


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

class LoginRegister extends React.Component {

    constructor(props) {
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <RegisterWrapper>
                <Border>
                    <LogRegButtonsComponent>
                        <ButtonText onClick={() => this.nextPath('/auth/login')}>Вход</ButtonText>
                        <ButtonText onClick={() => this.nextPath('/auth/register')}>Регистрация</ButtonText>
                    </LogRegButtonsComponent>
                    <Switch>
                        <Route path={"/auth/login"}>
                            <LoginWindow/>
                        </Route>
                        <Route path={"/auth/register"}>
                            <RegisterWindow/>
                        </Route>
                        <Route path={'/auth/secret'}>
                            <CreateASecretQuestion/>
                        </Route>
                    </Switch>
                </Border>
            </RegisterWrapper>
        )
    }
}

export default withRouter(LoginRegister) ;

