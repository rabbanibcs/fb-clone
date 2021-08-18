import './css/Widgets.css'
import React from 'react'

export default function Widgets() {
    return (
        <div className='widgets'>
            <iframe
             src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRobiFanz%2Fposts%2F4832242946787996&show_text=true&width=500"
              width="100%" height="704" 
              scrolling="no" frameborder="0" allowfullscreen="true"
               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

               </iframe>
               <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRobiFanz%2Fposts%2F4827182653960692&show_text=true&width=500"
                width="100%" height="628" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" 
               allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
    )
}
