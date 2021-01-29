import React, { useEffect, useState } from "react";
import axios from "axios";

const initialCredentials = {
  username: '',
  password: ''
}

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  const [credentials, setCredentials] = useState(initialCredentials)
  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name] : value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('submit');
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        // console.log('login success: ', res)
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => {
        console.log('login fail: ', err)
      })
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Login here!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username
          <input 
            type='username'
            id='username'
            name='username'
            value={credentials.username}
            onChange={handleChange}
            placeholder='Username'
          />
          </label>
          <label htmlFor='password'>Password
          <input 
            type='password'
            id='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            placeholder='Password'
          />
          </label>
        <button>Log in!</button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.