import React from "react";

const avatar_fake = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'

function CardCommit({data}) {
    
    
    return(
         <div style={{display: "flex", width:"100%", flexWrap:'wrap', minWidth:'300px', marginBottom:'40px'}}>
             {data.map(item =>  (
                <body style={{width: '20%', minWidth: '220px', display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', margin: '20px auto'}}>
                <img src={item.avatar_url ? item.avatar_url : avatar_fake } alt="imagem usuario" style={{margin: "0 auto", width:"30%", minWidth:"180px", borderRadius:'200px'}}/>
                <a href={item.html_url} target= 'blank' ><h2 style={{textAlign: 'center'}}>{item.login} </h2></a>
                   <div style={{display: 'flex', flexDirection:'column', justifyContent:'flex-start', width:'70%' }}>
                    <p style={{margin:'0'}}>Commits: {item.contributions}</p>
                    <p>Mais informações: </p>
                    <a href={item.repos_url}>Repositórios</a>
                    <a href={item.received_events_url} target='blank'>Eventos</a>                       
                   </div>                  
                </body>
             ))}        

        </div>
     )
  }

export default CardCommit