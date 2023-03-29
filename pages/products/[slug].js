import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Layout from '@/component/Layout/Layout'
import RightArrow from '../../assets/arrowRight.png'
import LeftArrow from '../../assets/arrowLeft.png'
import MOCK_DATA from '../../component/MOCK_DATA.json'


const ProductDetails = ({products}) => {

  // console.log(products.variant[0],'products')
 
  const [quantity,setQuantity] = useState(0)   
  const [error,setError] = useState('')
  const [prevData,setPrevData] = useState([])
  const [size,setSize] = useState(0)

  console.log(size,"size")
  

  const handleQuantity = (type) => {
    type === 'inc' ?
    setQuantity((prev) => prev + 1) 
    : quantity === 0 ? null 
    : setQuantity((prev)=> prev - 1)
    setError("")
    
  }

  const validationHandler = () =>{
    if(quantity === 0){
      setError ({message:'Please choose Quantity',state:0})
    } else {      
      setError({message:'SuccessFully Added',state:1})   
    }  
  }

  const addToCart = () => {
    validationHandler()

    const productData = {
      id:products.id,
      image:products.thumbnail,
      title:products.title,
      description:products.description,
      price:products.variant[size].price,                 
      quantity:quantity
    }

    console.log(productData,'productdata')

 
    if(error.state !== 0  && products.purchaseQuantity !== undefined && quantity <= products.purchaseQuantity){       
      if(prevData.length > 0){
        const data = prevData.filter((data)=> data.id === productData.id)
        console.log(data,"data")
        if(data?.length > 0){
          data[0].quantity = quantity
          localStorage.setItem('addTocart',JSON.stringify([...prevData]))
        } else {
          localStorage.setItem('addTocart',JSON.stringify([...prevData,productData]))
        }     
      } else {
        localStorage.setItem('addTocart',JSON.stringify([productData]))
      }      
    } else {
        if(prevData.length > 0){
          const data = prevData.filter((data)=> data.id === productData.id)
          console.log(data,"data")
          if(data?.length > 0){
            data[0].quantity = quantity
            localStorage.setItem('addTocart',JSON.stringify([...prevData]))
          } else {
            localStorage.setItem('addTocart',JSON.stringify([...prevData,productData]))
          }     
        } else {
          localStorage.setItem('addTocart',JSON.stringify([productData]))
        }
      } 

      if (products.purchaseQuantity !== undefined && quantity > products.purchaseQuantity){
        setError({message:`Purchase limit Exceeded ${products.purchaseQuantity}`,state:0})
      }  

  }

  useEffect(()=>{
    if(typeof window !== "undefined" && localStorage.getItem('addTocart')){
      const data = JSON.parse(localStorage.getItem('addTocart'))
      setPrevData(data)    
      if(data.length > 0){     
        const quantityId = data?.filter((data)=> data.id === products.id).length > 0 ? data?.filter((data)=> data.id === products.id)[0].quantity : 0        
        setQuantity(quantityId)
      }      
    }
  },[])

  return (
    <div className='main-wrapper'>
    <Layout>
      <section className='heading pt-[30px]'>
        <h2>Product Details</h2>
      </section>
      <section className='product-details'>
          <div className='col-50'>
              <div className='product-detail-img'>
                  <Image src={products.thumbnail} alt="productImage" width={400} height={400} />
              </div>
          </div>
          <div className='col-50'>
              <div className='product-info'>
                <h2>{products.title}</h2>
                <h3>{products.description}</h3>
                <p><b>Price :-</b> {products.variant[size].price} </p>               
                <p><b>Rating :-</b> {products.rating}</p>
                <p><b>Stock :-</b> {products.variant[size].stock} </p>
                <div className='variant-row'>
                  <p><b>Variant:-</b> </p>
                  <ul className='sizeVariants'>                  
                      <li onClick={()=>setSize(0)} className={size === 0 ? "selected" : ''}>32 GB</li>   
                      <li onClick={()=>setSize(1)} className={size === 1 ? "selected" : ''}>64 GB</li>                 
                  </ul>
                </div>
                <div className='counter-row'>
                  <label>Quantity :-</label>
                  <div className='counter-arrow'>                                           
                      <div className='icon'>
                          <Image src={LeftArrow} alt="Left Arrow" width={20} height={20} objectFit="contain" onClick={()=>handleQuantity("dec")} />
                      </div>                         
                      <span>{quantity}</span>                   
                      <div  className={`${quantity >= products.variant[size].stock ? 'disable icon' : 'icon'}`}>
                          <Image src={RightArrow} alt="Left Arrow" width={20} height={20} objectFit="contain" onClick={()=>handleQuantity("inc")} />
                      </div>                    
                  </div>
                </div>
                <div className='add-btn'>
                  <button onClick={addToCart}>Add To Cart</button>
                </div>
                <div className='error-row'>
                  <p className={`${error.state === 1 ? 'text-green-500' : 'text-red-500'}`}>{error.message}</p>
                </div>
              </div>
          </div>
      </section>
    </Layout>
    </div>
  )
}

export default ProductDetails


export const getServerSideProps = async (context) =>{

  const productId = +context.params.slug

  const product = MOCK_DATA.products.filter(product => productId === product.id)[0]

  // console.log(product,'product')

  return{
      props:{
          products : product
      }
  }
}