import React from 'react';
import styled from "styled-components";
import Header from './header/Header'
import LoginRegister from "./authorisation/Body";
import Profile from "./profile/Profile";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CreateASecretQuestion from "./authorisation/createASecreetQuestion/CreateASecretQuestion";

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
                    <Route path={'/auth'}>
                        <LoginRegister/>
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

