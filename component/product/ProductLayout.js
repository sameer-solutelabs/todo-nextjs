import React, { useState } from 'react'
import ListViewProduct from './ListViewProduct'
import GridViewProduct from './GridViewProduct'


const ProductLayout = ({products}) => {

  const [toggle,setToggle] = useState(false)

  return (
    <section className='product-list'>
        <div className='container'>            
            <div className='product-heading'>
                <h2>Product List</h2>
                <div className='product-format'>
                <button onClick={()=> setToggle(false)} className={`${toggle ? '' : 'active'}`}>GridView</button>                    
                    <button onClick={()=> setToggle(true)} className={`${toggle ? 'active' : ''}`}> ListView</button>
                    
                </div>
            </div>
            {
              toggle ? <ListViewProduct products={products} /> : <GridViewProduct products={products} /> 
            }            
        </div>
    </section>
  )
}

export default ProductLayout

