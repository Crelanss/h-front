import React from 'react';
import styled from "styled-components";
import {TextField} from "@material-ui/core";

const SearchLineComponent=styled.div`
    height:10%;
    width:100%;
    display:flex;
`
const SearchLineContainer=styled.div`
    height:100%;
    width:95%;
`
const textFieldStyle = {
    width: '100%',
    height: '100%'
}
const inputStyle = {
    width: '100%',
    height: '100%',
    position:'absolute',
    textAlign:'center',
}
const props = {
    style: textFieldStyle,
    label: 'Workings',
    textAlign:'center',
    multiline: true,
    variant: 'outlined',
    InputProps: {style: inputStyle}
}

const SearchButton=styled.button`
    width:5%;
    height:100%;
    border:1px solid rgba(0, 0, 0, 0.3);
    background:url(/search.svg) no-repeat;
    background-size:40px;
    background-position:center;
    border-radius:4px;
    border-left:none;
`

function SearchLine(){
    return(
        <SearchLineComponent>
            <SearchLineContainer>
                <TextField {...props}/>
            </SearchLineContainer>
            <SearchButton />
        </SearchLineComponent>
    )
}

export default SearchLine;