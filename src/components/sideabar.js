import React, { useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './sidebar.css';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarchannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallIcon from '@mui/icons-material/Call';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from './firebase';
import { useState } from 'react';


const Sideabar = () => {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channelName: doc.data().channelName, // Ensure you're accessing the correct property name
            })))
        })
    }, []);
    


    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
        console.log(channelName);
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    }

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <h3>Programmer</h3>
                <KeyboardArrowDownIcon />
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebarHeader">
                        <KeyboardArrowDownIcon />
                        <h3>Text Channels</h3>
                    </div>

                    <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" />
                </div>

                <div className="sidebar_channelList">
                    {channels.map((channel) => (
                        <SidebarChannel key={channel.id} id={channel.id} channelName={channel.channelName} />
                    ))}
                </div>

            </div>

            <div className="sidebar_voice">
                <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar_voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar_profile">
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>

                <div className="sidebar_profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>


        </div>
    )
}

export default Sideabar
