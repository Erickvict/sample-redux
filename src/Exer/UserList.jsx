import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
    const values=useSelector((state)=>state.userInfo.users)
  return (
    
    <>
     <div>
            <h2>User List</h2>
            <ul>
                {values.map((user, index) => (
                    <li key={index}>
                        {user.fname} - {user.age} - {user.city}
                    </li>
                ))}
            </ul>
        </div>
    
    </>
  )
}

export default UserList