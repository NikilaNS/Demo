//Demo
import React, { Component } from 'react';

import '../styles/employees.css';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        // fetch("https://dummy.restapiexample.com/api/v1/employees")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => 
            this.setState({
                employees: data,
                isLoaded: true,
            })
        );
    }

    render() {    
        return (
            <div className="employees-wrapper">
                {this.state.isLoaded === true ?
                    <div className="employees-container">
                        <div className="employees-list-header">
                            <label className="employees-list-label">Employees List</label>
                        </div>
                        <div className="employees-table">
                            <div className="employees-table-container">
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                    <th>Edit</th>
                                </thead>
                                <tbody>
                                    {this.state.employees.map((employee) => (
                                        <tr>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.username}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.website}</td>
                                            <td>
                                                <div className="buttons">
                                                    <button className="delete-btn">Delete</button>
                                                    <button className="update-btn">Update</button>
                                                </div>
                                            </td>
                                            <td>
                                               
                                            </td>
                                        </tr>
                                        ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                : null }
            </div>
        )
    }
}

export default Employees;