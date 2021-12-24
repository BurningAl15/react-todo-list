import { React } from 'react';
import "./TodoSearch.css";
import { TodoContext } from '../TodoContext';


const TodoSearch = () => {
    return <section className="search-section">
        <TodoContext.Consumer>
            {
                ({ todos, searchValue, setSearchValue }) => {
                    const onSearchValueChange = (e) => {
                        setSearchValue(e.target.value);
                    }
                    return (
                        <input placeholder={!todos ? todos[0].content : 'Temp'} value={searchValue} onChange={onSearchValueChange} />
                    )
                }
            }
        </TodoContext.Consumer>
    </section>
}

export default TodoSearch;