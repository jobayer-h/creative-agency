import React from 'react';

const AdminTable = ({data}) => {
    return (
        <tr>
            <th>{data.username}</th>
            <td>{data.email}</td>
            <td>{data.catagory}</td>
            <td>{data.details}</td>
            <td>Pending</td>
        </tr>
    );
};

export default AdminTable;