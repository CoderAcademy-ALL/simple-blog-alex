import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import blogData from './data/post_data';
import BlogPosts from './components/BlogPosts';
import BlogPost from './components/BlogPost';
import Nav from './components/Nav';
import NewBlogPost from './components/NewBlogPost';
import Register from './components/Register';
import Login from './components/Login';
import EditBlogPost from './components/EditBlogPost';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('Alex');
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

  const handleLogOut = () => {
    setLoggedInUser(null);
  }
  
  const handleRegister = (user, history) => {
    const {username} = user;
    setLoggedInUser(username);
    history.push('/')
  }

  const deleteBlogPost = (id) => {
    console.log(id);
    const newBlogPosts = blogPosts.filter(post => post._id !== parseInt(id))
    setBlogPosts(newBlogPosts);
  }

  const updateBlogPost = (updatedPost) => {
    const newBlogPosts = blogPosts.filter(post => post._id !== updatedPost._id)
    setBlogPosts([...newBlogPosts, updatedPost]);
  }

  return (
    <div >
      <BrowserRouter>
      <Nav user={loggedInUser} handleLogOut={handleLogOut} />
      <h1>Many Mumbling Mice</h1>
      <Switch>
      <Route exact path='/' 
        render={(props) => <BlogPosts {...props} postData={blogPosts} />}
        />
      
      <Route exact path ='/register'
      render = {(props) => <Register {...props} handleRegister={handleRegister} />}
      />
      <Route exact path ='/login'
      render = {(props) => <Login {...props} handleLogin={handleRegister} />}
      />
      <Route exact path ='/posts/new'
      render = {(props) => <NewBlogPost {...props}  getNextId={getNextId()} addBlogPost={addBlogPost} />}
      />
      
      <Route exact path ='/posts/:id' 
      render={(props) => <BlogPost {...props} post={getPostById(props.match.params.id)} showControls deleteBlogPost={deleteBlogPost} />}
      />

      <Route exact path ='/posts/edit/:id' 
      render={(props) => <EditBlogPost {...props} post={getPostById(props.match.params.id)} updateBlogPost={updateBlogPost}  />}
      />

      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
