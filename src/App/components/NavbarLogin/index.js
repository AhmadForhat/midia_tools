import React ,{useState} from "react";
import {Link} from "react-router-dom";
import {container, linkStyle} from './style'
import exitIcon from './image/clear-24px.svg'
import homeIcon from './image/home-24px.svg'
import loginIcon from './image/login-24px.svg'

function Navbar({title}) {
    const [hamburger, setHamburger] = useState('false')
    const perfilImg = localStorage.getItem('gitUserAvatar')
    const name = localStorage.getItem('gitUser')
    return (
        <>
                {hamburger &&
                    <img onClick={() => {hamburger ? setHamburger(false) : setHamburger(true)}} src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="Menu logo" style={{width:'30px', marginTop:'10px', marginLeft:'20px', position: 'fixed'}}/>
                }
                {!hamburger && 
                    <nav style={container}>
                            <img src={exitIcon} onClick={() => {hamburger ? setHamburger(false) : setHamburger(true)}} style={{width:'30px', marginLeft:'20px', marginTop:'0.8rem'}} alt="exit menu logo"/>
                            <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                                <img src={perfilImg} alt='Foto perfil git' style={{width:'60%', borderRadius:'100px', margin:'0 auto'}}/>
                                <h3 style={{maxWidth:'50%', margin:'0 auto', marginTop:'20px'}}>{`Olá, ${name}`}</h3>
                                <div style={{margin:'0 auto', display:'flex', justifyContent:'center', marginTop:'60px'}}>
                                <img src={homeIcon} style={{marginRight:'20px'}} alt="home icon" />
                                <Link style={linkStyle} to="/">Dashboard</Link>
                                </div>
                                <div style={{margin:'0 auto', display:'flex', justifyContent:'center', marginTop:'60px'}}>
                                <img src={loginIcon} style={{marginRight:'20px'}} alt="home icon" />
                                <a style={linkStyle} href="/" onClick={() => localStorage.removeItem('isLogged')}>Logout</a>
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