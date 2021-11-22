import React ,{useEffect} from 'react';
import '../styles/Footer.css'
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { Grid,Slider } from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { DataLayerValue } from '../data layer/Data';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const Footer = ({spotify}) => {
 const [{playing,token, song},dispatch] =DataLayerValue()
  useEffect(() => {

    
    spotify.getMyCurrentPlaybackState(token).then((r) =>{
      console.log(r)
      dispatch({
        type:'SET_PLAYING',
        playing :r.is_playing
      })

      dispatch({
        type:'SET_SONG',
        song:r.item
      })
      
    })
  }, []);

  const playPause =() =>{
    if(playing){
      spotify.pause();
      dispatch({
        type:'SET_PLAYING',
        playing:false
      })
    }else{
      dispatch({
        type:'SET_PLAYING',
        playing:true
      })
    }
  }

  const previousSkip =() =>{
    spotify.skipToPrevious();
    spotify.getMyCurrentPlaybackState(token).then((res) =>{
      dispatch({
        type:'SET_SONG',
        song:res.item
      })
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    })
  }

  const NextSkip =() => {
    spotify.skipToNext();
    spotify.getMyCurrentPlaybackState(token).then((res) => {
      dispatch({
        type: 'SET_SONG',
        song: res.item
      })
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    })

  }
    return (
      <div className="footer">
        <div className="footer_left">
          <img className="cover_art"
            src={song?.album?.images[0]?.url}
            alt="CoverArt"
          />
          <div className="footer_songinfo">
             <h4>{song?.name}</h4>
              <p>{song?.artists[0]?.name}</p>
          </div>
        </div>
        <div className="footer_middle">
          <ShuffleIcon className="footer_green" />
          <SkipPreviousIcon className="footer_icon" onClick={previousSkip} />
          {!playing && (<PlayCircleFilledWhiteIcon fontSize="large" className="footer_icon" onClick={playPause} />)}
          {playing && (<PauseCircleFilledIcon fontSize="large" className="footer_icon" onClick={playPause}/>)}
          <SkipNextIcon className="footer_icon" onClick={NextSkip} />
          <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    );
}

export default Footer;
