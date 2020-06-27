import React from 'react';
import { Link } from 'react-router-dom';
import {useGlobalState} from '../config/globalState';


function Nav() {
    const {store, dispatch} = useGlobalState();
    const {loggedInUser: user} = store;
    
    const handleLogOut = () => {
        dispatch({type: "setLoggedInUser", data: null});
      }
    

    const divStyles = {
        display: 'flex'
    }
    const linkStyles = {
        fontSize: '1.2em',
        textDecoration: 'none',
        color: 'black',
        margin: '0.5em'
    }
    const greetingStyle  = {
        fontSize: '1.2em',
        textDecoration: 'none',
        color: 'grey',
        margin: '0.5em'
    }
    
    return (
        <div style={divStyles}>
          {user ? 
          ( 
          <>
            <Link style={linkStyles} to='/' onClick={handleLogOut}>Logout</Link>
            <span style={greetingStyle}> Hello {user}</span>
            </> 
        )
        :
        (
            <>
            <Link style= {linkStyles} to='/register'>Register</Link>
            <Link style= {linkStyles} to='/login'>Login</Link>
            </>
        )}
          <Link style={linkStyles} to='/'>Home</Link>
          <Link style={linkStyles} to='/posts/new'> Add a Post</Link>
    
          

        </div>
    )
}

export default Nav;
