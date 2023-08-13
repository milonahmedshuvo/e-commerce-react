import React from 'react'
import DetailsOrders from './DetailsOrders'

const AdminOrder = () => {
      const order = localStorage.getItem("orderData")
      const orderDatas = JSON.parse(order)
     
  return (
    <div>
       

       <div className='grid grid-cols-4 md:grid-cols-4 my-10 border-t border-b' >

            <div className='flex justify-center items-center'>
                <p>Image</p>
            </div>

            <div className='flex justify-center items-center'>
                <p>Product name</p>
            </div>

            <div className='flex justify-center items-center'>
                <p>Total price</p>
            </div>

            <div className='flex justify-center items-center'>
                <p>User name</p>
            </div>
       </div>

       {
        orderDatas.map((order, id) => <DetailsOrders
        key={id}
        order={order}
        ></DetailsOrders>)
       }
    </div>
  )
}

export default AdminOrder
