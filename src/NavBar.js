import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
    return (
        <div id="NavBar">
            <NavLink to="/" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> Home </NavLink>
            <NavLink to="/profile/:id" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> Profile </NavLink>
            <NavLink to="/listings/new" exact style={linkStyles} activeStyle={{ background: "darkblue",}}> Make a new listing </NavLink>

        </div>
    )
}

export default NavBar