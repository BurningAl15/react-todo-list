import { React, useContext } from 'react';
import "./CreateTodoButton.css";
import { TodoContext } from '../TodoContext';


const CreateTodoButton = () => {
    const { todos, saveTodos, searchValue, setSearchValue } = useContext(TodoContext);
    const onUpdateElements = () => {
        const arr = [...todos, { id: todos.length + 1, content: `${searchValue}`, completed: false }];
        // setId(arr.length);
        setSearchValue('');
        return arr;
    }
    return <>
        <button className="create-button" onClick={() => saveTodos(onUpdateElements())}>+</button>
    </>
}

export default CreateTodoButton;