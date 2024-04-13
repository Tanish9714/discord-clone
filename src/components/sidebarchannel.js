import React from 'react'
import './sidebarchannel.css';
import { setChannelInfo } from '../features/appSlice';
import { useDispatch } from 'react-redux';

const SidebarChannel = ({id,channelName}) => {
  const dipatch = useDispatch();
  
  return (
    <div className='sidebarChannel' onClick={()=>
    dipatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    )}> 
        <h4><span className="sidebarChannelHash">#</span>{channelName}</h4>
    </div>
  )
}

export default SidebarChannel;  
