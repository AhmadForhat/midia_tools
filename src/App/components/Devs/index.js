import React from "react";

function Devs({arrayDevs}) {
    return (
        <div className="devs" style={{marginTop:'50px', display:'flex', flexDirection:'column', width:'100%', height:'100%',marginBottom: '40px'}}>
        <h2 style={{marginLeft:'20px'}}>Devs</h2>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
          {arrayDevs.map(dev => {
            return (
              <>
              <div style={{backgroundColor:'white',display:'flex', borderRadius: '5px', flexDirection:'column', textAlign:'center', justifyContent:'center', marginLeft:'20px', marginRight:'20px', boxShadow:'0 2px 4px 1px #B3B3B3', width:'150px', padding:'2%', marginTop:'40px'}}>
                <img style={{borderRadius:'400px', width:'120px', alignSelf:'center'}} alt={`imagem do ${dev.name}`} src={dev.urlImg}/>
                <div style={{marginTop:'20px'}}>
                <a target ="blank" href = {dev.urlGit}>{dev.nome}</a>
                <p>{dev.info}</p>
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