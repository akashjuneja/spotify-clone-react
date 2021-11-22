import React ,{useEffect,useState}from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { DataLayerValue } from './data layer/Data';

function App() {
  let spotify = new SpotifyWebApi();
console.log(spotify)
  const [{ user, token, playlist, userPlaylist, search, searchSong},dispatch] = DataLayerValue();
  useEffect(() => {
    const hash =getTokenFromUrl();
    window.location.hash=""
    const _token=hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })
      spotify.setAccessToken(_token)
       spotify.getMe().then((user) => {
        dispatch({
          type:'SET_USER',
          user: user
        })
      });
    }
    spotify.getUserPlaylists().then((playlist) =>{
      dispatch({
        type:"GET_PLAYLIST",
        playlist:playlist
      })
    })

    spotify.getPlaylist('37i9dQZEVXcGg0e9Nq4fFc').then((track) =>{
      dispatch({
        type:'USER_PLAYLIST',
        userPlaylist:track
      })
    })
    
    spotify.searchTracks(search).then((track) =>{
      dispatch({
        type:'SEARCH_SONG',
        searchSong :track
      })
    })

    console.log("i",token) 
    console.log("i",playlist) 
    console.log("i", userPlaylist) 
  }, []);
  console.log("okay", user);
  return (
    <>
    <div className="app">
      {token ?(
        <Player spotify={spotify}/>
        ) : (<Login />) }
      </div>
    </>
  );
}

export default App;
