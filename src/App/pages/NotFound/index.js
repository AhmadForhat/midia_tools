import React from "react";
import notfoundImage from './image/notfoundImage.svg'
import {Link} from "react-router-dom";

function Error() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center' ,textAlign:'center', marginTop:'140px'}}>
            <img src={notfoundImage} alt="Imagem de página não encontrada" style= {{width:"70%", maxWidth:'400px'}}></img>
            <h2>Página não encontrada!</h2>
            <Link to="/">Voltar!</Link>
        </div>
    )
  }

export default Error