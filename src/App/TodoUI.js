import { React } from 'react';
import CreateTodoButton from '../components/CreateTodoButton';
import TodoCounter from '../components/TodoCounter';
import TodoList from '../components/TodoList';
import TodoSearch from '../components/TodoSearch';


const Todo = (
    {
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        completeTodo,
        deleteTodo,
        searchedTodos,
        todos,
        setTodos,
        saveTodos,
        loading,
        error,
        id,
        setId }
) => {

    return <>
        <h1>TODO</h1>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch todos={todos} searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList error={error} loading={loading} todos={searchedTodos} completedTodo={completeTodo} deleteTodo={deleteTodo} />
        <CreateTodoButton todos={todos} saveTodos={saveTodos} setTodos={setTodos} id={id} setId={setId} searchValue={searchValue} setSearchValue={setSearchValue} />
    </>
}

export default Todo;