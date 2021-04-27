import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAction } from '../../hooks/useAction';

const UserList: React.FC = () => {
    const { users, loading, error } = useTypedSelector(state => state.users);
    const {fetchUsers, setTodoPage} = useAction();

    useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    };

    if (error) {
        return <h1>{error}</h1>
    };

    return (
        <ul>
            {users.map(user => {
                return <li> { user.name } </li>
            })}
        </ul>
    );
}

export default UserList;