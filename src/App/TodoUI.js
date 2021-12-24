import { React } from 'react';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoCounter from '../components/TodoCounter';
import TodoList from '../components/TodoList';
import TodoSearch from '../components/TodoSearch';

const Todo = () => {

    return <>
        <h1>TODO</h1>
        <TodoCounter />

        <TodoSearch />

        <TodoList />

        <CreateTodoButton />
    </>
}

export default Todo;