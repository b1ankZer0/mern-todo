import { useState } from 'react';

import {
  addTodo,
  deleteTodo as deleteT,
  editTodoC,
  editTodoT,
  gatAllTodo,
  toggleC,
} from '../api/CrudApi';
import ShowTodo from './components/ShowTodo';
import TodoForm from './components/TodoForm';

const Todo = () => {
    const [todos, setTodos] = useState([])
    const run =(todo)=>addTodo(todo) 

    gatAllTodo()
    .then((data) => {
        setTodos(data)
    })

    const deleteTodo = (id)=>{
        deleteT(id).then((data)=>setTodos(data))
    }

    const toggleComplite = (id, isdane) =>{
        toggleC(id,isdane)
    }

    const editTodo = (id) =>{
        editTodoT(id).then((data)=>setTodos(data))
    }

    const editTodoComplite = (id, input) => {
        editTodoC(id, input).then((data)=> setTodos(data))
    }

    return (
        <div>
            <TodoForm addTodo={run} />

            <ShowTodo data={todos} delfn={deleteTodo}  toggleComplite={toggleComplite} editTodo={editTodo} editTodoComplite={editTodoComplite} />

            {/* {todos.map((todo, index) => {
                <ShowTodo {...todo} key={index} />
                console.log(todo)
            })} */}
        </div>
    )
}

export default Todo
