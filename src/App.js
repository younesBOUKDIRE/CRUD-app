import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUsers } from './actions';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import UserList from './UserList';
import './App.css'

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3001/users').then((response) => {
            dispatch(setUsers(response.data));
        });
    }, [dispatch]);

    return (
        <div>
            <h1 className='h1'>CRUD App with JSON File</h1>
            <UserList />
            <div className='cont'>
                <AddUser />
                <UpdateUser />
            </div>
        </div>
    );
};

export default App;

