import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { updateUser } from './actions';

const UpdateUser = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleUpdate = () => {
        const updatedUser = { id: parseInt(id, 10), name };
        axios.put(`http://localhost:3001/users/${id}`, updatedUser).then((response) => {
            dispatch(updateUser(response.data));
        });

        setId('');
        setName('');
    };

    return (
        <div>
            <h2>Update User</h2>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter user ID"
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter new name"
            />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateUser;
