import React from "react";
import moment from "moment"
import ellipsis from 'text-ellipsis'

const avatar_fake = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
const login_fake = 'GitHub Undefined'

function Teste({dados}) {
    
    
    return(
         <div style={{display: "flex", width:"100%", flexWrap:'wrap', minWidth:'300px', justifyContent:'center'}}>
             {dados.map(item =>  (
                <body style={{width: '40%',minWidth:'250px', height:'25%', display: 'flex', padding: '20px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', margin:'10px', justifyContent:'space-around', alignItems:'center', alignContent:'center', flexWrap:'wrap'}}>
                    <img src={item.author ? item.author.avatar_url : avatar_fake} alt="imagem usuario" style={{width:"24%", minWidth:'150px', borderRadius:'400px', margin:'0 auto'}}/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'60%'}}>
                    <a href={item.html_url}><h2>{item.author ? item.author.login : login_fake}</h2></a>                                      
                    <a href={item.html_url} target= 'blank' ><p>{ellipsis(item.commit.message,20)}</p></a>                    
                    <p>{moment(item.commit.author.date).format('DD/MMM/YYYY, LT')}</p>
                    </div>                                  
                </body>
             ))}        

        </div>
     )
  }

export default Teste