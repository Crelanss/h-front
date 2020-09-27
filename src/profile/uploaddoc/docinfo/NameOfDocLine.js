import React from 'react';
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const NameOfDocLineComponent=styled.div`
    height:30%;
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
    label: 'Название документа',
    textAlign:'center',
    multiline: true,
    variant: 'outlined',
    InputProps: {style: inputStyle}
}

function NameOfDocLine(){
    return(
        <NameOfDocLineComponent>
            <TextField {...props}/>
        </NameOfDocLineComponent>
    )
}

export default NameOfDocLine;