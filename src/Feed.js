import './css/Feed.css'
import StoryReel from './StoryReel'
import React from 'react'
import PostCreate from './PostCreate'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <PostCreate/>
            <Post profilePic='https://lh3.googleusercontent.com/ogw/ADea4I4Olu7qHciiOvYjjpqMRdMMIVxv10CZ3kZXYTfXzw=s83-c-mo'
            name='rabbani'
            image='https://images.unsplash.com/photo-1618588507085-c79565432917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            message='wow beautiful.'
            />
            <Post profilePic='https://lh3.googleusercontent.com/ogw/ADea4I4Olu7qHciiOvYjjpqMRdMMIVxv10CZ3kZXYTfXzw=s83-c-mo'
            name='rabbani'
            image='https://images.unsplash.com/photo-1618588507085-c79565432917?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            message='wow beautiful.'
            />
           
        </div>
    )
}

export default Feed
