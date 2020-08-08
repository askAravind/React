import React, { useContext} from 'react'


import { UserContext } from '../context api/UserContext'

const UserList = (props) => {
    // const [users, setUsers] = useState([{}])
    const context = useContext(UserContext)

    // useEffect(()=>{
    //     axios.get('https://reqres.in/api/users?page=1').then(res => {
    //         setUsers(res.data.data)
            
            
    //     })
    // },[])
    // console.log(" context" , context)
    return (
        <div>
            
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    context.map((user,index) => (
                        
                        <tr key={index} onClick={()=>props.history.push(`/userProfile/${user.id}`)}>
                            <th scope="row">{user.id}</th>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                        
                    ))
                }
                
                
                
            </tbody>
            </table>
        </div>
    )
}

export default UserList
