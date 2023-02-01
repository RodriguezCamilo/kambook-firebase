
import React from 'react'
import {auth} from "../firebase.js"

function SignOut() {
    return (
        <button className="log" onClick={()=> auth.signOut()}>SIGN OUT</button>
    )
}

export default SignOut