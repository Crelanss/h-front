import React from 'react';
import styled from "styled-components";
import QuestionSelector from "./QuestionSelector";
import QuestionWriter from "./QuestionWriter";
import CreateASecretButton from "./CreateASecretButton";

const CreateASecretQuestionComponent=styled.div`
    height:400px;
    width:600px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

function CreateASecretQuestion(){
    return(
        <CreateASecretQuestionComponent>
            <QuestionSelector/>
            <QuestionWriter/>
            <CreateASecretButton/>
        </CreateASecretQuestionComponent>
    )
}

export default CreateASecretQuestion;