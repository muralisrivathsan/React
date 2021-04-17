import React, { Component } from 'react'
import './EmployeeDetails.css';

export default class EmployeeDetails extends Component {
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

    render() {
        return (
            <div>
                Employee Details
            </div>
        )
    }
}
