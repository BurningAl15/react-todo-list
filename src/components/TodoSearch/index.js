import { React, useState } from 'react';
import "./TodoSearch.css";


const TodoSearch = ({ todos, searchValue, setSearchValue }) => {
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return <section className="search-section">
        <input placeholder={!todos ? todos[0].content : 'Temp'} value={searchValue} onChange={onSearchValueChange} />
    </section>
}

export default TodoSearch;