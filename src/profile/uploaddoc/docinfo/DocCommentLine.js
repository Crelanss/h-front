import React from 'react';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const DocCommentLineComponent=styled.div`
    height:70%;
    width:100%;
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
    label: 'Комментарий к документу',
    textAlign:'center',
    multiline: true,
    variant: 'outlined',
    InputProps: {style: inputStyle}
}


function DocCommentLine(){
    return(
        <DocCommentLineComponent>
            <TextField {...props}/>
        </DocCommentLineComponent>
    )
}

export default DocCommentLine;