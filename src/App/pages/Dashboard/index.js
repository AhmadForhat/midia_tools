import React, {useEffect, useState} from 'react'
import {useRouteMatch} from "react-router-dom";
import sendToBackend from './sendToBackend.js'
import fetch from './fetch'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Grafico from '../../components/Grafico'
import InfoRepo from '../../components/InfoRepo'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import Footer from '../../components/Footer'
import RepoDetails from '../RepoDetails'
import NavbarLogin from '../../components/NavbarLogin'


function Dashboard() {
  const { url } = useRouteMatch();
  const [graphicParms, setGraphicParms] = useState([])
  const [repos, setRepos] = useState([])
  const [reposFilter, setReposFilter] = useState([])
  const [filterRepo, setFilterRepo] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState('')
  const state = {data, graphicParms, repos, loading, error,reposFilter,filterRepo, setData, setGraphicParms, setRepos, setLoading, setError,setReposFilter}
  
  useEffect(() => fetch(state),[])

  const voltar = (state) => async () => {
    const {setLoading, setReposFilter} = state
    try {         
            await setLoading(true)
            await setFilterRepo('')
            await setReposFilter([])
            await setLoading(false)          
    } catch (error) {
        await setLoading(false)
    }
  }
  
    if(url !== '/') return <RepoDetails repo={url}/>
    if(loading) return <Spinner />
    if(error) return <Error />
    const dataRepo = reposFilter[0] ? reposFilter : repos
    return (
      <>
        <NavbarLogin title={'Dashboard'} />
        <Grafico dados={graphicParms} />
        <div style={{width:'50%', margin:'0 auto', marginTop:'20px', marginBottom:'40px', minWidth:'300px', display:'flex'}}>
          <Input title={'Buscar um repositório'} type={'text'} placeholder={'seu_repo'} valor={filterRepo} setValor={setFilterRepo}/>
          <div style={{display:'flex', marginTop:'10px'}}>
          <Button texto={'Buscar'} click={sendToBackend(state)}/>
          <Button texto={'Limpar'} click={voltar(state)}/>
        </div>
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