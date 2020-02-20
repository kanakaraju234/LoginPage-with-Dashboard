import React, { Component } from 'react'

class Login extends Component {
            state = {
                isLogin: false
            }

            handleSubmit = e => {
                e.preventDefault()
                const user = e.target.userName.value
                const passwd = e.target.passWord.value


                this.props.loginAction(user,passwd)
                this.props.history.push('/dashboard')
               
            }
            render () {
                return (
                <div className='login-container'>
                    <div className='row'>
                    <div className='col-md-6 login-form-2'>
                        <h3>Admin Login ! </h3>
                        <form onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Your Email *'
                                    name='userName'
                                    required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Your Password *'
                                    name='passWord'
                                    required
                                    />
                                </div>
                                <div className='form-group'>
                                    <input type='submit' className='btnSubmit' value='Login' />
                                </div>
                               
                        </form>
                    </div>
                    </div>
                </div>
                )
            }
            }

export default Login
