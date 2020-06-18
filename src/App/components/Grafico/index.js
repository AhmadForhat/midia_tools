import React from "react";
import { Chart } from 'react-charts'


function Grafico({dados}) {
    const data = [{label: 'Geral',data: dados}]
    const series ={type: 'bar'}
    const axes =[{ primary: true, type: 'ordinal', position: 'left' },{ position: 'bottom', type: 'linear', stacked: true }]
    
     return(
         <>
        <div style={{width: '500px',height: '300px'}}>
        <Chart data={data} series={series} axes={axes} />
        </div>
        </>
     )
  }

export default Grafico