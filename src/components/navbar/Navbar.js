import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react'

export default class Navbar extends Component {
    

    logout = () => {
        sessionStorage.removeItem('show');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        window.location.href = '/';
      }
    
  render() {
    return(
        <>
        <nav className="navbar">
            <div className="nav_icon">
                <li className="fa fa-bars"></li>
            </div>
            <div className="navbar__left">
                <Link to="/addmovie">AddMovie</Link>
                <Link to="/addsnack">AddSnack</Link>
                <Link className="active_link" to="/main">Admin</Link>
            </div>
            <div className="navbar_right ">
                <a href="#">
                    <i className="fa fa-searc"></i>
                </a>
                <Link className="logoutarea" onClick={this.logout}>
                    <span className="logouttxt">logout</span> <i class="fa-solid fa-right-from-bracket logoutsize"></i>
                </Link>
            </div>
        </nav>
        </>
    )
  }
}
