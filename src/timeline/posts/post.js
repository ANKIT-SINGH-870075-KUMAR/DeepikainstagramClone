import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';
import  MoreHorizIcon  from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon  from '@mui/icons-material/Telegram';
import BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder';




function post({user, postImage, like, timestamp}) {
    return (
        <div className='post'>
            <div className='post_header'>
                <div className='post_headerAuthor'>
                    <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                    {user} - <span>{timestamp}</span>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className='post_image'>
                <img src={postImage} alt=''/>
            </div>
            <div className='post_footer'>
                <div className='post_footerIcons'>
                    <div className='post_iconsMain'>
                        <FavoriteBorderIcon className='postIcon'/>
                        <ChatBubbleOutlineIcon className='postIcon'/>
                        <TelegramIcon className='postIcon'/>
                    </div>
                    <div className='post_iconsSave'>
                    <BookmarkBorderIcon className='postIcon'/>
                    </div>
                </div>
                Liked by {like} people
            </div>
        </div>
    )
}

export default post;
