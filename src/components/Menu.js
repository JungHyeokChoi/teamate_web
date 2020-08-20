import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Items from './Items'
import SignIn from './SignIn'
import SignUp from './SignUp'
import WithAuth from './WithAuth'

const Menu = () => {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Teamate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/items">Items</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link">Another Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="/signin">Sign in</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
            </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/items">
                    <WithAuth>
                        <Items />
                    </WithAuth>
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    )
}
export default Menu