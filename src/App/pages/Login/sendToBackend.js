import axios from 'axios'

const sendToBackend = (state) => async () => {
    const {login, senha, setError} = state
    const config = {
        method:'GET',
        url:'http://localhost:9000/login',
        params: {
            email:login, 
            password:senha
        }
    }
    try {
        const logou = await axios(config)
        logou.status === 201 ? console.log('Logou com sucesso') : console.log('Não Encontramos seu usuário')
    } catch (error) {
        console.log("Não encontramos sua senha")
        setError(true)
    }
}

export default sendToBackend