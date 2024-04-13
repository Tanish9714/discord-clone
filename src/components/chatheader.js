import React from 'react'
import './chatheader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

const Chatheader = ({channelName}) => {
  return (
    <div className='chatheader'>
        <div className="chatheader_left">
            <h3><span className="chatheader_hash">#</span>{channelName}</h3>
        </div>

        <div className="chatheader_right">
            <NotificationsIcon />
            <EditLocationRoundedIcon />
            <PeopleAltIcon />

            <div className="chatheader_search">
                <input placeholder="Search" />
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />
        </div>       
    </div>
  )
}

export default Chatheader;
