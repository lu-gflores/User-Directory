import React from 'react'
const Table = (props) => {
    return (
        <tr>
            <td><img src={props.picture} alt={props.name.first}/></td>
            <td>{props.name.first} {props.name.last}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.location}</td>
        </tr>
    )
}
export default Table;