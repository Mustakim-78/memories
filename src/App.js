import React from 'react';
import { Container } from '@material-ui/core';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import UserAuth from './components/UserAuth/UserAuth.js';

function App() {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={UserAuth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
