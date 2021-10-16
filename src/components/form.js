//Form Component
import React, { Component } from 'react';

import '../styles/form.css';
import EyeIcon from '../images/eyeIcon.png';
import GoogleIcon from '../images/googleIcon.png';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowPassword: false,
        }
        this.handleEyeIcon = this.handleEyeIcon.bind(this);
    }

    handleEyeIcon(){
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {    
        return (
            <div className="form">
                <div className="form-header">
                    <label className="form-account-label">Don't have an account?</label>
                    <div className="form-signup-button">
                        <button className="signup-button">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="form-wrapper">
                    <div className="form-container">
                        <div className="form-login">
                            <div className="form-login-details">
                                <label className="login-header">
                                    Welcome back!
                                </label>
                                <div className="login-email">
                                    <label className="email-label">Email</label>
                                    <div className="email-input">
                                        <input className="email-input-view"/>
                                    </div>
                                </div>
                                <div className="login-password">
                                    <label className="password-label">Password</label>
                                    <div className="password-input">
                                        <input
                                        type={this.state.isShowPassword ? 'text' : 'password'}
                                        className="password-input-view"
                                        />
                                        <img 
                                        className="password-eye-view"
                                        src={EyeIcon} alt=""
                                        onClick={this.handleEyeIcon}
                                        />
                                    </div>
                                </div>
                                <div className="login-remember">
                                    <div className="remember-chkbox">
                                        <input className="remember-chkbox-view" type="checkbox"/>
                                    </div>
                                    <label className="remember-label">Remember me</label>
                                </div>
                                <div className="login-button">
                                    <button className="login-button-view">Login</button>
                                </div>
                                <div className="login-conditions">
                                    <label className="site-label">The site is protected by</label>
                                    <label className="privacy-label">Privacy Policy</label>
                                    <label className="and-label">and</label>
                                    <label className="terms-label">Terms of Service apply.</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-forgot">
                            <label className="forgot-label">Forgot your password?</label>
                        </div>
                        <div className="form-google-button">
                            <button className="google-button-view">
                                <img className="google-image" src={GoogleIcon} alt=""/>
                                Login With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;