import React from 'react';
import styled from "styled-components";
import DocumentDescription from "./DocumentDescription";
const DocListComponent=styled.div`
    height:50%;
    width:100%;
    display:flex;
    flex-direction:column;
    overflow:auto;
`
function DocList(){
    return(
        <DocListComponent>
            <DocumentDescription/>
            <DocumentDescription/>

        </DocListComponent>
    )
}

export default DocList;