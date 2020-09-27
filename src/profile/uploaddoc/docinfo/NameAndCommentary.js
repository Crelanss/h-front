import React from 'react';
import styled from "styled-components";
import NameOfDocLine from "./NameOfDocLine";
import DocCommentLine from "./DocCommentLine";

const NameAndCommentaryComponent=styled.div`
    height:50%;
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

`

function NameAndCommentary(){
    return(
        <NameAndCommentaryComponent>
            <NameOfDocLine/>
            <DocCommentLine/>
        </NameAndCommentaryComponent>
    )
}

export default NameAndCommentary;