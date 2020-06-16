import React from "react";

function Devs({arrayDevs}) {
    return (
        <div className="devs" style={{marginTop:'50px', display:'flex', flexDirection:'column', width:'100%', height:'100%',marginBottom: '40px'}}>
        <h2 style={{marginLeft:'20px'}}>Devs</h2>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
          {arrayDevs.map(dev => {
            return (
              <>
              <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center', marginLeft:'20px', marginRight:'20px'}}>
                <img style={{borderRadius:'400px', width:'120px', alignSelf:'center'}} alt={`imagem do ${dev.name}`} src={dev.urlImg}/>
                <div style={{marginTop:'20px'}}>
                <a target ="blank" href = {dev.urlGit}>{dev.nome}</a>
                </div>
              </div>
              </>
            )
          })}
        </div>
      </div>
    )
  }

export default Devs