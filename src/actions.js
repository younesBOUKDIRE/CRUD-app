export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    };
};

export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    };
};

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    };
};

export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    };
};
