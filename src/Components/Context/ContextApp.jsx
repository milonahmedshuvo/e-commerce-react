import React, { createContext, useContext, useState } from 'react'


export const MyContext = createContext()


const ContextApp = ({children}) => {
    const [user, setUser] = useState({name : "shuvo"})
    const [productdatails, setProductDatails] = useState([])
      console.log("product datails: ", productdatails)




    const info = { user,setProductDatails, productdatails }
  return (
    <div>
       <MyContext.Provider value={info}>
          {children}
        </MyContext.Provider>  
    </div>
  )
}

export default ContextApp
