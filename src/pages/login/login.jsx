import React, { Component } from 'react'

import './login.less'
import logo from '../../assets/images/logo.png'
class Login extends Component {
    state = {  }
    render() { 
        return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="logo"/>
                <h1>React项目：后台管理系统</h1>
            </header>
            <section className='login-content'> 
                <h2>用户登录</h2>
                <div>From</div>
            </section>
        </div>
        );
    }
}
 
export default Login;