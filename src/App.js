import { useState } from 'react'
import ToDo from './To-do'
import ToDoForm from './To-doForm'

function App() {
  const [todos, setTodos] = useState([])

  const newTaskAdd = (userInput) => {
    if (userInput){
      const taskNew = {
        id: Math.random().toString(26).substring(2,9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, taskNew])
    }

  }

  const deleteCurrentTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])

  }

  const changeCompliteStatus  = (id) => {
    setTodos([...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])

  }
  return (
    <div className="App">
      <header>
        <h1>To-do list: {todos.length}</h1>
      </header>
      <ToDoForm addTask={newTaskAdd} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            changeCompliteStatus={changeCompliteStatus}
            deleteCurrentTask={deleteCurrentTask} 
            />
        )
      })}
    </div>
  );
}

export default App;
