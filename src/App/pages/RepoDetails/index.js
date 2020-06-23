import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import fetch from './fetch'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import Grafico from '../../components/Grafico'
import CardCommit from '../../components/CardCommit'
import back from './image/back.svg'


function RepoDetails({repo}) {
    const userName = localStorage.getItem('gitUser')
    const url = `https://api.github.com/repos/${userName}${repo}/contributors`
    const [arrayGraphic, setArrayGraphic] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    const state = {arrayGraphic, loading, error, data,  setArrayGraphic, setLoading, setError, setData} 
    
    useEffect(() => fetch(url, state),[])

    console.log(arrayGraphic)

    if(loading) return <Spinner />
    if(error) return <Error />

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <Link to="/"><img src={back} alt='voltar' style={{width:'40px', padding:'20px'}}/></Link>
            <h2 style={{margin:"0 auto", marginTop:'20px'}}>Commits</h2>
            </div>           
            <Grafico dados={arrayGraphic} />
            <CardCommit data={data} />           
        </div>
    )
  }

export default RepoDetails