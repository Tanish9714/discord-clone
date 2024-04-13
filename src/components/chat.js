import React, { useEffect } from 'react';
import './chat.css';
import Chatheader from './chatheader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GiftIcons from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { useState } from 'react';
import db from './firebase';
import Message from './message';
import firebase from 'firebase/compat/app';


const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]); 

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [channelId]); 

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    };

    return (
        <div className='chat'>
            <Chatheader channelName={channelName} />

            <div className="chat_messages">
                {
                    messages.map((message) => (
                        <Message 
                            timestamp={message.timestamp}
                            message={message.message}
                            user={message.user}
                        />
                    ))
                }
            </div>

            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form action="">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={!channelId}
                        type="text" placeholder={`Message #Youtube`} />
                    <button onClick={sendMessage} disabled={!channelId} type='submit' className='chat_inputButton'>Send Message</button>
                </form>

                <div className="chat_inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GiftIcons fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat;
