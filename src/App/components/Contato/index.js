import React, {useState} from "react";
import {mapa} from './style'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Spinner from '../../components/Spinner'
import sendToBackend from './sendToBackend'
import facebook from './image/facebook.svg'
import instagram from './image/instagram.svg'
import linkedin from './image/linkedin.svg'

function Contato() {
    const [email, setEmail] = useState('')
    const [news, setNews] = useState(false)
    const [errorNews, setErrorNews] = useState(false)
    const [loading, setLoading] = useState(false)    
    const state = {email, news, errorNews, loading, setEmail, setNews, setErrorNews, setLoading}
    return (
        <>
            <h2 style={{marginLeft:'20px', marginBottom:'50px'}}>Contato</h2>
            <body className="contato" style={{marginTop:'50px', display:'flex', height:'400px', flexWrap:'wrap'}}>
                <iframe title="local dh" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.047909215844!2d-46.67753668502145!3d-23.602614684662434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50ab7feb4519%3A0x739f0ddb0439cf94!2sDigital%20House%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1591933080144!5m2!1spt-BR!2sbr" style={mapa}></iframe>
                <informacoes style={{display:'flex',textAlign:'center', flexDirection:'column', width:'30%', minWidth:'200px', margin:'0 auto', height:"80%"}}>
                <textos>
                <p style={{minWidth:'200px'}}>Endereco: Rua blábláblá n° 50, São Paulo/SP</p>
                <p style={{minWidth:'200px'}}>Telefone: (11) 99999-9999</p>
                </textos>
                <redes>
                    <a href="https://www.facebook.com/" target='blank'><img alt="logo facebook" src={facebook} style={{width:'80px', borderRadius:'400px'}}/></a>
                    <a href="https://www.instagram.com/" target='blank'><img alt="logo instagram" src={instagram}  style={{width:'80px', borderRadius:'400px'}}/></a>
                    <a href="https://www.linkedin.com/" target='blank'><img alt="logo linkedin" src={linkedin} style={{width:'80px', borderRadius:'400px'}} /></a>
                    <div>                                                
                    <Input title={'Quer ficar por dentro das nossas novidades? Cadastre-se na nossa Newsletter:'} type={'email'} placeholder={'digite seu email aqui'} valor={email} setValor={setEmail}/>
                    {!news && !loading && <Button click={sendToBackend(state)} value="click" texto = {'Cadastrar'}/>} 
                    {news && !errorNews && !loading && <h2>Enviado!</h2>}
                    {errorNews && !loading &&(
                    <>
                    <Button click={sendToBackend(state)} value="click" texto = {'Cadastrar'}/> <h2>Não deu certo!</h2>
                    </>
                    )
                    }
                    {loading && <Spinner />}
                    </div>
                </redes>
                </informacoes>
            </body>
        </>
    )
  } 

export default Contato