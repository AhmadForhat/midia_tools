import axios from 'axios'

const sendToBackend = (state) => async () => {
    const {login, senha, setError, setLocation} = state
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
        if(logou.status === 201 ){
            console.log('Logou com sucesso!!')
            localStorage.setItem('isLogged', true)
            await setLocation('/')
        }else{
            console.log('Não Encontramos seu usuário')
        }
    } catch (error) {
        console.log("Não encontramos sua senha")
        setError(true)
    }
}

export default sendToBackend