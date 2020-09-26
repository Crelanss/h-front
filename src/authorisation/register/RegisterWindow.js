import React from 'react';
import styled from "styled-components";
import RegisterMenu from "./RegisterMenu";


const Register=styled.div`
    display:flex;
    width:600px;
    flex-direction:column;
    height:570px;
`
function RegisterWindow(){
    return(
        <Register>
            <RegisterMenu/>
        </Register>
    )
}

export default RegisterWindow;