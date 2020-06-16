import React, {useState} from "react";
import direita from './image/direita.png'
import esquerda from './image/esquerda.png'
import {activeButton, button, fistButton, firstActiveButton} from './style'

function Slide({table}) {
    const [slide, setSlide] = useState(0)
    return (
        <>
        <body style={{display:'flex', flexDirection:'column', marginTop:'40px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <img style={{marginLeft:'5%', width:'20px', height:'40px', alignSelf:'center', marginRight:'5%'}} alt='>' src={esquerda} onClick={() => {
            if(slide !== 0) setSlide(slide - 1)
            }}/>
            {table[slide]}
        <img style={{marginRight:'5%', width:'20px', height:'40px', alignSelf:'center', marginLeft:'5%'}} alt='>' src={direita} onClick={() => {
            if(slide !== table.length - 1) setSlide(slide + 1)
            }}/>
        </div>
        <div style={{display:'flex', justifyContent:'space-around',margin:'0 auto', maxWidth:'200px', marginTop:'35px',}}>
            {table.map((item,index) => {
                return <button key={index} style={slide === index ? index === 0 ? firstActiveButton: activeButton : index === 0 ? fistButton : button} onClick={() => setSlide(index)}/>
            })}
        </div>
        </body>
        </>
    )
  }

export default Slide