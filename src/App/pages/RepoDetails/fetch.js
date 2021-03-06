import axios from 'axios'
require('dotenv').config()


const fetch = (url1, url2, state) => { 
    const source = axios.CancelToken.source()     
  const run = async () => {        
        const config1 = {
            method: 'GET',
            url: url1,
            headers:{
                Authorization:`token 2e190bc1e4497052cd82ff44e2a09f414753c686`
            }            
        }

        const config2 = {
            method: 'GET',
            url: url2,
            headers:{
                Authorization:`token 2e190bc1e4497052cd82ff44e2a09f414753c686`
            }            
        }        

        try {
            const result = await axios(config1)
            const commit = await axios(config2)
            
            const arrayCommits = result.data.map(item => [item.login, item.contributions])                        

            await state.setData(result.data)
            await state.setArrayGraphic(arrayCommits)
            await state.setUltimosCommits(commit.data)
            await state.setLoading(false)   
                    
          } catch (error) {
            console.log(error)
            await state.setLoading(false)
            await state.setError(true)
        } finally {
            console.log('finalizou')
        }
    }
    run()
    return () => source.cancel('Canceled fetch request. Component unmounted')
}

export default fetch