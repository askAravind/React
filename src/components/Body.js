import React from 'react'
import { Route, Switch,  NavLink} from 'react-router-dom'
import UserList from './UserList'
import UserProfile from './UserProfile'
import AboutPage from './AboutPage'

const BodyRoute = () => {
    return (
        <div>
            

            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        
                        <NavLink to="/About" className="about-navlink">About us</NavLink>
                        <NavLink to="/">Home</NavLink>
                        <h3 className="page-title">Admin Panel</h3>
                        
                        <NavLink to="/" className="tabs" activeClassName="active">User List</NavLink>
                        <NavLink to="/userProfile/:id" className="tabs" activeClassName="active-nav">User Profile</NavLink>
                        <Switch>
                            <Route path="/" exact  component={UserList} />
                            <Route path="/userProfile/:id" component={UserProfile} />
                            <Route path="/About" component={AboutPage}/>
                        </Switch>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BodyRoute
