import React, {useContext, useEffect, useState} from 'react'
import userContext from '../../appContext'
import fetch from './fetch'

import Grafico from '../../components/Grafico'
import InfoRepo from '../../components/InfoRepo'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'


function Dashboard() {
  
  useContext(userContext).nome = "mayara"
  const {nome} = useContext(userContext)

  const [array, setArray] = useState([])
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState('')
  const state = {data, array, repos, loading, error, setData, setArray, setRepos, setLoading, setError}

  useEffect(() => fetch(state),[])
    if(loading) return <Spinner />
    if(error) return <Error />

    return (
      <>
        <Grafico dados={array} />

        <box style = {{display: 'flex', width: '95%', flexWrap: 'wrap', margin: '0 auto'}}>
          {repos.map(repo => <InfoRepo data={repo}/>)}
        </box>
        
      </>
    )
  }

export default Dashboard