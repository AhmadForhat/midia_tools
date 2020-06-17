import React from 'react'
import { Chart } from 'react-charts'

function Dashboard() {
  useContext(userContext).nome = "mayara"
  const {nome} = useContext(userContext)
  console.log(nome)
    return (
      <>
        <h1>Batata</h1>
        <Grafico dados={array} />
        <Grafico dados={[['public_repos', 17], ['public_gists', 0], ['followers', 4], ['following', 5]]} />
        <Grafico dados={[['public_repos', 17], ['public_gists', 0], ['followers', 4], ['following', 5]]} />
        <Grafico dados={[['public_repos', 17], ['public_gists', 0], ['followers', 4], ['following', 5]]} />
      </>
    )
  }

export default Dashboard