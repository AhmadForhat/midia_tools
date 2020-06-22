import React from "react";
import loggedIgm from './image/logged.svg'

function logged() {
    const userName = localStorage.getItem('gitUser')
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center' ,textAlign:'center', marginTop:'140px'}}>
            <img src={loggedIgm} alt="Imagem de Bem Vindo" style= {{width:"70%", maxWidth:'400px'}}></img>
            <h2>{`Bem Vindo, ${userName}`}</h2>
            <a href="/">Dashboard!</a>
        </div>
    )
  }

export default logged