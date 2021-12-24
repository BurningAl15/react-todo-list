import { React, useContext } from 'react';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoCounter from '../components/TodoCounter';
import TodoList from '../components/TodoList';
import TodoSearch from '../components/TodoSearch';
import Modal from '../components/Modal';
import { TodoContext } from '../components/TodoContext';
import TodoForm from '../components/TodoForm';
// import { TiDeleteOutline } from "react-icons/ti";

const Todo = () => {
    const { searchedTodos, openModal, setOpenModal } = useContext(TodoContext);
    return <>
        <h1>TODO</h1>
        <TodoCounter />
        <TodoSearch />
        <TodoList />

        {
            openModal && <Modal>
                <TodoForm />
            </Modal>
        }

        <CreateTodoButton />
    </>
}

export default Todo;