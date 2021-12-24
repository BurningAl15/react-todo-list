import './App.css';
import Todo from './TodoUI';
import { TodoProvider } from '../components/TodoContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </header>
    </div>
  );
}

export default App;
