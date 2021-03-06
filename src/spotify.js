export const authEndpoint ="https://accounts.spotify.com/authorize"


const redirectUri = 'http://localhost:3000/'

const clientId ="bd4b37fc02c34c338e425847131471a9"

const scopes =[
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-read-recently-played",
    "streaming", 
    "user-read-email", 
    "user-read-private"
]

export const  getTokenFromUrl =() =>{
    return window.location.hash.substring(1)
    .split('&')
    .reduce((initial,item)=>{
       let parts =item.split('=')
       initial[parts[0]]=decodeURIComponent(parts[1])
       return initial
    },{})
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

