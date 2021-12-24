import { React, createContext } from 'react';
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

    const [id, setId] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter((value) => !!value.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = () => {
        if (!searchValue.length >= 1) {
            return todos;
        }
        else {
            return todos.filter(todo => {
                //To avoid problems with lowercase or uppercase, transform everything
                //to lowercase so we can check if is included
                const todoText = todo.content.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
            });
        }
    }

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);

        const newTodos = [...todos];

        newTodos[todoIndex] = {
            ...todos[todoIndex],
            completed: !todos[todoIndex].completed
        }
        // todos[todoIndex].completed=!todos[todoIndex].completed

        saveTodos(newTodos);
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        saveTodos(newTodos);
    }


    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo,
            searchedTodos: searchedTodos(),
            todos,
            saveTodos,
            id,
            loading,
            error,
            setId
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };