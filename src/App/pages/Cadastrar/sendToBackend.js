import axios from 'axios'

const sendToBackend = (state) => async () => {
    const {senha, cnpj, email, userGit, setError, setLocation} = state
    const config = {
        method:'POST',
        url:'http://localhost:9000/cadastro',
        data: {
            password:senha,
            cnpj,
            email,
            userGithub:userGit
        }
    }
    console.log(config.data)
    try {
        const criarConta = await axios(config)
        console.log(criarConta)
        await setLocation('/login')
    } catch (error) {
        setError(true)
        console.log(error)
    }
}

export default sendToBackend