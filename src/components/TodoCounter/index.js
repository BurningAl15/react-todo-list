import { React } from 'react';
import './TodoCounter.css';

const TodoCounter = ({ completedTodos, totalTodos }) => {
    return <>
        <h3 className="todo-counter">You've completed {completedTodos} of {totalTodos} TODOs</h3>
    </>
}

export default TodoCounter;