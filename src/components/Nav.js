import React from 'react';
import {useGlobalState} from '../config/globalState';
import {setUserInSessionStorage} from '../services/authServices'
import PlainLink from './styled/PlainLink';

function Nav() {
    const {store, dispatch} = useGlobalState();
    const {loggedInUser: user} = store;
    
    const handleLogOut = () => {
        setUserInSessionStorage(null);
        dispatch({type: "setLoggedInUser", data: null});
      }
    

    const divStyles = {
        display: 'flex'
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
            <PlainLink to='/' onClick={handleLogOut}>Logout</PlainLink>
            <span style={greetingStyle}> Hello {user}</span>
            </> 
        )
        :
        (
            <>
            <PlainLink to='/register'>Register</PlainLink>
            <PlainLink to='/login'>Login</PlainLink>
            </>
        )}
          <PlainLink  to='/'>Home</PlainLink>
          <PlainLink to='/posts/new'> Add a Post</PlainLink>
    
          

        </div>
    )
}

export default Nav;
