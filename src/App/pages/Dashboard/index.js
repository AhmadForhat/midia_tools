import React, {useContext, useEffect, useState} from 'react'
import userContext from '../../appContext'
import fetch from './fetch'

import Grafico from '../../components/Grafico'

function Dashboard() {
  
  useContext(userContext).nome = "mayara"
  const {nome} = useContext(userContext)
  console.log(nome)

  const [array, setArray] = useState([])
  const [data, setData] = useState('')
  const state = {data, array, setData, setArray}
  
  useEffect(() => fetch(state),[state])
  console.log(data.public_repos)
    
    return (
      <>
        <h2>Batata</h2>
        <Grafico dados={array} />
      </>
    )
  }

export default Dashboard