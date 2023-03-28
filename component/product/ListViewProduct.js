import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ListViewProduct = ({products}) => {

  return (
    <div className='product-row list-view-product'>
        {
            products.products?.map((product)=>{
                console.log(product)
                return(
                    <div className='product-col'>
                        <div className='product-box'>                                                      
                            <div className='prodcut-image'>
                                <Link href={`/product/${product.id}`}>
                                    <Image src={product.thumbnail} alt="product title" width={200} height={200} />
                                </Link>
                            </div>
                            <div className='list-view-content'>
                                <h2>{product.title}</h2>
                                <p><b>Description :-</b> {product.description}</p>
                                <p><b>Price :-</b> {product.price}</p>                               
                                <p><b>Rating :- </b>{product.rating}</p>
                                <p><b>Stock :- </b>
                                    {product.stock}
                                </p>
                            </div>                                                       
                        </div>
                    </div>
                )
                
            })
        }        
    </div>
  )
}

export default ListViewProduct


