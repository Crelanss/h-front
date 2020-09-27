import React from 'react';
import styled from "styled-components";
import ListOfData from "./ListOfData";
import DocList from "./DocList";
import {withRouter} from 'react-router-dom';

const DocMenuComponent=styled.div`
    height:85%;
    width:100%;
    display:flex;
    justify-content:center;
    background:white;
`
const DocListComponentForm=styled.div`
    height:100%;
    width:95%;
    display:flex;
    flex-direction:column;
`
const PlusButtonContainer=styled.div`
    width:97%;
    height:10%;
    margin-top:10%;
    display:flex;
    justify-content:flex-end;
`
const PlusButton=styled.button`
    height:50px;
    width:50px;
    border-radius:50px;
    border:none;
    background-image:url(/plus.svg)
`
class DocMenu extends React.Component{
    constructor(props) {
        super(props);
    }
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <DocMenuComponent>
                <DocListComponentForm>
                    <ListOfData/>
                    <DocList/>
                    <PlusButtonContainer>
                        <PlusButton onClick={() => this.nextPath('/profile/uploaddoc') }/>
                    </PlusButtonContainer>
                </DocListComponentForm>
            </DocMenuComponent>
        )
    }
}

export default withRouter(DocMenu);