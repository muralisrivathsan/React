import React, { Component } from 'react'
import './Login.css';
import { withRouter } from 'react-router';

const validEmailRegex = RegExp(
    // eslint-disable-next-line
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {
                email: 'Email is not valid!',
                password: 'Password is required!',
            },
            submitted: false
        };
    }

    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        
        switch (name) {
            case 'email': 
                errors.email = 
                validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;
            case 'password': 
                errors.password = 
                value.length < 0
                    ? 'Password is required!'
                    : '';
                break;
            default:
                break;
        }

        this.setState({errors, [name]: value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({submitted : true});
        if(validateForm(this.state.errors)) {
            this.props.history.push('/employee');
        }else{
          console.error('Invalid Form')
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="wrapper">
                <form className="form-wrapper" onSubmit={this.handleSubmit} noValidate>
                    <div className="p-1 f-2">
                        Login 
                    </div>
                    <div className='p-1'>
                        <input type="email" name='email' onChange={this.handleChange}
                            aria-label="User Name" id="username"/>
                        {this.state.submitted && errors.email.length > 0 && 
                            <span className='error'>{errors.email}</span>}
                    </div>
                    <div className='p-1'>
                        <input type="password" name='password' onChange={this.handleChange}
                            aria-label="Password" id="password"/>
                        {this.state.submitted && errors.password.length > 0 && 
                            <span className='error'>{errors.password}</span>}
                    </div>
                    <div className='submit p-1'>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);