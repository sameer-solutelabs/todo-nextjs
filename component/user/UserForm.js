import React, { useEffect, useState } from 'react'
import ErrorComponent from '../common/ErrorComponent'
import { Formik,Field,ErrorMessage,Form} from 'formik'
import * as Yup from 'yup';
import { initialUser } from './UserLayout';

const UserForm = ({users,setUsers,edit,currentUser,setCurrentUser,setEdit}) => {    

 
    const initialValues = currentUser

    const validationSchema = Yup.object().shape ({        
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid Email')
            .required('Please enter email id')
    })

    const handleSubmit = (values,{resetForm}) =>{  
        if (edit) {
            const updatedUser = users.map((user) =>{ 
                if(user.email === currentUser.email){
                   return values
                }
                return user
            })           
            setUsers(updatedUser)
            setEdit(false)
            setCurrentUser(initialUser)
            localStorage.setItem('users', JSON.stringify(updatedUser));   
        }else{     
            setUsers([...users,values])   
            resetForm() 
            localStorage.setItem('users', JSON.stringify([...users, values])); 
        }
        
    }


  return (
    <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnMount={false}   
            enableReinitialize      
        >
        <Form className='login-form'>
            <div className='form-group'>
                <label>First Name</label>
                <Field type="text" className='form-control' name="firstName"  />
                <ErrorMessage name="firstName" component={ErrorComponent} />
            </div>
            <div className='form-group'>
                <label>Last Name</label>
                <Field type="text" className='form-control' name="lastName" />
                <ErrorMessage name="lastName" component={ErrorComponent} />
            </div>
            <div className='form-group'>
                <label>Email Id</label>
                <Field type="text" className='form-control' name="email" />
                <ErrorMessage name="email" component={ErrorComponent} />
            </div>
            <div className='submit-btn'>
                <button type="submit">
                    {edit ? "Update" : "Submit"}                                            
                </button>

              
            </div>
        </Form>
    </Formik>
  )
}

export default UserForm