import styled from "styled-components";
import React from 'react';

const Confirmer=styled.div`
    display:flex;
    width:480px;
    font-family:Proxima Nova Light;
    font-size:18px;
    color:rgba(0, 0, 0, 0.5);
    font-weight:bold;
    text-align:center;
    
`
function ConfirmText(){
    return(
        <Confirmer>
            Нажимая эту кнопку, Вы соглашаетесь с условиями пользовательского соглашения
        </Confirmer>
    )
}

export default ConfirmText;