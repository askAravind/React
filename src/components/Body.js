import React from 'react'
import { Route, Switch,  NavLink} from 'react-router-dom'
import UserList from './UserList'
import UserProfile from './UserProfile'

const BodyRoute = () => {
    return (
        <div>
            

            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h3 className="page-title">Admin Panel</h3>
                        
                        <NavLink to="/" className="tabs">User List</NavLink>
                        <NavLink to="/userProfile/:id" className="tabs">User Profile</NavLink>
                        <Switch>
                            <Route path="/" exact component={UserList} />
                            <Route path="/userProfile/:id" component={UserProfile} />
                        </Switch>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BodyRoute
