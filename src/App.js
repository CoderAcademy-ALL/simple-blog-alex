import React, {useEffect, useReducer} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

import stateReducer from './config/stateReducer';
import blogData from './data/post_data';
import BlogPosts from './components/BlogPosts';
import BlogPost from './components/BlogPost';
import Nav from './components/Nav';
import NewBlogPost from './components/NewBlogPost';
import Register from './components/Register';
import Login from './components/Login';
import EditBlogPost from './components/EditBlogPost';
import {StateContext} from './config/globalState';
import {getUserFromSessionStorage} from './services/authServices'

const App = () => {
  
  const initialState = {
    loggedInUser: null,
    blogPosts: []
  }
  
  const [store, dispatch] = useReducer(stateReducer, initialState);
  const {blogPosts} = store;
  
 
  useEffect(() => {
    dispatch({type: "setBlogPosts", data: blogData});
  }, [])

  useEffect(() =>{
   const user = getUserFromSessionStorage();
   dispatch({type: "setLoggedInUser", data: user});
  },[])

  const getPostById = (id) => {
    return blogPosts.find(post => post._id === parseInt(id));
  }

  const getNextId = () => {
    const ids = blogPosts.map(post => post._id);
    return Math.max(...ids) + 1;
  }


  return (
    <div >
      <StateContext.Provider value={{store, dispatch}} >
      <BrowserRouter>
      <Nav />
      <h1>Many Mumbling Mice</h1>
      <Switch>
      <Route exact path='/' component={BlogPosts} />
      <Route exact path ='/register' component={Register}/>
      <Route exact path ='/login' component={Login}/>
      <PrivateRoute 
      exact path ='/posts/new' 
      component={NewBlogPost} 
      options={{nextId: getNextId()}}
       />
    
      
      <Route exact path ='/posts/:id' 
      render={(props) => <BlogPost {...props} post={getPostById(props.match.params.id)} showControls/>}
      />

      <Route exact path ='/posts/edit/:id' component={EditBlogPost} />
      
      </Switch>
      </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
