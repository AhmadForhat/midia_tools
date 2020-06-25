const sendToBackend = (state) => async () => {
    const {setLoading, setReposFilter, ultimosCommits, filterRepo} = state
    try {
        if(filterRepo){
            await setLoading(true)
            const filtrado = ultimosCommits.filter(ultimosCommits => ultimosCommits.committer.login.toLowerCase().includes(filterRepo.toLowerCase()))
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