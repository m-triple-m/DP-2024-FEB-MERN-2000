'use client';
import React from 'react';
import classes from './login.module.css';
import icon from './myimage.jpeg';
import { useFormik } from 'formik';

const Login = () => {

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className='col-md-4 mx-auto'>

            <div className='card shadow'>
                <div className='card-body'>
                    <h3 className='text-center py-4'>Login Form</h3>
                    <form onSubmit={loginForm.handleSubmit}>
                        <label htmlFor="">Email Address</label>
                        <input type="email"
                            className='form-control mb-5'
                            id='email'
                            onChange={loginForm.handleChange}
                            value={loginForm.values.email} />

                        <label htmlFor="">Password</label>
                        <input
                            type="password"
                            className='form-control mb-5'
                            id='password'
                            onChange={loginForm.handleChange}
                            value={loginForm.values.password}
                        />

                        <button type='submit' className='btn btn-primary mt-5 w-100'>Submit</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Login;