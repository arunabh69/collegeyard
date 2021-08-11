import React, {Component} from 'react';
import './navBar.css'


class NavBar extends Component<any, any> {
    render = () => (
        <div className="navbar">
            <div className="navbar-brand">
                <a href="#"><h2>CollegeYard</h2></a>
            </div>
            <div className="bar-items">
                <a href="#"><h4>Books</h4></a>
                <a href="#"><h4>Tools</h4></a>
                <a href="#"><h4>Roomies</h4></a>
                <a href="#"><h4>Req Item</h4></a>
            </div>
            <div className="nav-right-item">
                <a href="#"><h5>Login</h5></a>
                <a href="#"><h5>Signup</h5></a>
                <a href="#"><h5>Upload</h5></a>
            </div>
        </div>
    );

}

export default NavBar;