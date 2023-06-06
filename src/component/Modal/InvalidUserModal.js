import Button from "../UI/Button";
import './InvalidUserModal.css';
import Card from "../UI/Card";

const InvalidUserModal = props => {
    return (
        <div>
        <div className="backdrop" onClick={props.onConfirm}/>
        <Card className='modal'>
            <header className="header">
                <h2>Invalid Input</h2>
            </header>
            <div className="content">
            <p>Please enter a valid age</p>
            </div>
            <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
        </div>
     
    )
};

export default InvalidUserModal;