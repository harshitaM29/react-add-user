import './UserForm.css';
import InvalidUserModal from '../Modal/InvalidUserModal';
import Button from '../UI/Button';
import { useState } from 'react';

const UserForm = props => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error, setError] = useState(false);
    const updateName = (e) => {
        setEnteredName(e.target.value)
    }

    const updateAge = (e) => {
        setEnteredAge(e.target.value)
    }
    const addUser = (e) =>{
        e.preventDefault();
        const userDetails = {
            id: Math.random().toString(),
            name : enteredName,
            age : enteredAge
        }
        if(+enteredAge.toString() <= 0) {
            setError(true);
          
        }
        props.onAddUser(userDetails);
        setEnteredAge('');
        setEnteredName('');



    }
    return (
        <div>
        {error && <InvalidUserModal /> }
        <div>
            <form onSubmit={addUser}>
                <div className="new-user">
                    <label>Username</label>
                    <input type="text" value={enteredName} onChange={updateName}></input>
                </div>
                <div className="new-user">
                    <label>Age(Years)</label>
                    <input type="number" value={enteredAge} onChange={updateAge}></input>
                </div>
            <Button type="submit">Add User</Button>
            </form>
        </div>
        </div>
    )
 
};

export default UserForm;