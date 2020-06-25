import React ,{useState} from "react";
import {
    Link
  } from "react-router-dom";
import {container, linkStyle} from './style'
import exitIcon from './image/clear-24px.svg'
import homeIcon from './image/home-24px.svg'
import loginIcon from './image/login-24px.svg'
import newIcon from './image/new-24px.svg'

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
                                <div style={{margin:'0 auto', display:'flex', justifyContent:'center', marginTop:'60px'}}>
                                <img src={homeIcon} style={{marginRight:'20px'}} alt="home icon" />
                                <Link style={linkStyle} to="/">Home</Link>
                                </div>
                                <div style={{margin:'0 auto', display:'flex', justifyContent:'center', marginTop:'60px'}}>
                                <img src={loginIcon} style={{marginRight:'20px'}} alt="home icon" />
                                <Link style={linkStyle} to="/login">Login</Link>
                                </div>
                                <div style={{margin:'0 auto', display:'flex', justifyContent:'center', marginTop:'60px'}}>
                                <img src={newIcon} style={{marginRight:'20px'}} alt="home icon" />
                                <Link style={linkStyle} to="/cadastrar">Cadastro</Link>
                                </div>
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