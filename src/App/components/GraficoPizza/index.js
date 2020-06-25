import React from "react";
import CanvasJSReact from './canvasjs.react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function GraficoPizza({dados}) {
  
    let data = []
    let y=''
    let label=''

    for(var i=0; i< dados.length; i++){
        y = dados[i][1]
        label = dados[i][0]
        data.push({y,label})
    }   
   
    const options = {
        backgroundColor: "#F7F7F7",
        animationEnabled: false,
        exportEnabled: false,
        theme: "light1",     
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}",		
            startAngle: -90,
            dataPoints: data
        }]
    }
    
    return (
    <div style={{margin:'0 auto', marginBottom:'50px', marginTop:'10px', width:'85%'}}>
        <CanvasJSChart options = {options}/>       
    </div>
    );
}

 
export default GraficoPizza