import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService.js'
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.hasLoggedin();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><span className="navbar-brand">SAFEX</span></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/bishal">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/dash">Dashboard</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logOut}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
 
export default withRouter(Header);