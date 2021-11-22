import React from 'react';
import logo from '../images/Spotify_Logo_RGB_White.png'
import '../styles/Login.css'
import { loginUrl} from "../spotify"

const Login = () => {
    return (
        <div className="login">
            <img src={logo} alt="Logo"/>
            <a href={loginUrl}>Login with Spotify</a>
        </div>
    );
}

export default Login;
