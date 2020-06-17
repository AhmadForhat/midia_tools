import React from 'react'
import { Chart } from 'react-charts'

function Dashboard() {
  useContext(userContext).nome = "mayara"
  const {nome} = useContext(userContext)
  console.log(nome)
    return (
      <>
        <h1>Batata</h1>
        <div style={{width: '500px',height: '300px'}}>
        <Chart data={data} series={series} axes={axes} getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle} />
        </div>
      </>
    )
  }

export default Dashboard