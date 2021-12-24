import { React } from 'react';
import "./CreateTodoButton.css";
import { TodoContext } from '../TodoContext';


const CreateTodoButton = () => {
    return <>
        <TodoContext.Consumer>
            {
                ({ todos, saveTodos, id, setId, searchValue, setSearchValue }) => {
                    const onUpdateElements = () => {
                        const arr = [...todos, { id: id, content: `${searchValue}`, completed: false }];
                        setId(id + 1);
                        setSearchValue('');
                        return arr;
                    }
                    return (<button className="create-button" onClick={() => saveTodos(onUpdateElements())}>+</button>)
                }
            }
        </TodoContext.Consumer>

    </>
}

export default CreateTodoButton;