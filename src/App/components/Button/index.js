import React from "react";
import {butao, butaoClick, butaoSmall} from './style'

function Button({type, texto, click, small}) {
      if(click && !small){
        return <button style={butaoClick} onClick={click}>{texto.toUpperCase()}</button>
      }
      if(small){
        return <button style={butaoSmall} onClick={click}>{texto.toUpperCase()}</button>
      }
      else{
        return <button style={butao} type={type}>{texto.toUpperCase()}</button>
      }
  }

export default Button