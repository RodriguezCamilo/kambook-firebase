import React, {useState, useEffect} from "react";
import {db} from "../firebase"


function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts").orderBy("createdAt").limit(20).onSnapshot((snapshot)=> {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return(
        <div>
            {posts?.map(({id, text, photoURL})=> (
                <div className="posts" key={id}>
                    <img src={photoURL} alt="profile"/>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts