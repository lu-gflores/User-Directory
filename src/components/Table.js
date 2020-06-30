import React from 'react'
import TableBody from './TableBody'
function Table() {
    return (
        
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
               <TableBody/>
            </table>
    )

}
export default Table;