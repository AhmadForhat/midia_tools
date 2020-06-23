import React from "react";

function CardCommit({data}) {
    
    
    return(
         <div style={{display: "flex", width:"100%", flexWrap:'wrap', minWidth:'300px'}}>
             {data.map(item =>  (
                <body style={{width: '20%', minWidth: '250px', display: 'flex', flexDirection: 'column', padding: '20px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', margin: '10px auto'}}>
                <img src={item.avatar_url} alt="imagem usuario" style={{margin: "0 auto", width:"30%", minWidth:"180px", borderRadius:'200px'}}/>

                <a href={item.html_url} target= 'blank' ><h2 style={{textAlign: 'center'}}>{item.login} </h2></a>
                   <div style={{display: 'flex', flexDirection:'column', justifyContent:'flex-start', width:'70%' }}>
                    <p style={{margin:'0'}}>Commits: {item.contributions}</p>
                    <p>Mais informações: </p>
                    <a href={item.repos_url}>Repositórios</a>
                    <a href={item.events_url}>Eventos</a>                       
                   </div>                  
                </body>
             ))}        

        </div>
     )
  }

export default CardCommit