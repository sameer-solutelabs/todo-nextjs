import React from 'react'
import Layout from '@/component/Layout/Layout'
import CartLayout from '@/component/cart/CartLayout'

const Cart = () => {

 



  return (
    <div className='main-wrapper'>
        <Layout>
            <div className='heading'>
                <h2>Cart Page</h2>
            </div>
            <CartLayout />
        </Layout>
    </div>
  )
}

export default Cart