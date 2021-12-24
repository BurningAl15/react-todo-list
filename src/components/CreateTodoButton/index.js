import { React } from 'react';
import "./CreateTodoButton.css";

const CreateTodoButton = ({ todos, saveTodos, id, setId, searchValue, setSearchValue }) => {
    const onUpdateElements = () => {
        const arr = [...todos, { id: id, content: `${searchValue}`, completed: false }];
        setId(id + 1);
        setSearchValue('');
        return arr;
    }

    return <>
        <button className="create-button" onClick={() => saveTodos(onUpdateElements())}>+</button>
    </>
}

export default CreateTodoButton;