import React from 'react'
import '../styles/SidebarOptions.css'

function SidebarOptions({option ,Icon,playlist}) {
    return (
      <div className="sidebar_options">
        {Icon && <Icon className="side_options_icon" />}
        {Icon ? <h4>{option}</h4> : <p>{option}</p>}
        <h4>{playlist}</h4>
      </div>
    );
}

export default SidebarOptions
