import React from 'react';
import styled from "styled-components";
import {TextField} from "@material-ui/core";

const SecretQuestionComponent=styled.div`
    height:15%;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
`
const Span=styled.span`
    font-family:Proxima Nova Light;
    font-size:24px;
    color:rgba(0,0,0,0.5);
    font-weight:bold;
`
const AnswerLine=styled.div`
    height:50px;
    width:60%;
`
const textFieldStyle = {
    width: '100%',
    height: '100%',
}
const inputStyle = {
    width: '100%',
    height: '100%',
    textAlign:'center',
}
const props = {
    style: textFieldStyle,
    label: 'Ответ',
    textAlign:'center',
    multiline: true,
    variant: 'outlined',
    InputProps: {style: inputStyle},
    id:'secretField'
}
function SecretChecker(){
    let secretChecker=document.getElementById('secretField').value

}
function SecretQuestion(){
    return(
        <SecretQuestionComponent>
            <Span>Введите ответ на секретный вопрос:</Span>
            <AnswerLine>
                <TextField {...props}/>
            </AnswerLine>
        </SecretQuestionComponent>
    )
}

export default SecretQuestion