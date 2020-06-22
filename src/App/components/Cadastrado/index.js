import React from "react";
import cadastradoImg from './image/cadastrado.svg'

function Cadastrado() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center' ,textAlign:'center', marginTop:'140px'}}>
            <img src={cadastradoImg} alt="Imagem de cadastro feito com sucesso!" style= {{width:"70%", maxWidth:'400px'}}></img>
            <h2>Cadastrado com Sucesso!</h2>
            <a href="/login">Login</a>
        </div>
    )
  }

export default Cadastrado