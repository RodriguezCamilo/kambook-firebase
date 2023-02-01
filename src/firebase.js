import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp( {
        apiKey: "AIzaSyAHomVi0C2XXizTbdGOXLdXLcxeVEK-MAI",
        authDomain: "kambook-804df.firebaseapp.com",
        projectId: "kambook-804df",
        storageBucket: "kambook-804df.appspot.com",
        messagingSenderId: "1083249178058",
        appId: "1:1083249178058:web:b64c24ff1ab1aa07bf4b33",
        measurementId: "G-KPFPJG7C47"

})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}