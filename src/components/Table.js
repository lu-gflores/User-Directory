import React from 'react'
import TableBody from './TableBody'
import employees from '../employees.json'

function Table() {
    return (
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
               <TableBody/>
            </table>
    )

}
export default Table;