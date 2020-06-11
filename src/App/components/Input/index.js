import React from "react";
import {container, titulo, caixa} from './style'

function Input({title, type, placeholder, valor, setValor}) {
    return (
        <label style={container}>
          <p style ={titulo}>{title}</p>
          <input style ={caixa} type={type} placeholder={placeholder} value={valor} onChange={e => setValor(e.target.value)}/>
        </label>
    )
  }

export default Input