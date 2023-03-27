import React, { useEffect, useState } from 'react'

const UserTable = ({users,handleEditUser,deleteUser}) => {

    const [selectedUser,setSelectedUser] = useState([])
   
    const hadleCheckbox = (e,user) => {
        
        if(e.target.checked){
            setSelectedUser([...selectedUser,user])
        } else {
            setSelectedUser(selectedUser.filter(userData => userData.email !== user.email))
        }
    }
    console.log(selectedUser,'slectedUser')

  return (
    <table className='table'>
        <thead>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email id</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.length > 0 ?  (                    
                    users.map((user)=>{                                             
                        return(
                            <tr key={user.email} className={`${selectedUser.includes(user) ? 'bg-black-tr' : ''}`}>
                                <td>
                                    <div className='checkox' onClick={(e)=>hadleCheckbox(e,user)}>
                                        <input type="checkbox" className='form-control' />
                                    </div>
                                </td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='table-btn' onClick={()=>handleEditUser(user)}>Edit</button>
                                    <button className='table-btn' onClick={()=>deleteUser(user)}>Delete</button>
                                </td>
                                
                            </tr>
                        )
                        
                        })
                ) : (
                    <tr>
                        <td colSpan={4} style={{textAlign:"center",fontWeight:"bold"}}> No User List</td>
                    </tr>
                )
            }          
        </tbody>
    </table>
  )
}

export default UserTable