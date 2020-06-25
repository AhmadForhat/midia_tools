import axios from 'axios'
require('dotenv').config()

const sendToBackend = (state) => async () => {
    const {login, senha, setIsLoad, setError} = state
    const configUserInfo = (gitUser) => {
        return {
            method: 'GET',
            url: `https://api.github.com/users/${gitUser}`,
            headers:{
                Authorization:`token {{gitToken}}`
            }
        }
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
        await setIsLoad(true)
        const logou = await axios(config)
        if(logou.status === 201 ){            
            await setError(false)
            localStorage.setItem('isLogged', true)
            localStorage.setItem('gitUser', logou.data.userGithub)
            const userInfo = await axios(configUserInfo(logou.data.userGithub))
            localStorage.setItem('gitUserAvatar', userInfo.data.avatar_url)
            await setIsLoad(false)
        }else{
            console.log('Não Encontramos seu usuário')
        }
    } catch (error) {                
        await setError(true)
        await setIsLoad(false)
    }
}

export default sendToBackend