import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import sendToBackend from './sendToBackend.js'
import fetch from './fetch'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import GraficoPizza from '../../components/GraficoPizza'
import CardCommit from '../../components/CardCommit'
import Footer from '../../components/Footer'
import back from './image/back.svg'
import Commits from '../../components/Commits'
import Input from '../../components/Input'
import Button from '../../components/Button'


function RepoDetails({repo}) {
    const userName = localStorage.getItem('gitUser')
    const url1 = `https://api.github.com/repos/${userName}${repo}/contributors`
    const url2 = `https://api.github.com/repos/${userName}${repo}/commits`
    const [arrayGraphic, setArrayGraphic] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const [ultimosCommits, setUltimosCommits] = useState([])
    const [reposFilter, setReposFilter] = useState([])
    const [filterRepo, setFilterRepo] = useState('')
    const state = {arrayGraphic, loading, error, data, ultimosCommits, reposFilter, filterRepo, setUltimosCommits, setArrayGraphic, setLoading, setError, setData, setFilterRepo, setReposFilter} 
    
    useEffect(() => fetch(url1, url2, state),[])

    if(loading) return <Spinner />
    if(error) return <Error />

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

    const dataRepo = reposFilter[0] ? reposFilter : ultimosCommits

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <Link to="/"><img src={back} alt='voltar' style={{width:'40px', padding:'20px'}}/></Link>
            <h2 style={{margin:"0 auto", marginTop:'30px', marginBottom:'20px'}}>Últimos 30 commits do repositório {repo.split('/')[1]}</h2>
            </div>           
            <GraficoPizza dados={arrayGraphic}/>
            <h2>Contribuidores</h2>
            <CardCommit data={data} />            

        <h2>Comits mais recentes</h2>
        <div style={{width:'50%', margin:'0 auto', marginBottom:'40px', minWidth:'300px', display:'flex'}}>                   
          <Input title={'Buscar um usuário'} type={'text'} placeholder={'usuario'} valor={filterRepo} setValor={setFilterRepo}/>
          <div style={{display:'flex', marginTop:'10px'}}>
          <Button texto={'Buscar'} click={sendToBackend(state)}/>
          <Button texto={'Limpar'} click={voltar(state)}/>
          </div>
        </div>
        <div style = {{marginBottom:'80px'}}>                
          <Commits dados={dataRepo}/>          
        </div>            
            <Footer />
        </div>
    )
  }

export default RepoDetails