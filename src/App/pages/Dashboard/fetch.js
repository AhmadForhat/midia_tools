import axios from 'axios'


const fetch = (state, filterRepo) => {
  const userName = localStorage.getItem('gitUser')
  const source = axios.CancelToken.source()    
  const run = async () => {        
        const config = {
            method: 'GET',
            url: `https://api.github.com/users/${userName}`,
            data: { "userName": '' }
        }
        const configRepo = {
            method: 'GET',
            url: `https://api.github.com/users/${userName}/repos`
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
