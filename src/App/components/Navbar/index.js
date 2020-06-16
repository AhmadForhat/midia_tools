import React ,{useState} from "react";
import {
    Link
  } from "react-router-dom";
import {container, linkStyle} from './style'
import exitIcon from './image/clear-24px.svg'

function Navbar({title}) {
    const [hamburger, setHamburger] = useState('false')
    return (
        <>
                {hamburger &&
                    <img onClick={() => {hamburger ? setHamburger(false) : setHamburger(true)}} src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="Menu logo" style={{width:'30px', marginTop:'10px', marginLeft:'20px', position: 'fixed'}}/>
                }
                {!hamburger && 
                    <nav style={container}>
                            <img src={exitIcon} onClick={() => {hamburger ? setHamburger(false) : setHamburger(true)}} style={{width:'30px', marginLeft:'20px', marginTop:'0.8rem'}} alt="exit menu logo"/>
                            <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                                <Link style={linkStyle} to="/">Home</Link>
                                {/* <Link style={linkStyle} to="/about">About</Link>
                                <Link style={linkStyle} to="/users">Users</Link> */}
                                <Link style={linkStyle} to="/login">Login</Link>
                            </div>
                    </nav>
                }
            <div style={{display:'flex', justifyContent:'center'}}>
                <h2>{title}</h2>
            </div>
        </>
    )
  }

export default Navbar