import React from 'react';
import styled from "styled-components";

const UploadButtonContainerComponent=styled.div`
    height:40%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
const UploadButton=styled.button`
    border: 1px solid #0057B6;
    border-radius:50px;
    background:none;
    width: 428px;
    height: 93px;
    font-family:Proxima Nova Light;
    font-size:24px;
    color:rgba(0, 87, 182, 1);
    font-weight:bold;
    letter-spacing:3px;
`
function UploadButtonContainer(){
    return(
        <UploadButtonContainerComponent>
            <UploadButton>Загрузить документ ↑</UploadButton>
        </UploadButtonContainerComponent>
    )
}

export default UploadButtonContainer;