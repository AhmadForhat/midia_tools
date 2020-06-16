import React, {useState, useEffect} from "react"
import fetch from './fetch'
import Slide from '../../components/Slide'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Devs from '../../components/Devs'
import Contato from '../../components/Contato'

function Home() {
  const [user, setUser] = useState('')
  const [info, setInfo] = useState('')
  const state = {user, info, setUser, setInfo}
    useEffect(() => fetch(state), [state])
    const table = [
    <Card title='Serviços' img='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' texto='Criamos soluções para a sua empresa, com foco em facilitar e dinamizar suas redes sociais.' />,
    <Card title='Missões' img='https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' texto='Criamos soluções para a sua empresa, com foco em facilitar e dinamizar suas redes sociais.' />,
    <Card title='Equipe' img='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' texto='Criamos soluções para a sua empresa, com foco em facilitar e dinamizar suas redes sociais.' />
  ]
    const arrayDevs = [
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4',
        urlGit:'https://github.com/AhmadForhat'
      },
      {
        nome:'Letpmartins',
        urlImg:'https://avatars1.githubusercontent.com/u/54192824?s=400&v=4',
        urlGit:'https://github.com/Letpmartins'
      },
      {
        nome:'mayvlima',
        urlImg:'https://avatars3.githubusercontent.com/u/60523960?s=400&v=4',
        urlGit:'https://github.com/mayvlima'
      },
      {
        nome:'pcr0',
        urlImg:'https://avatars0.githubusercontent.com/u/58571599?s=400&u=0a1809ce5f023e4f23c4b61641510eae11de046e&v=4',
        urlGit:'https://github.com/pcr0'
      },
      {
        nome:'AhmadForhat',
        urlImg:'https://avatars3.githubusercontent.com/u/54677103?s=400&u=b6e4e11c6718162d380a34d127626d0ce775414a&v=4',
        urlGit:'https://github.com/AhmadForhat'
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