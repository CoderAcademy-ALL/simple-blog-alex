import React, {useState} from 'react';
import {useGlobalState}  from '../config/globalState';
import {setUserInSessionStorage} from '../services/authServices'


function Login({history}) {
    const {dispatch} = useGlobalState()
    const initalState = {
        username: '',
        password: ''
    }
    
    const [formState, setFormState] = useState(initalState);
   
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserInSessionStorage(formState.username);
        dispatch({type: "setLoggedInUser", data: formState.username})
        history.push('/')
    }

    const divStyles = {
        display: 'grid',
        width: '100vw',
    }
    const inputStyles = {
        width: '70vw',
        margin: '0.5em'
    }
    const labelStyles = {
        fontSize: '1.2em'
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={divStyles}>
                <label style={labelStyles}>Username</label>
                <input style={inputStyles} type='text' name='username' onChange={handleChange} value={formState.username}></input>
                </div>
                <div style={divStyles}>
                <label style={labelStyles}>Password </label>
                <input style={inputStyles} type='password' name='password' onChange={handleChange} value={formState.password}></input>
                </div>
                <input type='submit' value='Login' />
            </form>
            
        </div>
    )
    }
export default Login;
