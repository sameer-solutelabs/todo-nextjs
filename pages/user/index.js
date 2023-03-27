import React from 'react'
import Layout from '@/component/Layout/Layout'
import UserLayout from '@/component/user/UserLayout'

const product = () => {
  return (
    <div className='main-page'>
      <Layout>
        <UserLayout />
      </Layout>
    </div>
  )
}

export default product