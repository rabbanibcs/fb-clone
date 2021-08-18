import './css/SideBarRow.css'
import Avatar from '@material-ui/core/Avatar';


import React from 'react'

export default function SideBarRow({src,Icon,title}) {
    return (
        <div className='sidebarrow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}