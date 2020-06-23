import React, {useState, useEffect} from "react";
import Button from "../Button";
import moment from "moment"
import {useLocation} from 'wouter'
import 'moment/locale/pt-br'

import jsImg from './image/js.svg'
import htmlImg from './image/html.svg'
import cssImg from './image/css.svg'
import semImg from './image/semImage.svg'
import Spinner from '../Spinner'

const imgLanguage = (language) => {
    if(language === 'JavaScript') return jsImg
    if(language === 'HTML') return htmlImg
    if(language === 'CSS') return cssImg
    return semImg

}

function InfoRepo({data}) {
    const [, setLocation] = useLocation("");
    const {name, owner, forks, created_at, updated_at, language, html_url} = data
    return(
         <>
         <body style={{width: '20%', minWidth: '250px', display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', margin: '10px auto'}}>
         <a href={html_url} target= 'blank' ><h2 style={{textAlign: 'center'}}>{name} </h2></a>
            <div style={{display: 'flex' }}>
                <info>
                    <p>
                        {`Criador: ${owner.login}`}
                    </p>
                    <p>
                        {`Forks: ${forks}`}
                    </p>
                    <p>
                        {`Criado: ${moment(created_at).format('DD/MMM/YY')}`}
                    </p>
                    <p>
                        {`Atualizado: ${moment(updated_at).format('DD/MMM/YY')}`}
                    </p>
                </info>
                <relatorio style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: '0 auto'}}>
                    <img src={imgLanguage(language)} alt='imagem da linguagem' style={{width: '50px'}}></img>
                </relatorio>
            </div>
            <div style={{ margin: '0 auto', width: '100%',  textAlign: 'center'}}>
                <a href={`/${name}`}><Button small='true' href={`/${name}`} texto='Saiba Mais' click={ () => setLocation(name)} /></a>
            </div>
         </body>

        </>
     )
  }

export default InfoRepo