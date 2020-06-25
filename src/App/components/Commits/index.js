import React from "react";
import moment from "moment"

function Teste({dados}) {
    
    
    return(
         <div style={{display: "flex", width:"100%", flexWrap:'wrap', minWidth:'300px', justifyContent:'center'}}>
             {dados.map(item =>  (
                <body style={{width: '40%', height:'150px', display: 'flex', padding: '20px', backgroundColor: 'white', boxShadow:'0 2px 4px 1px #B3B3B3', margin:'10px', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                    <img src={item.author.avatar_url} alt="imagem usuario" style={{width:"24%", borderRadius:'400px', alignSelf:'end'}}/>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', alignContent:'center'}}>
                    <a href={item.html_url}><h2 style={{textAlign: 'center'}}>{item.author.login}</h2></a>                                      
                    <a href={item.html_url} target= 'blank' ><p style={{textAlign: 'center'}}>{item.commit.message.substr(0,55)+"..."}</p></a>                    
                    <p style={{textAlign: 'center'}}>{moment(item.commit.author.date).format('DD/MMM/YYYY, LT')}</p>
                    </div>                                  
                </body>
             ))}        

        </div>
     )
  }

export default Teste