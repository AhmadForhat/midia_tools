import React, { useState } from "react";
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useLocation } from 'wouter'
import sendToBackend from './sendToBackend'
import { Link } from "react-router-dom";
import Error from "../../components/Error"

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);
  const [, setLocation] = useLocation();
  const state = {login, senha, setLocation, setError}


if(error) return <Error />
    return (
      <div style={{diplay:'flex'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img alt ="logo da empresa" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGRxV3kpBUxQw/company-logo_100_100/0?e=1599091200&v=beta&t=lVCgFYTImDC2dNDTdBSV-tpzfcWCkLKlgVrBYr0heJs"/>
        </div>
        <Input title={'Login'} type={'text'} placeholder={'midiaTools'} valor={login} setValor={setLogin}/>
        <Input title={'Senha'} type={'password'} placeholder={'**********'} valor={senha} setValor={setSenha}/>
        <Button click={sendToBackend(state)} value="click" texto = {'Login'}/>
        <div style={{textAlign:'center', marginTop:'20px'}}>
        <Link to="/cadastrar" style={{textDecoration:'none', fontSize:'14px', color:'black'}}>Não possui conta?</Link>
        </div>
      </div>
    )
  }

export default Login