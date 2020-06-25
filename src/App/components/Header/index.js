import React from "react";
import uxMidia from './image/uxMidia.svg'
import logoMidia from './image/logoMidia.svg'


function Header() {
    return (
        <header style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', width:'95%', borderRadius: '10px', boxShadow:'0 10px 6px -6px #B3B3B3', marginBottom:'40px', paddingBottom:'40px', paddingTop:'40px'}}>
            <div style={{display:'flex', flexDirection:'column', width:'35%', minWidth:'250px', justifyContent:'center', margin:'0 auto'}}>
                <img src={logoMidia} style={{width:'25%'}} alt="logo da empresa" />
                <div>
                <h1 style={{color:'#692299'}}>Midia.Tools</h1>
                <h3>Plataforma de monitoramento e desenvolvimento de redes sociais</h3>
                </div>
            </div>
            <img src={uxMidia} alt='pessoa mexendo em informações gráficas' style={{width:'48%', minWidth:'250px'}} />
        </header>
    )
  }

export default Header