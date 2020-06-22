import axios from 'axios'


const fetch = (state) => {
  const source = axios.CancelToken.source()  
  const userName = localStorage.getItem('gitUser')  
  const run = async () => {        
        const config = {
            method: 'GET',
            url: `https://api.github.com/users/${userName}`,
        }
        try {
            const result = await axios(config)
            await state.setName(result.data.login)
            await state.setPerfilImg(result.data.avatar_url)
          } catch (error) {
            console.log(error)
            await state.setError(true)
        } finally {
            console.log('finalizou')
        }
    }
    run()
    return () => source.cancel('Canceled fetch request. Component unmounted')
}

export default fetch
