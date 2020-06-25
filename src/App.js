import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import blogData from './data/post_data';
import BlogPosts from './components/BlogPosts';
import BlogPost from './components/BlogPost';
import Nav from './components/Nav';
import NewBlogPost from './components/NewBlogPost';

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    setBlogPosts(blogData);
  }, [])

  const getPostById = (id) => {
    return blogPosts.find(post => post._id === parseInt(id));
  }
  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, post])
  }

  const getNextId = () => {
    const ids = blogPosts.map(post => post._id);
    return Math.max(...ids) + 1;
  }
  return (
    <div >
      <BrowserRouter>
      <Nav />
      <h1>Many Mumbling Mice</h1>
      <Switch>
      <Route exact path='/' 
        render={(props) => <BlogPosts {...props} postData={blogPosts} />}
        />
      
      <Route exact path ='/posts/new'
      render = {(props) => <NewBlogPost {...props}  getNextId={getNextId()} addBlogPost={addBlogPost} />}
      />
      
      <Route exact path ='/posts/:id' 
      render={(props) => <BlogPost {...props} post={getPostById(props.match.params.id)} />}
      />

      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
