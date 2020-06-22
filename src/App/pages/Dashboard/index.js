import React, {useContext, useEffect, useState} from 'react'
import sendToBackend from './sendToBackend.js'
import fetch from './fetch'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Grafico from '../../components/Grafico'
import InfoRepo from '../../components/InfoRepo'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import Footer from '../../components/Footer'


function Dashboard() {

  const [graphicParms, setGraphicParms] = useState([])
  const [repos, setRepos] = useState([])
  const [reposFilter, setReposFilter] = useState([])
  const [filterRepo, setFilterRepo] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState('')
  const state = {data, graphicParms, repos, loading, error,reposFilter,filterRepo, setData, setGraphicParms, setRepos, setLoading, setError,setReposFilter}
  useEffect(() => fetch(state),[])
    if(loading) return <Spinner />
    if(error) return <Error />
    const dataRepo = reposFilter[0] ? reposFilter : repos
    console.log(dataRepo)
    return (
      <>
        <Grafico dados={graphicParms} />
        <div style={{width:'50%', margin:'0 auto', marginBottom:'40px', minWidth:'300px'}}>
          <Input title={'Busca'} type={'text'} placeholder={'seu_repo'} valor={filterRepo} setValor={setFilterRepo}/>
          <Button texto={'Buscar'} click={sendToBackend(state)}/>
        </div>
        <box style = {{display: 'flex', width: '95%', flexWrap: 'wrap', margin: '0 auto', marginBottom:'80px'}}>
          {
            dataRepo.map(repo => <InfoRepo data={repo}/>)
          }
        </box>
        <Footer />
      </>
    )
  }

export default Dashboard