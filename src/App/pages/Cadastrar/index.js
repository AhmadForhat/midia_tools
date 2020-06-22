import React, { useState } from "react";
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useLocation } from 'wouter'
import sendToBackend from './sendToBackend'
import { Link } from "react-router-dom";
import Error from '../../components/Error'

function Login() {
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [, setLocation] = useLocation("");
  const [userGit, setUsergit] = useState("");
  const state = {senha, cnpj, email, userGit, setLocation, setError}

  if(error) return <Error />
    return (
      <div style={{diplay:'flex', width:'30%', minWidth:'250px', margin:'0 auto', boxShadow:'0 2px 4px 1px #B3B3B3', padding:'40px', marginTop:'20px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img alt ="logo da empresa" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGRxV3kpBUxQw/company-logo_100_100/0?e=1599091200&v=beta&t=lVCgFYTImDC2dNDTdBSV-tpzfcWCkLKlgVrBYr0heJs"/>
        </div>  
        <Input title={'CNPJ'} type={'text'} placeholder={'123-4567/88'} valor={cnpj} setValor={setCnpj}/>
        <Input title={'GitHub User'} type={'text'} placeholder={'MidiaTools'} valor={userGit} setValor={setUsergit}/>
        <Input title={'Email'} type={'email'} placeholder={'midia.tools@gmail.com'} valor={email} setValor={setEmail}/>
        <Input title={'Senha'} type={'password'} placeholder={'**********'} valor={senha} setValor={setSenha}/>
        <Button click={sendToBackend(state)} type="submit" texto = {'Cadastrar'}/>
        <div style={{textAlign:'center', marginTop:'20px'}}>
        <Link to="/login" style={{textDecoration:'none', fontSize:'14px', color:'black'}}>Já possuo cadastro!</Link>
        </div>
      </div>
    )
  }

export default Login