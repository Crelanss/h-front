import React from 'react';
import styled from "styled-components";

const UserPhotoInfoComponent=styled.div`
    display:flex;
    height:100%;
    width:50%;
    align-items:center;
    justify-content:space-evenly;
    padding-left:15px;
`

const UserInfo=styled.div`
    display:flex;
    flex-direction:column;
    height:60%;
    width:60%;
    justify-content:space-around;
    margin-left:15px;
`
const TextImmutable=styled.span`
    font-family:Proxima Nova Light;
    font-size:20px;
    color:rgba(0, 0, 0, 0.5);
    font-weight:bold;
    text-align:center;
`
const TextMutable=styled.span`
    font-family:Proxima Nova Light;
    font-size:20px;
    color:black;
    font-weight:bold;
    text-align:center;
`
const TextContainer=styled.div`
    
`
function UserPhotoInfo(){
    return(
        <UserPhotoInfoComponent>
        <img src={'/profile.svg'} height={'150px'} />
            <UserInfo>
                <TextContainer><TextImmutable>Дата рождения: </TextImmutable><TextMutable>07.02.2001</TextMutable></TextContainer>
                <TextContainer><TextImmutable>ФИО: </TextImmutable><TextMutable>Артем</TextMutable></TextContainer>
                <TextContainer><TextImmutable>Гражданство: </TextImmutable><TextMutable>РАСИЯ</TextMutable></TextContainer>
            </UserInfo>
        </UserPhotoInfoComponent>
    )
}

export default UserPhotoInfo;