import React, {useState} from "react";
import {db,auth} from "../firebase"
import firebase from "firebase/compat/app";

function SendPost () {
    const [post, setPost] = useState("")

    async function sendPost(e) {
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection("posts").add({
            text: post,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setPost("")
    }

    return (
        <div className="create-post">
            <form onSubmit={sendPost}>
                <input value={post} onChange={(e) => setPost(e.target.value)} placeholder="Your Post"/>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default SendPost