import React from 'react'
import './message.css';
import { Avatar } from '@mui/material';

const Message = ({timestamp, user, message}) => {
  return (
    <div className='message'>
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>
            {user.displayName}
            <span className="message_timestamp">
                {new Date(timestamp?.toDate()).toUTCString()}
            </span>

        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message;
