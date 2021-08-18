import './css/Story.css'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';


export default function Story({imagesrc,profileLink,title}) {
    return (
        <div style={{backgroundImage:`url(${imagesrc})`}} className='story'>
            <Avatar className='story__avatar' src={profileLink} />
            <h4>{title}</h4>
        </div>
    )
}
