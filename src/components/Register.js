import React, { useState } from 'react';

function Register() {
    const initalState = {
        username: '',
        email: '',
        password: ''
    }
    
    const [formState, setFormState] = useState(initalState);
   
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' onChange={handleChange} value={formState.username}></input>
                <label>Email</label>
                <input type='email' name='email' onChange={handleChange} value ={formState.email}></input>
                <label>Password </label>
                <input type='password' name='password' onChange={handleChange} value={formState.password}></input>
                <input type='submit' value='Register' />
            </form>
            
        </div>
    )
}

export default Register;
