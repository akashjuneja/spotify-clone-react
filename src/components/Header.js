import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';
import '../styles/Header.css'
import { DataLayerValue } from '../data layer/Data';
export default function Header({spotify}) {
    const [{ user ,search }, dispatch] = DataLayerValue();
    console.log(user);
    const setText =(event) =>{
        dispatch({
            type:'SEARCH',
            search :event.target.value
        })
    }

    return (
        
        <div>
            <div className="header">
            <div className="header_left">
               <SearchIcon/>
               <input placeholder="Search for Artists ,Songs or Podcasts"
               type="text"
               value={search}
               onChange={setText}/>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
    <h4>{user?.display_name}</h4>
            </div>
            </div>
        </div>
    )
}
