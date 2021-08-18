import './css/postCreate.css'
import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export default function PostCreate() {
    const [input, setInput] = useState('')


    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }

    return (
        <div className='post_create'>
            <div className="post_create__top">
            <Avatar/>
            <form>
            <input onChange={(e)=>setInput(e.targat.value)} value={input} placeholder="What's on your mind?"/>
            <button onClick={handleSubmit}>hidden button</button>
            </form>
            
            </div>
            <div className="post_create__bottom">
                <div className="post_create__bottom__item">
                    <VideocamIcon style={{ fontSize: 40,color:'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className='post_create__bottom__item'>
                    <PhotoLibraryIcon style={{ fontSize: 40,color:'red'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="post_create__bottom__item">
                    <InsertEmoticonIcon style={{ fontSize: 40,color:'red'}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            
            </div>            
        </div>
    )
}
