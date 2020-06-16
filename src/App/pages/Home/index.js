import React, {useState, useEffect} from "react"
import fetch from './fetch'
import Slide from '../../components/Slide'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Devs from '../../components/Devs'
import Contato from '../../components/Contato'
import servicoImg from './image/imgServico.png'
import missoesImg from './image/imgMissoes.png'
import equipeImg from './image/imgEquipe.png'

function Home() {
  const [user, setUser] = useState('')
  const [info, setInfo] = useState('')
  const state = {user, info, setUser, setInfo}
    useEffect(() => fetch(state), [state])
    const table = [
    <Card title='Serviços' img={servicoImg} texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />,
    <Card title='Missões' img={missoesImg} texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />,
    <Card title='Equipe' img={equipeImg} texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
  ]
    const arrayDevs = [
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4',
        urlGit:'https://github.com/AhmadForhat',
        info:'Desenvolvedor JavaScript'
      },
      {
        nome:'Letpmartins',
        urlImg:'https://avatars1.githubusercontent.com/u/54192824?s=400&v=4',
        urlGit:'https://github.com/Letpmartins',
        info:'Desenvolvedor FullStack'
      },
      {
        nome:'mayvlima',
        urlImg:'https://avatars3.githubusercontent.com/u/60523960?s=400&v=4',
        urlGit:'https://github.com/mayvlima',
        info:'Desenvolvedor FullStack'
      },
      {
        nome:'pcr0',
        urlImg:'https://avatars0.githubusercontent.com/u/58571599?s=400&u=0a1809ce5f023e4f23c4b61641510eae11de046e&v=4',
        urlGit:'https://github.com/pcr0',
        info:'Desenvolvedor FullStack'
      },
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4',
        urlGit:'https://github.com/AhmadForhat',
        info:'Desenvolvedor FullStack'
      }
    ]
    return (
      <>
        <Slide table={table}/>
        <Devs arrayDevs={arrayDevs} />
        <Contato />
        <Footer />
      </>
    )
  }

export default Home