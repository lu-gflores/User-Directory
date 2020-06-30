import React, {useContext} from 'react'
import employees from '../employees.json'

const TableBody = () => {
    return (
        <tbody>
            {employees.results.map(employee => {
                return (
                    <tr key= {employee.login.uuid}>
                        <td><img src={employee.picture.thumbnail} alt={employee.name.first}/></td>
                        <td>{employee.name.first} {employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td>{employee.location.city}</td>
                    </tr>


                )
            })}
                </tbody>
    )
}
export default TableBody;