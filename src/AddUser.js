import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addUser } from './actions';

const AddUser = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        const newUser = { id: Date.now(), name };

        axios.post('http://localhost:3001/users', newUser).then((response) => {
            dispatch(addUser(response.data));
        });

        setName('');
    };

    return (
        <div className="add-user-container">
            <h2>Add User</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddUser;
