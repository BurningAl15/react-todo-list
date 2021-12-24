import './App.css';
import Todo from './TodoUI';
import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 1000);
  });


  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      console.table(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (err) {
      setError(err);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App() {
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
    <div className="App">
      <header className="App-header">
        <Todo
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          searchedTodos={searchedTodos()}
          todos={todos}
          saveTodos={saveTodos}
          id={id}
          loading={loading}
          error={error}
          setId={setId}
        />
      </header>
    </div>
  );
}

export default App;
