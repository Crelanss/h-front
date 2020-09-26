import React from 'react';
import styled from "styled-components";
import Header from './header/Header'
import Body from "./authorisation/Body";
import Profile from "./profile/Profile";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const Main=styled.div`
  display:flex;
  flex-direction:column;
`
function App() {
    return (
        <BrowserRouter>
            <Main>
                <Header/>
                <Switch>
                    <Route path={'/register'}>
                        <Body/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile/>
                    </Route>
                </Switch>
            </Main>

        </BrowserRouter>
    );
}

export default App;

