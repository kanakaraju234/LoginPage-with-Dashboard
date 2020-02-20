import React, { Component } from 'react';
import Employe from './Employe';

 class EmployeList extends Component {
    render() {
        const user = this.props.user;
        console.log(user)
        return (
            <div className="container">
                <h2>Employee's Details</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Mail</th>
                        <th>Phone No</th>
                    </tr>
                    </thead>
                    <tbody>
                        {user.map(employe =>(
                             <Employe key={employe.id}
                             gender ={employe.gender}
                              name={employe.name}
                              age={employe.age}
                              mail={employe.email}
                              phoneNo ={employe.phoneNo}
                              />
                        ))
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default EmployeList
