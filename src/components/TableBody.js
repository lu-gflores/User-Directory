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

    sortEmail = () => {
        employees.sort((a, b) => {
            if(a.email < b.email){
                return -1;
            } else {
                return 1;
            }
        })
        this.setState([...employees]);
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
                    <th scope="col" onClick= {() => this.sortEmail("email")} title="Click to sort Email"><strong>Email</strong></th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
            {this.state.currentList.map((employee) => (
                <Table key={employee.login.uuid} image={employee.picture.thumbnail} name={employee.name} phone={employee.phone} email={employee.email} location={employee.location.city} />
            ))}


            </tbody>
        </table>
        </>
    );
}
}
export default TableBody;