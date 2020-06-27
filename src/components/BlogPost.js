import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'
import {useGlobalState} from '../config/globalState'

function BlogPost(props) {
    const {dispatch} = useGlobalState();
    const linkStyles = {
        textDecoration : 'none',
        color: 'black'
    }
    
    if(!props.post) return null
    const {_id, title, modified_date, category, content} = props.post;
    const {showControls, history} = props;

    const handleDelete = (event) => {
        console.log(event);
        dispatch({type: "deleteBlogPost", data: _id})
        history.push('/');
    }
    return (
        <div>
         <Link to ={`/posts/${_id}`}  style={linkStyles}>
             <h2>{title}</h2>
         </Link>
        <p>{moment(modified_date).fromNow()}</p>
        <p>{category}</p>
        <p>{content}</p>
        {showControls && <button onClick={handleDelete}>Delete</button>}
        {showControls && <button onClick ={() => history.push(`/posts/edit/${_id}`)} >Edit</button>}
        </div>
    )
}

export default BlogPost;
