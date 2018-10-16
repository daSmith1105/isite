import React from 'react';
import '../App.css';
import Logo from './main-logo.jpg';

const Login = props => {


    return (
        <div className="dash-container">
            <p className="dividia">DIVIDIA TECHNOLOGIES</p>
            <img className="main-logo" src={Logo} alt="logo" />
            <form onSubmit={ props.handleSubmit }> 
                <h1>Please enter your company name below</h1>
                <br />
                {props.error === true ? <p className="error">Sorry!Site not found!</p> : <p></p> }
                <br />
                <input onChange={ props.handleChange } 
                       value={ props.site.value } 
                       className="site-input"
                       required />
                <span>.dividia.net</span>
                <br />
                <br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login;
