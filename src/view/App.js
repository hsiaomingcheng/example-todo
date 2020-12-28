import { useState } from 'react';

function App() {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    function handleUpdateText(e) {
        setTodo(e.target.value);
    }

    function handleAdd() {
        setTodoList([...todoList, todo]);
        setTodo('');
    }

    return (
        <div className="App">
            <div>
                <input type="text" value={todo} onChange={handleUpdateText} />
                <button onClick={handleAdd}>新增</button>
            </div>
            {
                todoList.map(todo => {
                    return <div key={todo}>{todo}</div>
                })
            }
        </div>
    );
}

export default App;
