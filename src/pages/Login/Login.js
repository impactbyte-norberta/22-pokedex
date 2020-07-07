import React, { useState } from 'react';

function Login() {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        localStorage.setItem('user', JSON.stringify(userLogin));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={userLogin.email}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={userLogin.password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input type='submit' value='Login' />
            </form>
        </div>
    );
}

export default Login;