import React from "react";
import Button from '../Button/index'

function Card({title, img, texto}) {
    return (
        <body style={{display:'flex', flexDirection:'column', flexWrap: 'wrap', padding:'2%'}}>
              <img style={{width:'100%', minWidth:'180px', heigth:'100%', margin: '0 auto'}} alt={`imagem sobre ${title}`} src={img}/>
            <div style={{maxWidth:'100%', minWidth:'180px', margin:'0 auto'}}>
              <h2>{title}</h2>
              <p>{texto}</p>
            </div>
        </body>
    )
  }

export default Card