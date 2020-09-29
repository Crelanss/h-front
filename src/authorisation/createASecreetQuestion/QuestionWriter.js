import React from 'react';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {userArray, userCounter} from "../register/RegisterMenu";


const QuestionWriterContainer=styled.div`
    height:60px;
    width:90%;
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
    id:'123'
}
function secretQuestionText() {
    let secretQuestion = document.getElementById('123').value;
    userArray[userCounter-1].secret=secretQuestion
}
export {secretQuestionText}

function QuestionWriter(){
    return(
        <QuestionWriterContainer>
            <TextField {...props}/>
        </QuestionWriterContainer>
    )
}

export default QuestionWriter;