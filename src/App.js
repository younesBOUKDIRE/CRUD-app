import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUsers } from './actions';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import UserList from './UserList';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/users').then((response) => {
            dispatch(setUsers(response.data));
        });
    }, [dispatch]);

    return (
        <div>
            <h1>CRUD App with JSON File</h1>
            <AddUser />
            <UpdateUser />
            <UserList />
        </div>
    );
};

export default App;

