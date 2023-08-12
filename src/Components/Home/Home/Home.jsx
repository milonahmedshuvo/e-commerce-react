import React, { useContext, useState } from 'react'
import ProductSingle from './ProductSingle'
import { MyContext } from '../../Context/ContextApp'
import { json } from 'react-router-dom'

const Home = () => {
      const {setProductDatails} = useContext(MyContext)
      const [allProduct, setAllProduct ] = useState([])

const products =[
  {
    "id":"1",
    "name": "iPhone 14 pro",
    "image": "https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg",
    "display": "5.4-inch display",
     "price" : "999"
  },
   {
    "id":"2",
    "name": "iPhone 14",
    "image": "https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Plus.jpg",
    "display": "6.2-inch display",
     "price" : "899"
  },
  {
    "id":"3",
    "name": "iPhone 13",
    "image": "https://www.mobiledokan.com/wp-content/uploads/2021/10/Apple-iPhone-13-Pro-image.jpg",
    "display": "5.4-inch display",
     "price" : "799"
  },
  {
    "id":"4",
    "name": "iPhone 14 pro",
    "image": "https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro.jpg",
    "display": "6.4-inch display",
     "price" : "999"
  },
  {
    "id":"5",
    "name": "iPhone 13 pro",
    "image": "https://www.mobiledokan.com/wp-content/uploads/2020/10/Apple-iphone-12.jpg",
    "display": "5.6-inch display",
     "price" : "999"
  },
  {
    "id":"6",
    "name": "iPhone 12 pro",
    "image": "https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14.jpg",
    "display": "5.2-inch display",
     "price" : "999"
  }
]




  const singleProduct = (id) => {
       console.log(id)
       const oneProdcut = products.filter((el) => el.id === id)
       console.log(oneProdcut)
       setProductDatails(oneProdcut)
       localStorage.setItem("product", JSON.stringify(oneProdcut))

  }


  var mergeArray = [];

  const addToCardProduct = (id) => {
    
    const product = products.filter(product => product.id === id);
    const [obj] = product
    mergeArray.push(obj); 
    localStorage.setItem("addToCard", JSON.stringify(mergeArray))
    }

 

  
  


  
  
 


 
  


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 mb-20'>
      

        {
          products.map((product, ind) => <ProductSingle
          key={ind}
          product={product}
          singleProduct={singleProduct}
          addToCardProduct={addToCardProduct}
          ></ProductSingle> )
        }

    </div>
  )
}

export default Home
