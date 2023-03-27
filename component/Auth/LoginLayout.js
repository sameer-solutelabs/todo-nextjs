import React,{useState,useContext} from 'react'
import { Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup';
import ErrorComponent from '../common/ErrorComponent';
import LoginContext from '../context/useContext';
import { useRouter } from 'next/router';

const LoginLayout = () => {

    const [data,setData] = useState(null)
    const {isLoggedIn,setIsLoggedIn} = useContext(LoginContext) 

    const initialValues ={
        email:'',
        password:''
    }

    const navigate = useRouter()

    const validationSchema = Yup.object().shape ({
        email: Yup.string()
            .email('Invalid email')
            .required('Please enter email id'),
        password: Yup.string()
            .min(8,"Password must be at least 8 characters")
            .matches(/[a-z]/,"Please enter lowercase letter")
            .matches(/[A-Z]/,"Please enter uppercase letter")
            .required('Password must be required')
    })
 
    const handleSubmit = (values) =>{
        setData(values);
        setIsLoggedIn(true)
        console.log('email',initialValues.email,'password',initialValues.password,values)
        if(values.email && values.password){          
            navigate.push('/')
            localStorage.setItem('login',[values.email,values.password])
            localStorage.setItem('isLoggedIn',true)
        }

        
    }

  return (
    <>
        <div className='heading'>
            <h2>Login</h2>
        </div>
        <Formik
            initialValues={data || initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnMount={false}         
        >
            <Form className='login-form'>
                <div className='form-group'>
                    <label>Email id</label>
                    <Field type="text" className='form-control' name="email" />
                    <ErrorMessage name="email" component={ErrorComponent} />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <Field type="password" className='form-control' name="password" />
                    <ErrorMessage name="password" component={ErrorComponent} />
                </div>
                <div className='submit-btn'>
                    <button type="submit">Login</button>
                </div>
            </Form>
        </Formik>
    </>
  )
}

export default LoginLayout