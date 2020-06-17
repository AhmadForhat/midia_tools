import React from 'react'
import { Chart } from 'react-charts'

function Dashboard() {
    const data = React.useMemo(
    () => [
      {
        label: 'Geral',
        data: [['public_repos', 17], ['public_gists', 0], ['followers', 4], ['following', 5]]
      }
    ],
    []
  )
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'left' },
      { position: 'bottom', type: 'linear', stacked: true }
    ],
    []
  )
  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    []
  )
  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    []
  )
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