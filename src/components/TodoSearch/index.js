import { React, useContext } from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';


const TodoSearch = () => {
    const { todos, searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return <section className="search-section">
        <input placeholder={!todos ? todos[0].content : 'Temp'} value={searchValue} onChange={onSearchValueChange} />
    </section>
}

export default TodoSearch;