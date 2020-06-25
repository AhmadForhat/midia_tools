import React from "react";
import moment from "moment"

const avatar_fake = 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
const login_fake = 'GitHub Undefined'

function Teste({dados}) {
    
    
    return(
         <div style={{display: "flex", width:"100%", flexWrap:'wrap', minWidth:'300px', justifyContent:'center'}}>
             {dados.map(item =>  (
                    <img src={item.author ? item.author.avatar_url : avatar_fake} alt="imagem usuario" style={{width:"24%", minWidth:'150px', borderRadius:'400px', margin:'0 auto'}}/>
                    <a href={item.html_url}><h2>{item.author ? item.author.login : login_fake}</h2></a>                                      
                    </div>                                  
                </body>
             ))}        

        </div>
     )
  }

export default Teste