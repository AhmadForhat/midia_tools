import React from "react";
import Button from "../Button";
import moment from "moment"
import {useLocation} from 'wouter'
import 'moment/locale/pt-br'

function InfoRepo({data}) {
    const [, setLocation] = useLocation("");
    const {name, owner, forks, created_at, updated_at, language, html_url} = data
    const urlDeploy = 'www.google.com'
    const commits = '30'
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
                        {`Commits: ${commits}`}
                    </p>
                    <p>
                        {`Criado: ${moment(created_at).format('DD/MMM/YY')}`}
                    </p>
                    <p>
                        {`Atualizado: ${moment(updated_at).format('DD/MMM/YY')}`}
                    </p>
                </info>
                <relatorio style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', margin: '0 auto'}}>
                    <a href={urlDeploy} target= 'blank' ><img src='https://w7.pngwing.com/pngs/983/697/png-transparent-heroku-software-deployment-software-development-postgresql-amazon-web-services-cloud-computing-purple-angle-violet.png' 
                    alt= 'imagem do criador' style={{width: '50px'}}></img></a>
                    <img src='https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png' alt='imagem da linguagem' style={{width: '50px'}}></img>
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