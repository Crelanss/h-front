import React from 'react';
import styled from "styled-components";
import UploadButtonContainer from "./docUpload/UploadButtonContainer";
import SecretQuestion from "./docUpload/SecretQuestion";
import DocumentInfo from "./docinfo/DocumentInfo";

const Wrapper=styled.div`
    display:flex;
    width:1540px;
    height:90%;
    background:#F2F4FA;
    margin-top:60px;  
`
const UploadDocComponent=styled.div`
    height:100%;
    width:50%;
    display:flex;
    flex-direction:column;

`
function UploadDoc(){
    return(
        <Wrapper>
            <UploadDocComponent>
                <UploadButtonContainer/>
                <SecretQuestion/>
            </UploadDocComponent>
            <DocumentInfo/>
        </Wrapper>
    )
}

export default UploadDoc;