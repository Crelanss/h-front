import React from 'react';
import styled from "styled-components";
import PersonalCabinet from "./personalCabinet/PersonalCabinet";
import MyDocuments from "./myDocuments/MyDocuments";
import UploadDoc from "./uploaddoc/UploadDoc";
import {Switch, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';


const ProfileMain=styled.div`
    width:100vw;
    height:91vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const ButtonPanel=styled.div`   
    display:flex;
    height:9vh;
    width:80%;
`
const Line=styled.div`
    position:absolute;
    top:17.6vh;
    width:80%;
    height:3px;
    background: rgba(0, 87, 182, 0.3);
`
const ButtonText=styled.button`
    border:none;
    outline: none;
    background:none;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    width:270px;
    font-family:Proxima Nova Light;
    color:grey;
    &:hover{
       border-bottom:3px solid;
        border-color:rgba(0, 87, 182, 0.3);
       color:black;
    }
`

class Profile extends React.Component{
    constructor(props){
        super(props)
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
                <ProfileMain>
                    <ButtonPanel>
                        <ButtonText onClick={() => this.nextPath('/profile/lk') }>Личный кабинет</ButtonText>
                        <ButtonText onClick={() => this.nextPath('/profile/doclist') }>Мои документы</ButtonText>
                        <ButtonText>Настройки</ButtonText>
                        <Line/>
                    </ButtonPanel>
                    <Switch>
                        <Route path={"/profile/lk"}>
                            <PersonalCabinet/>
                        </Route>
                        <Route path={"/profile/doclist"}>
                            <MyDocuments/>
                        </Route>
                        <Route path={"/profile/uploaddoc"}>
                            <UploadDoc/>
                        </Route>
                    </Switch>
                </ProfileMain>
        )
    }
}

export default withRouter(Profile);