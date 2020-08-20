import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const SignIn = () => {
    const history = useHistory()

    const [ user, setUser ] = useState({
        email : "",
        password : ""
    })

    function handleInputChange(e) {
        e.preventDefault()
 
        const { value, name } = e.target

        setUser({
            ...user,
            [name] : value
        })
    }

    function onSubmit(e) {
        e.preventDefault()

        fetch('/api/signin', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => {
            if(res.status === 200){
                history.push('/')
                // history.push('/items')
            } else {
                const error = new Error(res.error)
                
                throw error
            }
        })
        .catch(err => {
            console.error(err)
            alert('Error loggin in please try again')
        })
    }

    return (
        <Form onSubmit={onSubmit} >
            <h1>SignIn Page</h1>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleInputChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleInputChange} required />
            </Form.Group>

            <Button type="submit">Sign In</Button>
        </Form>

        // <MDBContainer>
        //     <MDBRow>
        //         <MDBCol md="6">
        //         <form>
        //             <p className="h5 text-center mb-4">Sign in</p>
        //             <div className="grey-text">
        //             <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
        //                 success="right" />
        //             <MDBInput label="Type your password" icon="lock" group type="password" validate />
        //             </div>
        //             <div className="text-center">
        //             <MDBBtn>Login</MDBBtn>
        //             </div>
        //         </form>
        //         </MDBCol>
        //     </MDBRow>
        // </MDBContainer>
    )
}

export default SignIn