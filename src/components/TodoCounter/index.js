import { React, useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {
    const { completedTodos, totalTodos } = useContext(TodoContext);
    return <>
        <h3 className="todo-counter">You've completed {completedTodos} of {totalTodos} TODOs</h3>
    </>
}

export default TodoCounter;