// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'

// const WithAuth = (ComponentToProtect) => {
//     const history = useHistory()

//     return class extends Component {
//         constructor(props) {
//             super(props)
//             this.state = {
//                 loading:true,
//                 redirect:false
//             }
//         }

//         compoenetDidMount() {
//             fetch('/checkToken')
//             .then(res => {
//                 if(res.states === 200){
//                     this.setState({
//                         loading : false
//                     })
//                 } else {
//                     const error = new Error(res.error)
//                     throw error
//                 }
//             })
//             .catch(err => {
//                 console.error(err)
//                 this.setState({
//                     loading : false,
//                     redirect : true
//                 })
//             })
//         }

//         render() {
//             const {loading, redirect} = this.state
//             if(loading) {
//                 return null
//             }

//             if(redirect) {
//                 // history.push('/signin')
//                 return <Redirect to="/" />
//             }

//             return <ComponentToProtect {...this.props} />
//         }
//     }
// }

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