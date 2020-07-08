import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom'
import {useGlobalState} from '../config/globalState'
import Heading from './styled/Heading';
import Row from './styled/Row';
import Button from './styled/Button';

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
             <Heading color={category ==='code' ? 'purple': 'orange'}>{title}</Heading>
         </Link>
        <p>{moment(modified_date).fromNow()}</p>
        <p>{category}</p>
        <p>{content}</p>
        {showControls &&
            <Row>
            <Button danger onClick={handleDelete}>Delete</Button>
            <Button caution onClick ={() => history.push(`/posts/edit/${_id}`)} >Edit</Button>
            </Row>
        }
        </div>
    )
}

export default BlogPost;
