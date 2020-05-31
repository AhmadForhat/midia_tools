import axios from 'axios'

const fetch = (state) => {
    const run = async () => {
        const {user, setInfo} = state
        const config = {
            method: 'POST',
            url: process.env.URL,
            headers: {Authorization: process.env.TOKEN},
            data: { "userName": user }
        }
        try {
            const result = await axios(config)
            console.log(result)
            setInfo(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    run();
};

export default fetch;
