import { React, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoForm.css";

const TodoForm = () => {
    const { todos, saveTodos, formNameValue, setFormNameValue, formDescriptionValue, setFormDescriptionValue, setOpenModal } = useContext(TodoContext);

    const onUpdateElements = () => {
        const arr = [...todos, { id: todos.length + 1, content: `${formNameValue}`, description: `${formDescriptionValue}`, completed: false }];
        setFormNameValue('');
        setFormDescriptionValue('');
        setOpenModal(false);
        return arr;
    }

    const onFormNameValueChange = (e) => {
        setFormNameValue(e.target.value);
    }
    const onFormDescriptionValueChange = (e) => {
        setFormDescriptionValue(e.target.value);
    }
    const onSubmit = (e) => {
        saveTodos(onUpdateElements());
        e.preventDefault();
    }

    return <>
        <form>
            <h2>Add a TODO</h2>
            <div className="form-section">
                <label>Todo Name</label>
                <input placeholder='Give me a name' value={formNameValue} onChange={onFormNameValueChange} />
            </div>
            <div className="form-section">
                <label>Todo Description</label>
                <input placeholder='Give me a description' value={formDescriptionValue} onChange={onFormDescriptionValueChange} />
            </div>
            {/* <button className="form-button" onClick={() => saveTodos(onUpdateElements())}>Create a TODO</button> */}
            <button className="form-button" type="submit" onClick={(e) => onSubmit(e)}>Create a TODO</button>
        </form>
    </>
}

export default TodoForm;