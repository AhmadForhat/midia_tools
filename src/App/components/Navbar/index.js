import React ,{useState} from "react";
import {
    Link
  } from "react-router-dom";
import {container} from './style'
import exitIcon from './image/clear-24px.svg'

function Navbar({title}) {
    const [hamburger, setHamburger] = useState('false')
    return (
        <>
        <nav style={{display:'flex', marginTop:'20px', marginLeft:'40px'}}>
            {hamburger &&
            <div>
                <a onClick={() => {hamburger ? setHamburger(false) : setHamburger(true)}}>
                    <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="Menu logo" style={{width:'30px', marginTop:'10px'}}/>
                </a>
            </div>
            }
            {!hamburger &&
                <>
                    <a onClick={() => {hamburger ? setHamburger(false) : setHamburger(true)}}>
                        <img src={exitIcon} style={{width:'30px', marginTop:'10px'}} alt="exit menu logo"/>
                    </a>
                    <div style={container}>
                        <Link style={{textDecoration:'none', color:'200B5C', marginTop:'20px'}} to="/home">Home</Link>
                        <Link style={{textDecoration:'none', color:'200B5C', marginTop:'40px'}} to="/about">About</Link>
                        <Link style={{textDecoration:'none', color:'200B5C', marginTop:'40px'}} to="/users">Users</Link>
                        <Link style={{textDecoration:'none', color:'200B5C', marginTop:'40px', marginBottom:'20px'}} to="/login">Login</Link>
                    </div>
                </>
            }
        </nav>
        <div>
            <h2 style={{display:'flex', justifyContent:'center'}}>{title}</h2>
        </div>
        </>
    )
  }

export default Navbar