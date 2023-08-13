import React, { createContext, useContext, useEffect, useState } from 'react'
export const MyContext = createContext()

import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import {onAuthStateChanged} from "firebase/auth"






const ContextApp = ({children}) => {
    const [user, setUser] = useState({name : "shuvo"})
    const [productdatails, setProductDatails] = useState([])
    const [totalPrice, setTotalPrice] = useState(0) 
    const [productQuantity, setProductQuantity] = useState(0)

     

      const firebaseConfig = {
        apiKey: "AIzaSyAQQo4y3QGzX6bJ4nX5Bjz6OJ-A3jXk0bg",
        authDomain: "phone-number-authenticat-988fa.firebaseapp.com",
        projectId: "phone-number-authenticat-988fa",
        storageBucket: "phone-number-authenticat-988fa.appspot.com",
        messagingSenderId: "11921006722",
        appId: "1:11921006722:web:d5e7283f5b962d88d7949b"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);



    

     useEffect(()=>{
      const unSubcribe = onAuthStateChanged(firebase.auth(), (currentUser) => {
           console.log(currentUser)
           setUser(currentUser)
      })

      return () => unSubcribe()
     })


    let auth = firebase.auth()
    const info = { user,setProductDatails, productdatails, auth, setTotalPrice, totalPrice, productQuantity, setProductQuantity}
  return (
    <div>
       <MyContext.Provider value={info}>
          {children}
        </MyContext.Provider>  
    </div>
  )
}

export default ContextApp
