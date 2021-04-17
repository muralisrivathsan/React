import React, { Component } from 'react'
import './EmployeeList.css';

export default class EmployeeList extends Component {
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
                Employee List
            </div>
        )
    }
}
