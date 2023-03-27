import React,{useState,useEffect} from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'


export const initialUser = {
  firstName:"",
  lastName:"",
  email:"",
}

const UserLayout = () => {

  const [users,setUsers] = useState([])
  const [edit,setEdit] = useState(false)
  const [currentUser,setCurrentUser] = useState(initialUser)

  useEffect(()=>{
   let userData = JSON.parse(localStorage.getItem('users'))   
   if(userData){
    setUsers(userData)
   }
  },[])


  const handleEditUser = (data) =>{      
      setEdit(true)
       const updatedUser = users.filter((user)=>(
          user.email === data.email                                      
       ))          
      setCurrentUser(updatedUser[0])             
      setEdit(true)
      
  }

  const deleteUser = (data) => {    
    setEdit(false)
    const userDeleteData = users.filter(user => user.email !== data.email)
		setUsers(userDeleteData)                 
    localStorage.setItem('users', JSON.stringify(userDeleteData));   
  }

 



  return (
    <div className='user-row'>
        <div className='col-50'>
            <UserForm users={users} setUsers={setUsers} edit={edit} currentUser={currentUser} setEdit={setEdit} setCurrentUser={setCurrentUser} />
        </div>
        <div className='col-50'>
            <UserTable users={users} edit={edit} setEdit={setEdit} handleEditUser={handleEditUser} deleteUser={deleteUser} />
        </div>
    </div>
  )
}

export default UserLayout