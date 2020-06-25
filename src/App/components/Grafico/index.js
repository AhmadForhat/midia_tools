import React from "react";
import CanvasJSReact from './canvasjs.react'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Grafico({dados}) { 
    
        const options = { 
          axisY: {gridThickness:0}, 
          backgroundColor: "#F7F7F7",             
          data: [{				
                    type: "bar",
                    dataPoints: [
                        { label: dados[0][0],  y:dados[0][1] },
                        { label: dados[1][0],  y:dados[1][1] },
                        { label: dados[2][0],  y:dados[2][1] },
                        { label: dados[3][0],  y:dados[3][1] },
                    ]
           }]
          }
      
        
       return (
          <div style={{width:'85%', margin:'0 auto'}}>
            <CanvasJSChart options = {options} />
          </div>
        );
      }
  

export default Grafico