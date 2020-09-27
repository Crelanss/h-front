import React from 'react';
import styled from "styled-components";

const DocumentDescriptionComponent=styled.div`
    margin-top:10px;
    font-family:Proxima Nova Light;
    font-weight: bold;
    font-size: 20px;
    display:flex;
    height:30%;
    width:100%;
    display:flex;
    background:white;
    box-shadow:0px 2px 2px rgba(0,0,0,0.3);
    min-height:30%;
`
const NumberOfDoc=styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width:10%;
    height:100%;
`
const PreviewOfDoc=styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width:25%;
    height:100%;
`
const NameOfDoc=styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width:20%;
    height:100%;
`
const CategoryOfDoc=styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width:15%;
    height:100%;
`
const SendDateOfDoc=styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width:20%;
    height:100%;
`
const StateOfDoc=styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    width:10%;
    height:100%;
`

function DocumentDescription(){
    return(
        <DocumentDescriptionComponent>
            <NumberOfDoc>1</NumberOfDoc>
            <PreviewOfDoc><img src={'/preview.svg'} height={50}/></PreviewOfDoc>
            <NameOfDoc>Справка 2-НДФЛ</NameOfDoc>
            <CategoryOfDoc>Ипотека</CategoryOfDoc>
            <SendDateOfDoc>07.02.2001</SendDateOfDoc>
            <StateOfDoc><img src={'/confirmed.svg'} height={50}/></StateOfDoc>
        </DocumentDescriptionComponent>
    )
}

export default DocumentDescription;