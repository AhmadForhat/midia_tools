import React from "react";
import {
    Link
  } from "react-router-dom";
import {container} from './style'

function Navbar() {
    return (
        <nav style={container}>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            </ul>
        </nav>
    )
  }

export default Navbar