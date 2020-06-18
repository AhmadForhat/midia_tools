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
        const cadastrar = await axios(config)
        console.log(cadastrar)        
        setNews(true)
        await setLoading(false)        
    } catch (error) {        
        console.log(error)
        setNews(false)
        setErrorNews(true)
        await setLoading(false)
    }
}

export default sendToBackend