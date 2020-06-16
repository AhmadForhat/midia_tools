import React from "react";

function Card({title, img, texto}) {
    return (
        <body style={{display:'flex', flexWrap: 'wrap'}}>
              <img style={{width:'30%', minWidth:'180px', heigth:'100%', margin: '0 auto'}} alt={`imagem sobre ${title}`} src={img}/>
            <div style={{marginLeft:'20px', textAlign:'center',maxWidth:'65%', minWidth:'180px', margin:'0 auto'}}>
              <h2>{title}</h2>
              <p>{texto}</p>
            </div>
        </body>
    )
  }

export default Card