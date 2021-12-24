import { React, useContext } from 'react';
import TodoItem from "../TodoItem";
import "./TodoList.css";
import { TodoContext } from '../TodoContext';

const TodoList = () => {
    const { todos, loading, error, completeTodo, deleteTodo } = useContext(TodoContext);
    return <>
        <ul className={todos.length > 5 ? 'overflow' : ''}>
            {loading && <div className='loader-wrapper'><span className="loader"></span></div>}
            {error && <p>An error ocurred, please update the page</p>}
            {(!loading && !todos.length) && <p>Create your first TODO</p>}
            {
                todos.map((element) => {
                    return <TodoItem key={element.id}
                        todo={element}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}
                        class_name={"todo-item " + (element.completed ? "completed-item" : "")} />
                })
            }
        </ul>
    </>
}

export default TodoList;