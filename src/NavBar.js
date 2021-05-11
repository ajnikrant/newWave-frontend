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
        <div id="navbar">
            <NavLink to="/" exact style={linkStyles} activeStyle={{ background: "darkblue",}} onClick={handleHomeClick}> Home </NavLink>
            <NavLink to="/profile/:id" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> Profile </NavLink>
            <NavLink to="/listings/new" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> Make a new listing </NavLink>

        </div>
    )
}

export default NavBar