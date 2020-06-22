import axios from 'axios'

const sendToBackend = (state) => async () => {
    const {login, senha, setIsLoad} = state
    const configUserInfo = {
        method: 'GET',
        url: `https://api.github.com/users/${login}`,
    }
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
            await setIsLoad(true)
            console.log('Logou com sucesso!!')
            localStorage.setItem('isLogged', true)
            localStorage.setItem('gitUser', login)
            const userInfo = await axios(configUserInfo)
            localStorage.setItem('gitUserAvatar', userInfo.data.avatar_url)
            await setIsLoad(false)
        }else{
            console.log('Não Encontramos seu usuário')
        }
    } catch (error) {
        await setIsLoad(true)
        console.log("Não encontramos sua senha")
        localStorage.setItem('isLogged', true)
        localStorage.setItem('gitUser', login)
        const userInfo = await axios(configUserInfo)
        localStorage.setItem('gitUserAvatar', userInfo.data.avatar_url)
        await setIsLoad(false)
    }
}

export default sendToBackend