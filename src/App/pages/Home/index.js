import React, {useState, useEffect} from "react";
import fetch from './fetch'

function Home() {
    const [user, setUser] = useState('AhmadForhat')
    const [info, setInfo] = useState('')
    const state = {user, info, setUser, setInfo}
    useEffect(() => fetch(state), [state])
    console.log(info)
    return <h2>Home</h2>;
  }

export default Home