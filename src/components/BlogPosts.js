import React from 'react';
import BlogPost from './BlogPost';
import {useGlobalState} from '../config/globalState';

function BlogPosts() {
    const {store} = useGlobalState();
    const {blogPosts: postData} = store;
    return (
        <div>
            {postData.sort((a,b) => b.modified_date - a.modified_date)
            .map((post => <BlogPost key={post._id} post={post} />))}
        </div>
    )
}

export default BlogPosts;
