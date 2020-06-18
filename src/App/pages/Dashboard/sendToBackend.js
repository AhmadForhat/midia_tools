const sendToBackend = (state) => async () => {
    const {setLoading, setReposFilter, repos, filterRepo} = state
    try {
        if(filterRepo){
            await setLoading(true)
            const filtrado = repos.filter(repo => repo.name.includes(filterRepo))
            await setReposFilter(filtrado)
            await setLoading(false)
        }else{
            await setLoading(true)
            await setReposFilter([])
            await setLoading(false)
        }
    } catch (error) {
        await setLoading(false)
    }
}

export default sendToBackend