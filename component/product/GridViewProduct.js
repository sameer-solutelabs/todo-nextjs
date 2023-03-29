import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const GridViewProduct = ({products}) => {

    
   
  return (
    <div className='product-row'>
        {
            
            products.products?.map((product)=>{
               
                return(
                    <div className='product-col'>
                        <div className='product-box'>
                            <Link href={`/products/${product.id}`}>
                                <div className='prodcut-image'>
                                    <Image src={product.thumbnail} alt="product title" width={200} height={200} />
                                </div>
                                <h2>{product.title}</h2>
                                <p><b>Description :-</b> {product.description}</p>
                                <p><b>Price :-</b> {product.price}</p>                                                                                 
                            </Link>
                        </div>
                    </div>
                )
                
            })
        }        
    </div>
  )
}

export default GridViewProduct


