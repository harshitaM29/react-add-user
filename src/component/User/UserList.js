import UserItem from "./UserItem";
import './UserList.css';
import Card from "../UI/Card";
const UserList = props => {
    let data = props.users;
    console.log(data);
    return ( 
        <Card className='users'>
        <ul className="users-list"> 
        {data.map((key) => (
            <UserItem key ={key.id} name={key.name} 
            age={key.age} 
            />

        ))
        }
        </ul>
        </Card>
       )
}

export default UserList;