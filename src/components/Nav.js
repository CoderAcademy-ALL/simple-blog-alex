import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const divStyles = {
        display: 'flex'
    }
    const linkStyles = {
        fontSize: '1.2em',
        textDecoration: 'none',
        color: 'black',
        margin: '0.5em'
    }
    
    return (
        <div style={divStyles}>
          <Link style={linkStyles} to='/'>Home</Link>
          <Link style={linkStyles} to='/posts/new'> Add a Post</Link>  
        </div>
    )
}

export default Nav;
