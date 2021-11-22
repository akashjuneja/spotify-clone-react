import React from 'react';
import '../styles/Sidebar.css'
import logo from '../images/Spotify_Logo_RGB_White.png'
import SidebarOptions from './SidebarOptions';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { DataLayerValue } from '../data layer/Data';

const Sidebar = () => {
    const [{ playlists }] = DataLayerValue();
    return (
      <div className="sidebar">
        <img src={logo} alt="Logo" />
        <SidebarOptions option="Home" Icon={HomeIcon} />
        <SidebarOptions option="Search" Icon={SearchIcon} />
        <SidebarOptions option="Your  Library" Icon={LibraryMusicIcon} />
        <strong className="sidebar_title">PLAYLIST</strong>
        <hr />
        {playlists?.items?.map((play) => {
          return <SidebarOptions  playlist={play.name} />;
        })}
        
      </div>
    );
}

export default Sidebar;
