import React, { useState } from 'react';

import UserForm from './component/User/UserForm';
import './App.css';
import UserList from './component/User/UserList';

const App = () => {


  const users = [
    {
      id:'e1',
      name:'harshita',
      age: '23'
  }
  ];
  const [user,setUser] = useState(users);
  const addUserHandler = user => {
    setUser(preUser => {
      return [user,...preUser]
    })
  }
  return (
    <div>
    <div className='user-form'>
      <UserForm onAddUser={addUserHandler}/>
      </div>
      <UserList users={user} />
    
    </div>
    
  );
};

export default App;
