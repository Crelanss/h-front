import React from 'react';
import styled from "styled-components";
import UserPhotoInfo from "./UserPhotoInfo";
import {Link} from "react-router-dom";

const UserDataComponent=styled.div`
    height:70%;
    width:90%;
    background:white;
    display:flex;
`
const Redact=styled.div`
    height:100%;
    width:50%;
    display:flex;
    align-items:flex-end;
 
    flex-direction:column;
`
const Text=styled.p`
    margin-top:10%;
    margin-right:15%;
    font-family:Proxima Nova Light;
    font-size:20px;
    color:#4F4AB8;
    font-weight:bold;
    text-align:center;
`
function UserData() {
    return(
        <UserDataComponent>
            <UserPhotoInfo/>
            <Redact>
                <Text>Редактировать</Text>
                <Link to={'/profile/map'}> <Text>Ближайшие отделения Газпромбанк</Text></Link>
            </Redact>
        </UserDataComponent>
    )
}
export default UserData