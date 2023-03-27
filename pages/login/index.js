import React from 'react'
import Layout from '@/component/Layout/Layout'
import LoginLayout from '@/component/Auth/LoginLayout'

const Login = () => {
  return (
    <div className='main-page'>
        <Layout>
            <LoginLayout />
        </Layout>
    </div>
  )
}

export default Login