import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/Post.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Post({profilePic,name,image,message}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar className='post__top__avatar' src={profilePic}/>
                <div className="post__info">
                    <h3>{name}</h3>
                    <p>timestamp</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image}/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpOutlinedIcon fontSize="large"/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon fontSize="large"/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <ReplyOutlinedIcon fontSize="large"/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon fontSize="large"/>
                    <ExpandMoreIcon fontSize="large"/>
                </div>
            </div>
        </div>
    )
}
