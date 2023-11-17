import React from 'react';
import "./Suggestion.css";
import { Avatar } from '@mui/material';

function Suggestion() {
  return (
    <div className="Suggestions">
      <div className="suggestions_title">Suggestions for you</div>
      <div className='suggestions_usernames'>
        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>D</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Deepika</span>
              <span className='relation'>Follow by artistsinghbro</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>D</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Deepika</span>
              <span className='relation'>Follow by artistsinghbro</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>D</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Deepika</span>
              <span className='relation'>Follow by artistsinghbro</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
        <div className='suggestion_username'>
          <div className='username_left'>
            <span className='avatar'>
              <Avatar>D</Avatar>
            </span>
            <div className='username_info'>
              <span className='username'>Deepika</span>
              <span className='relation'>Follow by artistsinghbro</span>
            </div>
          </div>
          <button className='follow_button'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestion;
