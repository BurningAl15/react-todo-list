import { React, useContext } from 'react';
import "./CreateTodoButton.css";
import { TodoContext } from '../TodoContext';


const CreateTodoButton = () => {
    const { openModal, setOpenModal } = useContext(TodoContext);

    return <>
        <button className="modal-button" onClick={() => setOpenModal(!openModal)}>+</button>
    </>
}

export default CreateTodoButton;