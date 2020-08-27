import React from 'react'
import { useHistory } from "react-router-dom";

const SignOut = () => {
    const history = useHistory()

    fetch('/api/signout')
    .then(res => {
        if(res.status === 200){
            history.push('/')
        }
    })

    return(
        <>
        </>
    )
}

export default SignOut
