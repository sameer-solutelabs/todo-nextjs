import React from 'react'
import * as Yup from 'yup';


const ErrorComponent = (props) => {
  return (
    <p className='error-text'>{props.children}</p>
  )
}

export default ErrorComponent