import React from 'react';
import classes from './login.module.css';
import icon from './myimage.jpeg';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <button className={classes.loginBtn}>Login Button</button>
            <img src={icon.src} alt="" />
        </div>
    )
}
export default Login;