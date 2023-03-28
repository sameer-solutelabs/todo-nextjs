import React,{useContext, useState} from 'react'
import Link from 'next/link'

import LoginContext from '../context/useContext'

const Header = () => {

    const [active,setActive] = useState(null)

    const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext) 

    const handleLogout = () =>{
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('login')
    }
    
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href="/">
                    <h1>solutelabs</h1>
                </Link>
            </div>
            <ul className='menu'>
                <li onClick={()=>setActive('home')} className={`${active === 'home' ? 'active' : ''}`}><Link href="/">Home</Link></li>
                <li onClick={()=>setActive('product')} className={`${active === 'product' ? 'active' : ''}`}><Link href="/product">Products</Link></li>
                {isLoggedIn ?
                    <li onClick={()=>setActive('users')} className={`${active === 'users' ? 'active' : ''}`}><Link href="/user">users</Link></li> : ""
                }
                
                <li onClick={()=>setActive('about')} className={`${active === 'about' ? 'active' : ''}`}><Link href="/about">about</Link></li>
                <li onClick={()=>setActive('cart')} className={`${active === 'cart' ? 'active' : ''}`}><Link href="/cart">cart</Link></li>
                {isLoggedIn ? 
                    <>                        
                                               
                        <li><Link href="/" onClick={handleLogout}>Logout</Link></li>
                    </> :                  
                    <li><Link href="/login">Login</Link></li>
                }
            </ul>
        </div>
    </header>
  )
}

export default Header