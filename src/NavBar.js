import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar({ catClicked, setCatClicked, setSelectedCat }){
    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

      function handleHomeClick() {
        setCatClicked(false)
        setSelectedCat("All")
      }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li class="nav-item">
               <NavLink className="nav-link" to="/" exact onClick={handleHomeClick}> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile/:id" exact> Profile </NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to="/listings/new" exact> Make a new listing </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}









export default NavBar