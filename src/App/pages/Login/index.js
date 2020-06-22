import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useLocation} from 'wouter'
import Logged from '../../components/Logged'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'
import Input from '../../components/Input'
import sendToBackend from './sendToBackend'
import Error from "../../components/Error"

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(false)
  const [, setLocation] = useLocation();
  const state = {login, senha, isLoad, setLocation, setError, setIsLoad}
  const isLogged = localStorage.getItem('isLogged')

if(isLogged) return <Logged />
if(error) return <Error />
    return (
      <div style={{diplay:'flex', width:'30%', minWidth:'300px', margin:'0 auto', boxShadow:'0 2px 4px 1px #B3B3B3', padding:'40px', marginTop:'60px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img alt ="logo da empresa" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGRxV3kpBUxQw/company-logo_100_100/0?e=1599091200&v=beta&t=lVCgFYTImDC2dNDTdBSV-tpzfcWCkLKlgVrBYr0heJs"/>
        </div>
        <Input title={'Email'} type={'text'} placeholder={'midia.tools@gmail.com'} valor={login} setValor={setLogin}/>
        <Input title={'Senha'} type={'password'} placeholder={'**********'} valor={senha} setValor={setSenha}/>
        {!isLoad ? 
        (
        <>
        <Button click={sendToBackend(state)} value="click" texto = {'Login'}/>
        <div style={{textAlign:'center', marginTop:'20px'}}>
        <Link to="/cadastrar" style={{textDecoration:'none', fontSize:'14px', color:'black'}}>Não possui conta?</Link>
        </div>
        </>
        ):(
          <div style={{marginTop:'40px'}}> 
          <Spinner />
          </div>
        )

        }
        
      </div>
    )
  }

export default Login