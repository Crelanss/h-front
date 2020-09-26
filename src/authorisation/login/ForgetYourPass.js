import React from 'react';
import styled from "styled-components";

const ForgetYourPassComponent=styled.div`
    width:100%;
    height:15%;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    
    
`
const ForgetPassButton=styled.button`
    background:none;
    border:none;
    color: rgba(0, 0, 0, 0.5);  
    font-family:Proxima Nova Light;
    font-size: 18px;
    font-weight:bold;
`
function ForgetYourPass(){
    return(
        <ForgetYourPassComponent>
            <ForgetPassButton>Забыли пароль?</ForgetPassButton>
        </ForgetYourPassComponent>
    )
}
export default ForgetYourPass;
