import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const WithAuth = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [redirect, setRedirect] = useState(false)
    const history = useHistory()

    useEffect(() => {
        fetch('/checkToken')
        .then(res => {
            if(res.status === 200){
                setLoading(false)
            } else {
                const error = new Error(res.error)
                throw error
            }
        })
        .catch(err => {
            console.error(err)
            setRedirect(true)
        })
    })

    if(loading) {
        return null
    }

    if(redirect) {
        history.push('/signin')
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default WithAuth