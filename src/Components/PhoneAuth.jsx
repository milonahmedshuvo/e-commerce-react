import React, { useContext, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import { MyContext } from './Context/ContextApp'
import 'firebaseui/dist/firebaseui.css'

const PhoneAuth = () => {
      const {auth} = useContext(MyContext)

      useEffect(() => {
         const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth) 
         ui.start(".phone-container", {
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // signInSuccessUrl: ""
         })
      })


      

  return (
    <div className='phone-container my-20'>
       
    </div>
  )
}

export default PhoneAuth
