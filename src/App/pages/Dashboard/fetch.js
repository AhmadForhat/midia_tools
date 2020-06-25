import axios from 'axios'
require('dotenv').config()


const fetch = (state) => {
  const userName = localStorage.getItem('gitUser')
  const source = axios.CancelToken.source()    
  const run = async () => {        
        const config = {
            method: 'GET',
            url: `https://api.github.com/users/${userName}`,
            headers:{
                Authorization:`token 2e190bc1e4497052cd82ff44e2a09f414753c686`
            }
        }
        const configRepo = {
            method: 'GET',
            url: `https://api.github.com/users/${userName}/repos`,
            headers:{
                Authorization:`token 2e190bc1e4497052cd82ff44e2a09f414753c686`
            }
        }

        try {
            const result = await axios(config)
            const resultRepo = await axios(configRepo)
            await state.setData(result.data)
            await state.setRepos(resultRepo.data)
            await state.setGraphicParms([['public_repos', result.data.public_repos], ['public_gists', result.data.public_gists], ['followers', result.data.followers], ['following', result.data.following]])
            await state.setLoading(false)
          } catch (error) {
            console.log(error)
            await state.setLoading(false)
            await state.setError(error)
        } finally {
            console.log('finalizou')
        }
    }
    run()
    return () => source.cancel('Canceled fetch request. Component unmounted')
}

export default fetch
