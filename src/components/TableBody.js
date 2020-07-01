import React, { Component } from 'react'
import employees from '../employees.json'
import Table from './Table'
class TableBody extends Component {
    //state to update table
    state = {
        mainlist: [],
        currentList: []
    };

    componentDidMount() {
        this.setState({
            mainlist: employees,
            currentList: employees
        });
    }

    handleChange = item => {
        const newList = this.state.mainlist.filter(employee => {
        return employee.name.first.toLowerCase().includes(item.toLowerCase()) || employee.name.last.toLowerCase().includes(item.toLowerCase())
        });
        this.setState({currentList: newList})
    }


    render() {
    return (
        <>
        {/* Taking user input to update table, sorts by first name only */}
        <input className="form-control" onChange={e => this.handleChange(e.target.value)} type="text" placeholder="John Smith" />

        <table className="table">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
            {this.state.currentList.map((employee) => (
                <Table key={employee.login.uuid} image={employee.picture.thumbnail} name={employee.name} phone={employee.phone} email={employee.email} location={employee.location.city} />
            ))}


            </tbody>
        </table>



        {/* // <tbody>
        //     {employees.map(employee => {
        //         return (
        //             <tr key= {employee.login.uuid}>
        //                 <td><img src={employee.picture.thumbnail} alt={employee.name.first}/></td>
        //                 <td>{employee.name.first} {employee.name.last}</td>
        //                 <td>{employee.phone}</td>
        //                 <td>{employee.email}</td>
        //                 <td>{employee.location.city}</td>
        //             </tr>
        //         )
        //     })}
        //         </tbody> */}
        </>
    );
}
}
export default TableBody;