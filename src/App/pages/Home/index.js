import React, {useState, useEffect} from "react";
import fetch from './fetch'
import Slide from '../../components/Slide'
import Footer from '../../components/Footer'
import {mapa} from './style'

function Home() {
  const [user, setUser] = useState('')
  const [info, setInfo] = useState('')
  const state = {user, info, setUser, setInfo}
    useEffect(() => fetch(state), [state])
    const table = ['Oi', 'Tchau', 'Batata', 'Mud',"Melão", "Abacate"]
    const arrayDevs = [
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4'
      },
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4'
      },
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4'
      },
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4'
      },
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4'
      }
    ]
    return (
      <>
      <Slide table ={table}/>
      <div className="devs" style={{marginTop:'50px', display:'flex', flexDirection:'column', width:'100%', height:'100%',marginBottom: '40px'}}>
        <h2 style={{marginLeft:'20px'}}>Devs</h2>
        <div style={{display:'flex', justifyContent:'space-around', flexWrap: 'wrap'}}>
          {arrayDevs.map(dev => {
            return (
              <>
              <div style={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center'}}>
                <h3>{dev.nome}</h3>
                <img style={{borderRadius:'400px', width:'150px', alignSelf:'center'}} alt={`imagem do ${dev.name}`} src={dev.urlImg}/>
              </div>
              </>
            )
          })}
        </div>
      </div>
      <div className="contato" style={{marginTop:'50px', display:'flex', flexDirection:'column', height:'400px'}}>
        <h2 style={{marginLeft:'20px'}}>Contato</h2>
        <iframe title="local dh" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.047909215844!2d-46.67753668502145!3d-23.602614684662434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50ab7feb4519%3A0x739f0ddb0439cf94!2sDigital%20House%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1591933080144!5m2!1spt-BR!2sbr" style={mapa}></iframe>
      </div>
      <Footer />
      </>
    )
  }

export default Home