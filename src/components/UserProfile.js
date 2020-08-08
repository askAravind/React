import React, { useContext, useState } from 'react'
import { UserContext } from '../context api/UserContext'

const UserProfile = (props) => {
    const context = useContext(UserContext)
    const id = parseInt(props.match.params.id)
    const [userData] = useState(context)

    // form input hooks
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [userType, setUserType] = useState('')
    const [isNewUser,setIsNewUser] = useState('')
    const [isSubmitted, setIsSubmitted] = useState('')

    
    const data = userData.filter(element => element.id === id)
    
    const handleSubmit = (e) => {
        
        e.preventDefault()
        
        // if all data is filled out form data will be displayed in the console.

        if(firstname !== '' && lastname!==''&&email!==''&&userType!==''&&isNewUser!==''){
            const formData = {
                firstName:firstname,
                lastName:lastname,
                email:email,
                typeOfUser: userType,
                isNewUser: isNewUser
            }
            setIsSubmitted(true)
            console.log("form submit Data :",formData)
        }
        else{
            setIsSubmitted(false)
        }
    }
    return (
        <div>
             
            
               
                <>
                {data[0]!== undefined? 
                <div className="details-container">
                    <h2>Name: {`${data[0].first_name} ${data[0].last_name}`}</h2>
                    <h3>Email: {data[0].email}</h3>
                    
                </div>:null}
                
                <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="user-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="input-firstname">First Name</label>
                                    <input className="form-control" 
                                    type="text" id="input-firstname" 
                                    placeholder="Enter First Name"
                                    value={firstname}
                                    onChange={(e)=> setFirstName(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="input-lastname">Last Name</label>
                                    <input className="form-control" 
                                    type="text" id="input-lastname" 
                                    placeholder="Enter Last Name"
                                    value={lastname}
                                    onChange={(e)=> setLastName(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="input-email">Email</label>
                                    <input className="form-control" 
                                    type="email" id="input-email" 
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}></input>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                User Type
                                <select className="form-control form-control-sm"
                                value={userType} onChange={(e)=>setUserType(e.target.value)}>
                                    <option>Regular User</option>
                                    <option>Special User</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                            <div className="form-check">
                                <h5>Gender</h5>
                                 <input className="form-check-input" 
                                 type="checkbox"  id="defaultCheck1" 
                                 value={isNewUser} onChange={(e)=>setIsNewUser(e.target.checked)} />
                                 <label className="form-check-label" htmlFor="defaultCheck1">
                                    New User?
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mt-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            
                        </div>
                        {isSubmitted === false?
                        <div className="row">
                            <div className="col-md-6">
                                <p>Please fill in all the fields!</p>
                            </div>
                        </div>:null}
                    </div>
                </div>
                </form>
                </>
            
            
            
           
           
                
                 
        </div>
    )
}

export default UserProfile
