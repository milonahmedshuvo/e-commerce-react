import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context/ContextApp'

const CheckOutPage = () => {
      const {user,totalPrice, productQuantity } = useContext(MyContext)
      const local = localStorage.getItem("addToCard")
      const checkoutProduct= JSON.parse(local)
      const [products] = checkoutProduct
      const {image,name} = products
      const [order, setOrder] = useState([])
      


      var mergeArray = []
    
      const handleOrder = (event) => {
            event.preventDefault()
            const phone = event.target.phone.value
            const userName = event.target.name.value
            const address= event.target.address.value

            const orderDatails = {
                phone,
                userName,
                address,
                image,
                name,
                totalPrice
            }            
            mergeArray.push(orderDatails)
            localStorage.setItem('orderData',JSON.stringify(mergeArray))
            console.log(mergeArray)
        }

       

        
        


       



  return (
    <div>
        

        <div className='mt-10'>
            <form onSubmit={handleOrder}>
              
                 <input type="text" disabled value={user?.phoneNumber} name='phone' className='input ml-2 input-bordered w-1/3' />
                 <input type="text" placeholder='Name' name='name' className='input ml-2 input-bordered w-1/3' />
                <div className='mt-5'>
                <input type="text" placeholder='address' name='address' className='input ml-2 input-bordered w-1/3' />
                </div>


                <div className='grid grid-cols-1 lg:grid-cols-2 mt-20 mb-10 border-t border-b border-r border-l py-2'>

                     <div>
                        <img src={image} className='w-52 h-28' alt="" />
                     </div>

                     <div className='flex items-center'>
                         <div>
                         <p>{name}</p>
                        <p>Total price: <span className='text-xl ml-2'>{totalPrice}</span> </p>
                        <p>Product quantity:<span className='text-xl ml-2'>{productQuantity}</span> </p>
                         </div>
                     </div>

                </div>







                 
               
              <div>
              <input type="submit" value="Confrom" className='bg-blue-500 py-2 font-semibold text-white w-1/3 ' />
              </div>
            </form>
        </div>

    </div>
  )
}

export default CheckOutPage
