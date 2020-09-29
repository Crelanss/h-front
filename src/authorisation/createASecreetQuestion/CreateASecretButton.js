import React from 'react';
import styled from "styled-components";
import {withRouter} from 'react-router-dom';
import {secretQuestionText} from "./QuestionWriter";

const CreateASecretButtonContainer=styled.div`
    height:20%;
    width:90%;
    margin-bottom:20px;
`
const CreateASecretBtn=styled.button`
    height:100%;
    width:100%;
    border:1px solid rgba(0, 0, 0, 0.5);
    border-radius:3px;
    background:#0D356C;
    font-family:Montserrat Regular;
    color:white;
    font-style: normal;
    font-size: 24px;
    letter-spacing:1px;
`


class CreateASecretButton extends React.Component{
    constructor(props) {
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    finishReg(){
        secretQuestionText();
        this.nextPath('/auth/login')
    }


    render(){
        return(
            <CreateASecretButtonContainer>

                <CreateASecretBtn onClick={()=>this.finishReg()}>Завершить регистрацию</CreateASecretBtn>
            </CreateASecretButtonContainer>
        )
    }

}

export default withRouter(CreateASecretButton);
