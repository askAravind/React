import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios'
export const UserContext = createContext()


const UserContextProvider = (props) => {
    const [users, setUsers] = useState([{}])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=1').then(res => {
            setUsers(res.data.data)
            
            
        })
    },[])
    
    return (
        <UserContext.Provider value={[...users]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
