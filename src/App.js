import React, {useState} from 'react';

import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUsersHandler = (userName, userAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}];
        });
    }

    return (
        <Wrapper>
            <AddUser onAddUser={addUsersHandler} />
            <UsersList users={usersList} />
        </Wrapper>
    );
}

export default App;
