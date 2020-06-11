import React from "react";
import {butao, butaoClick} from './style'

function Button({type, texto, click}) {
      if(click){
        return <button style={butaoClick} onClick={click}>{texto.toUpperCase()}</button>
      }else{
        return <button style={butao} type={type}>{texto.toUpperCase()}</button>
      }
  }

export default Button