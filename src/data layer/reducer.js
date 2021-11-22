export const initialState={
    user:null,
    token:"",
    playlists:[],
    playing:false,
    item:false
}

export const reducer= (state,action)=>{
    console.log(action);
    console.log(action.playlist);
    console.log(action.userPlaylist)
    console.log(action.search)
    console.log(action.searchSong)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case 'GET_PLAYLIST':
            return {
                ...state,
                playlists:action.playlist

            }  
        case 'USER_PLAYLIST':
            return {
                ...state,
             userPlaylist:action.userPlaylist
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing:action.playing
            }    
            default:


        case 'SET_SONG' :
            return{
                ...state,
                song:action.song
            }

        case 'SEARCH' :
            return {
                ...state,
                search:action.search
            }

        case 'SEARCH_SONG' :{
            return {
                ...state,
                searchSong: action.searchSong
            }
        }
                return state;
    }
}