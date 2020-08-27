import React, { useState, useEffect } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'

const Menu = () => {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        fetch('/api/checkCookie')
        .then(res => {
            console.log(res)
            if(login !== res.status){
                if(res.status === 200) setLogin(true)
                else setLogin(false)
            }
        })
    })

    return (
        <Router>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Teamate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {login === true ? <Nav.Link href="/items">Items</Nav.Link> : null }
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                {login === true ? <Nav.Link href="/signout">Logout</Nav.Link> : <Nav.Link href="/signin">Sign in</Nav.Link>}
                {login === false ? <Nav.Link href="/signup">Sign up</Nav.Link> : null}
            </Navbar.Collapse>
            </Navbar>
        </Router>
    )
}

export default Menu
