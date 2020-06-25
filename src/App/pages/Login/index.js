import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useLocation} from 'wouter'
import Logged from '../../components/Logged'
import Spinner from '../../components/Spinner'
import Button from '../../components/Button'
import Input from '../../components/Input'
import sendToBackend from './sendToBackend'
import logoMidia from './image/logoMidia.svg'

function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(false)
  const [, setLocation] = useLocation();
  const state = {login, senha, isLoad, setLocation, setError, setIsLoad}
  const isLogged = localStorage.getItem('isLogged')

if(isLogged) return <Logged />
    return (
      <div style={{diplay:'flex', width:'30%', minWidth:'300px', margin:'0 auto', boxShadow:'0 2px 4px 1px #B3B3B3', padding:'40px', marginTop:'60px'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img alt ="logo da empresa" style={{width:'30%'}} src={logoMidia}/>
        </div>
        <Input title={'Email'} type={'text'} placeholder={'midia.tools@gmail.com'} valor={login} setValor={setLogin}/>
        <Input title={'Senha'} type={'password'} placeholder={'**********'} valor={senha} setValor={setSenha}/>
        {!isLoad && !error &&(
        <>
        <Button click={sendToBackend(state)} value="click" texto = {'Login'}/>
        <div style={{textAlign:'center', marginTop:'20px'}}>
        <Link to="/cadastrar" style={{textDecoration:'none', fontSize:'14px', color:'black'}}>Não possui conta?</Link>
        </div>
        </>
        )}
        {error && !isLoad &&(
          <>
          <p style={{textAlign:'center', color:'red', textDecoration:'bold'}}>Senha ou email incorretos!</p>
          <Button click={sendToBackend(state)} value="click" texto = {'Login'} style={{color:'red'}}/>
          <div style={{textAlign:'center'}}>
          <Link to="/cadastrar" style={{textDecoration:'none', fontSize:'14px', color:'black'}}>Não possui conta?</Link>
          </div>
          </>
        )
        }
        {isLoad &&(
          <div style={{marginTop:'40px'}}> 
          <Spinner />
          </div>
        )
        }      
        
      </div>
    )
  }

export default Login