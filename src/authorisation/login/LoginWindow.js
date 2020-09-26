import React from 'react';
import styled from "styled-components";
import LogRegFields from "./LogRegFields";
import ForgetYourPass from "./ForgetYourPass";

const Login=styled.div`
    display:flex;
    flex-direction:column;
    width:600px;
    height:400px;
    
`

function LoginWindow(){
    return(
        <Login>
            <LogRegFields/>
            <ForgetYourPass/>
        </Login>
    )
}

export default LoginWindow;