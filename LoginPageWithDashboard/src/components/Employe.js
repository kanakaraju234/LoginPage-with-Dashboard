import React from 'react'

function Employe(props) {
    
    return (
        
        <tr>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>{props.mail}</td>
            <td>{props.phoneNo}</td>
       </tr>
    )
}

export default Employe
