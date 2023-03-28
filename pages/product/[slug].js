import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Layout from '@/component/Layout/Layout'
import RightArrow from '../../assets/arrowRight.png'
import LeftArrow from '../../assets/arrowLeft.png'
import MOCK_DATA from '../../component/MOCK_DATA.json'


const ProductDetails = ({products}) => {
 
  const [quantity,setQuantity] = useState(0)   
  const [error,setError] = useState('')
  const [prevData,setPrevData] = useState([])
  

  const handleQuantity = (type) => {
    type === 'inc' ?
    setQuantity((prev) => prev + 1) 
    : quantity === 0 ? null 
    : setQuantity((prev)=> prev - 1)
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
      price:products.price,                 
      quantity:quantity
    }

    localStorage.setItem('addTocart',JSON.stringify([...prevData,productData]))

  }

  useEffect(()=>{
    if(typeof window !== "undefined" && localStorage.getItem('addTocart')){
      setPrevData(JSON.parse(localStorage.getItem('addTocart')))
      console.log(prevData,'prevData')     
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
                <p><b>Price :-</b> {products.price}</p>
                <p><b>DiscountPercentage :-</b> {products.discountPercentage}</p>
                <p><b>Rating :-</b> {products.rating}</p>
                <p><b>Stock :-</b> {products.stock}</p>
                <div className='counter-row'>
                  <label>Quantity :-</label>
                  <div className='counter-arrow'>   
                      <div className='icon'>
                          <Image src={LeftArrow} alt="Left Arrow" width={20} height={20} objectFit="contain" onClick={()=>handleQuantity("dec")} />
                      </div>                         
                      <span>{quantity}</span>
                      <div className='icon'>
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