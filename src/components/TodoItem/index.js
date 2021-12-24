import React from 'react';
import './TodoItem.css';
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const TodoItem = ({ todo, class_name, completedTodo, deleteTodo }) => {

    const onCompleted = () => {
        completedTodo(todo.id);
    }

    const onDelete = () => {
        alert(`Element ${todo.content} Deleted`);
        deleteTodo(todo.id);
    }

    return (
        <li key={todo.id} className={class_name}>
            {
                todo.completed ?
                    <FaRegCheckCircle className={todo.completed ? 'completed' : 'notCompleted'} onClick={onCompleted} />
                    : <FaRegCircle className={todo.completed ? 'completed' : 'notCompleted'} onClick={onCompleted} />
            }
            <p>{todo.content}</p>
            <TiDeleteOutline className="close" onClick={onDelete} />
        </li>
    )
}

export default TodoItem;