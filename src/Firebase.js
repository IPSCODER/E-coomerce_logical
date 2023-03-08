// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/compat/app"
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyAaTVuoqErV4Y3Uh3pNDp971ZSopuVWc1A",
    authDomain: "e-shop-3998f.firebaseapp.com",
    projectId: "e-shop-3998f",
    storageBucket: "e-shop-3998f.appspot.com",
    messagingSenderId: "200317850256",
    appId: "1:200317850256:web:4239044281b137d2da7e15",
    measurementId: "G-CGDCYT26QX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth()

  export {db,auth}