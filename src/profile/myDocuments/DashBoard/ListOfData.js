import React from 'react';
import styled from "styled-components";

const ListOfDataComponent=styled.div`
    height:10%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`
const Line=styled.div`
    position:inherit;
    width:100%;
    height:3px;
    background: background:rgba(0,0,0,0.5);;
`
const SpanContainer=styled.div`
    height:50%;
    width:100%;
    display:flex;
    justify-content:space-around;
`
const Span=styled.span`
    font-family:Proxima Nova Light;
    font-size:20px;
    color:rgba(0, 0, 0, 0.5);
    font-weight:bold;

`
const NumberOfDoc=styled.div`
    width:10%;
    height:100%;
    text-align:center;
`
const PreviewOfDoc=styled.div`
    width:25%;
    height:100%;
    text-align:center;    
`
const NameOfDoc=styled.div`
    width:20%;
    height:100%;
    text-align:center;
`
const CategoryOfDoc=styled.div`
    width:15%;
    height:100%;
    text-align:center;
`
const SendDateOfDoc=styled.div`
    width:20%;
    height:100%;
    text-align:center;
`
const StateOfDoc=styled.div`
    width:10%;
    height:100%;
    text-align:center;
`

function ListOfData(){
    return(
        <ListOfDataComponent>
            <SpanContainer>
                <NumberOfDoc><Span>№</Span></NumberOfDoc>
                <PreviewOfDoc><Span>Превью</Span></PreviewOfDoc>
                <NameOfDoc><Span>Название</Span></NameOfDoc>
                <CategoryOfDoc><Span>Категория</Span></CategoryOfDoc>
                <SendDateOfDoc><Span>Дата отправки</Span></SendDateOfDoc>
                <StateOfDoc><Span>Верность</Span></StateOfDoc>
            </SpanContainer>
            <Line/>
        </ListOfDataComponent>
    )
}

export default ListOfData;