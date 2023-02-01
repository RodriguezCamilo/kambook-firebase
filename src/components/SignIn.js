import React from 'react'
import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from "../firebase.js"

function SignIn() {
    function signInGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <button className='log' onClick={signInGoogle}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default SignIn