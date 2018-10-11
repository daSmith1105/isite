import React from 'react';

const Login = props => {


    return (
        <div>
            <form onSubmit={ props.handleSubmit }> 
                <h1>Please enter your company name below</h1>
                <br />
                {props.error === true ? <p className="error">Site not found!</p> : <p></p> }
                <br />
                <input onChange={ props.handleChange } 
                       value={ props.site.value } 
                       name="site" 
                       required />
                <span>. dividia.net</span>
                <br />
                <br />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login;
