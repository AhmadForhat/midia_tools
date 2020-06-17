import axios from 'axios'


const fetch = (state) => {
    const source = axios.CancelToken.source()    
    const run = async () => {        
        const config = {
            method: 'POST',
            url: '',
            headers: {Authorization: ''},
            data: { "userName": '' }
        }

        try {
            const result = await axios(config)            
            state.setData(result.data)
            state.setArray([['public_repos', 17], ['public_gists', 0], ['followers', 4], ['following', 5]])
        } catch (error) {
            console.log(error)
        } finally {
            console.log('finalizou')
        }
    }
    run()
    return () => source.cancel('Canceled fetch request. Component unmounted')
}

export default fetch
