import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartLayout = () => {
   
    const [localFetchData,setLocalFetchData] = useState([])    
   
  
    useEffect(()=>{
        if(typeof window !== "undefined" && localStorage.getItem('addTocart')){
            setLocalFetchData(JSON.parse(localStorage.getItem('addTocart')))             
        }        
    },[])
  
   
   const removeItem = (data) =>{             
        const cartDeleteData = localFetchData.filter(item => item.id !== data.id)
        setLocalFetchData(cartDeleteData)      
        localStorage.setItem('addTocart',JSON.stringify(cartDeleteData))         
   }

  
  
  


  return (
    <section className='cart-layout'>
        <div className='col-65'>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        localFetchData?.map((cart)=>(
                            <tr key={cart.id}>
                                <td><Image src={cart.image} alt="cart" width={150} height={150} /></td>
                                <td>{cart.title}</td>
                                <td>{cart.description}</td>
                                <td>{cart.price}</td>
                                <td>{cart.quantity}</td>
                                <td>{cart.price * cart.quantity}</td>
                                <td style={{cursor:"pointer"}} onClick={()=>removeItem(cart)}>X</td>
                                <td><Link href={`/product/${cart.id}`}>Edit</Link></td>
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>
        </div>
        
    </section>
  )
}

export default CartLayout

