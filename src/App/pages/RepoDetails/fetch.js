import axios from 'axios'


const fetch = (url, state) => { 
    const source = axios.CancelToken.source()     
  const run = async () => {        
        const config = {
            method: 'GET',
            url: url,            
        }        

        try {
            const result = await axios(config)
            
            const arrayCommits = result.data.map(item => [item.login, item.contributions])

            await state.setData(result.data)
            await state.setArrayGraphic(arrayCommits)

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