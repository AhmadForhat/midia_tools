import axios from 'axios'

const sendToBackend = (state) => async () => {
    const {email, setNews, setErrorNews, setLoading} = state
    const config = {
        method:'POST',
        url:'http://localhost:9000/newsletter',
        data: {
            email
        }
    }
    console.log(config.data)
    try {
        await setLoading(true)
        await axios(config)      
        await setNews(true)
        await setLoading(false)        
    } catch (error) {        
        console.log(error)
        await setNews(false)
        await setErrorNews(true)
        await setLoading(false)
    }
}

export default sendToBackend