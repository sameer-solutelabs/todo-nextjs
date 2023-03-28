import React from 'react'
import Layout from '@/component/Layout/Layout'
import ProductLayout from '@/component/product/ProductLayout'
import MOCK_DATA from '../../component/MOCK_DATA.json'

const Product = ({products}) => {
  return (
    <div className='main-page'>
        <Layout>           
            <ProductLayout products={products} />        
        </Layout>
    </div>
  )
}

export default Product

export const getServerSideProps = async () =>{

  return{
      props:{
          products : MOCK_DATA
      }
  }
}