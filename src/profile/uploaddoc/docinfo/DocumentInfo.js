import React from 'react';
import styled from "styled-components";
import NameAndCommentary from "./NameAndCommentary";
import CategoryAndInfo from "./CategoryAndInfo";

const DocumentInfoComponent=styled.div`
    height:60%;
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

function DocumentInfo(){
    return(
        <DocumentInfoComponent>
            <CategoryAndInfo/>
            <NameAndCommentary/>
        </DocumentInfoComponent>
    )
}

export default DocumentInfo;
