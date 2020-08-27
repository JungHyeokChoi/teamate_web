import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Items from './Items'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './SignOut'
import WithAuth from './WithAuth'

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Menu />
                    <Home />
                </Route>
                <Route path="/items">
                    <WithAuth>
                        <Menu />
                        <Items />
                    </WithAuth>
                </Route>
                <Route path="/signin">
                    <Menu />
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <Menu />
                    <SignUp />
                </Route>
                <Route path="/signout">
                    <SignOut />
                </Route>
            </Switch> 
        </Router>
    )
}
export default Main