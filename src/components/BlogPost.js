import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'

function BlogPost(props) {
    const linkStyles = {
        textDecoration : 'none',
        color: 'black'
    }

    if(!props.post) return null
    const {_id, title, modified_date, category, content} = props.post;
    
    return (
        <div>
         <Link to ={`/posts/${_id}`}  style={linkStyles}>
             <h2>{title}</h2>
         </Link>
        <p>{moment(modified_date).fromNow()}</p>
        <p>{category}</p>
        <p>{content}</p>
        </div>
    )
}

export default BlogPost;
