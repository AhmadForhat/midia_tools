import React, {useState, useEffect} from "react";
import fetch from './fetch'

function Home() {
    const [user, setUser] = useState('')
    const [info, setInfo] = useState('')
    const state = {user, info, setUser, setInfo}
    useEffect(() => fetch(state), [state])
    return (
      <div>
        
      </div>
    )
  }

export default Home