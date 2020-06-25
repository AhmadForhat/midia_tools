import React, {useState, useEffect} from "react"
import fetch from './fetch'
import Slide from '../../components/Slide'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Devs from '../../components/Devs'
import Header from '../../components/Header'
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
    <Card title='Serviços' img={servicoImg} texto='Nossos serviços disponibilizam um sistema web para facilitar e dinamizar a utilização e consulta de kpis das redes sociais da sua empresa.' />,
    <Card title='Missões' img={missoesImg} texto='Nosso maior objetivo é criar uma rede de parceiros para assim nos desenvolvermos juntos e crescermos nossas empresa da melhor maneira possível.' />,
    <Card title='Equipe' img={equipeImg} texto='Nossa equipe é formada por vários devs, todos extremamente qualificados para sempre dar suporte e ajudar com qualquer questão ou dúvida que tenham.' />
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
        nome:'lauracintra',
        urlImg:'https://avatars0.githubusercontent.com/u/47889911?s=400&v=4',
        urlGit:'https://github.com/lauracintra',
        info:'Desenvolvedor FullStack'
      }
    ]
    return (
      <>
        <Header />
        <Slide table={table}/>
        <Devs arrayDevs={arrayDevs} />
        <Contato />
        <Footer />
      </>
    )
  }

export default Home