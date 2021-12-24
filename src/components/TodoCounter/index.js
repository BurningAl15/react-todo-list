import { React } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {
    return <>
        <TodoContext.Consumer>
            {
                ({ completedTodos, totalTodos }) => {
                    return (
                        <h3 className="todo-counter">You've completed {completedTodos} of {totalTodos} TODOs</h3>
                    )
                }
            }
        </TodoContext.Consumer>
    </>
}

export default TodoCounter;