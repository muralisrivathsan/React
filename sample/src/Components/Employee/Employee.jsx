import React, { Component } from 'react'
import './Employee.css';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import EmployeeList from './EmployeeList/EmployeeList';

export default class Employee extends Component {
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
                <center className="f-2">Employee Portal</center>
                <EmployeeDetails/>
                <EmployeeList/>
            </div>
        )
    }
}
