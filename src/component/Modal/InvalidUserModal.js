import Button from "../UI/Button";
import './InvalidUserModal.css';
import Card from "../UI/Card";

const InvalidUserModal = () => {
    return (
        <div>
        <div className="invaliduser-modal" />
        <Card className='modal'>
            <h2>Invalid Input</h2>
            <p>Please enter a valid age</p>
            <footer className="">
            <Button>Okay</Button>
            </footer>
        </Card>
        </div>
    )
};

export default InvalidUserModal;