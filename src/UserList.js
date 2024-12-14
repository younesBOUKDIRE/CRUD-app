import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { deleteUser } from './actions';

const UserList = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`).then(() => {
            dispatch(deleteUser(id));
        });
    };

    return (
        <div>
            <h2>User List</h2>
            {users.length > 0 ? (
                users.map((user) => (
                    <div key={user.id}>
                        <span>{user.name}</span>
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default UserList;
