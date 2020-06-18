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
            const result = {data:{
                login: "AhmadForhat",
                id: 54677103,
                node_id: "MDQ6VXNlcjU0Njc3MTAz",
                avatar_url: "https://avatars1.githubusercontent.com/u/54677103?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/AhmadForhat",
                html_url: "https://github.com/AhmadForhat",
                followers_url: "https://api.github.com/users/AhmadForhat/followers",
                following_url: "https://api.github.com/users/AhmadForhat/following{/other_user}",
                gists_url: "https://api.github.com/users/AhmadForhat/gists{/gist_id}",
                starred_url: "https://api.github.com/users/AhmadForhat/starred{/owner}{/repo}",
                subscriptions_url: "https://api.github.com/users/AhmadForhat/subscriptions",
                organizations_url: "https://api.github.com/users/AhmadForhat/orgs",
                repos_url: "https://api.github.com/users/AhmadForhat/repos",
                events_url: "https://api.github.com/users/AhmadForhat/events{/privacy}",
                received_events_url: "https://api.github.com/users/AhmadForhat/received_events",
                type: "User",
                site_admin: false,
                name: "Ahmad Forhat",
                company: null,
                blog: "",
                location: "São Paulo",
                email: null,
                hireable: null,
                bio: null,
                twitter_username: null,
                public_repos: 17,
                public_gists: 0,
                followers: 4,
                following: 5,
                created_at: "2019-08-29T14:57:42Z",
                updated_at: "2020-06-17T16:12:22Z"
                }}            
            state.setData(result.data)
            state.setArray([['public_repos', result.data.public_repos], ['public_gists', result.data.public_gists], ['followers', result.data.followers], ['following', result.data.following]])
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
