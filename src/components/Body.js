import React from 'react'
import Header from './Header'
import '../styles/Body.css'
import { DataLayerValue } from '../data layer/Data';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body({spotify}) {

  const[{userPlaylist}]=DataLayerValue();
  console.log(userPlaylist)
    return (
      <div className="body">
        <Header spotify={spotify} />
        <div className="body_info">
          <img
            src={userPlaylist?.images[0].url}
            alt="Discover Weekly"
          />
          <div className="body_infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
          <p>{userPlaylist?.description}</p>
          </div>
        </div>
        <div className="body_songs">
          <div className="body_icons">
            <PlayCircleFilledIcon className="bodyShuffle"/>
            <FavoriteIcon fontSize="large"/>
            <MoreHorizIcon/>
          </div>
          {userPlaylist?.tracks?.items.map(item =>
            <SongRow track={item.track}/>)}
        </div>
      </div>
    );
}

export default Body
