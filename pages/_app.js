import '@/styles/globals.css'
import React,{useState,useEffect} from 'react'
import LoginContext from '@/component/context/useContext'

export default function App({ Component, pageProps }) {

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const isAuth = localStorage.getItem('isLoggedIn')
    if(isAuth){
      setIsLoggedIn(true)
    } 
  },[])

  return (
    <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}  >
      <Component {...pageProps} />
    </LoginContext.Provider>
  )
  
}
