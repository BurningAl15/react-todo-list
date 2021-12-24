import { React } from 'react';
import TodoItem from "../TodoItem";
import "./TodoList.css";

const TodoList = ({ loading, error, todos, completedTodo, deleteTodo }) => {
    return <>
        <ul className={todos.length > 5 ? 'overflow' : ''}>
            {loading && <div className='loader-wrapper'><span className="loader"></span></div>}
            {error && <p>An error ocurred, please update the page</p>}
            {(!loading && !todos.length) && <p>Create your first TODO</p>}
            {
                todos.map((element) => {
                    return <TodoItem key={element.id}
                        todo={element}
                        completedTodo={completedTodo}
                        deleteTodo={deleteTodo}
                        class_name={"todo-item " + (element.completed ? "completed-item" : "")} />
                })
            }
        </ul>
    </>
}

export default TodoList;