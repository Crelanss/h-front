import React from 'react';
import styled from "styled-components";

const Navbar=styled.div`
  display:flex;
  width:100vw;
  height:9vh;
  align-content:center;
  align-items:center;
`
const Line=styled.div`
position:absolute;
width: 100%;
height: 3.79px;
background: #C4C4C4;
top:9vh;
`
const LogoImg=styled.img`
     margin-left:170px;
`

function Header(){
    return(
        <Navbar>
            <LogoImg src={'/logo.svg'}/>
            <Line/>
        </Navbar>
    );
}
export default Header;

