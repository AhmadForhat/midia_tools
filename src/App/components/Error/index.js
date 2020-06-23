import React from "react";
import errorImage from './image/error_image.svg'

function Error() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center' ,textAlign:'center', marginTop:'80px'}}>
            <img src={errorImage} alt="imagem de erro" style= {{width:"70%", maxWidth:'400px'}}></img>
            <h2>Erro na página</h2>
            <p>Qualquer dúvida entrar em contato</p>
            <a href="/" onClick={() => localStorage.removeItem('isLogged')}>Voltar a Home</a>
        </div>
    )
  }

export default Error