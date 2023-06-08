import { useState } from 'react';

import ShowTodo from './components/ShowTodo';
import TodoForm from './components/TodoForm';

const Todo = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (Todo) => {
        setTodos(
            [...todos, { task: Todo, date: new Date(), isDane: false, isEdit: false }]
        )
    }

    const deleteTodo = (index)=>{
            const newTodo = [...todos]
            newTodo.splice(index, 1)
            setTodos(newTodo)
    }

    const taggolComplite = (index) =>{
        const newTodo = [...todos]
        newTodo[index].isDane = !newTodo[index].isDane
        setTodos(newTodo)
    }

    const editTodo = (index) =>{
        const newTodo = [...todos]
        newTodo[index].isEdit = true
        setTodos(newTodo)
    }

    const editTodoComplite = (index, input) => {
        const newTodo = [...todos]
        newTodo[index].task = input
        newTodo[index].isEdit = false
        setTodos(newTodo)
    }

    return (
        <div>
            <hr />
            <TodoForm addTodo={addTodo} />

            <ShowTodo data={todos} delfn={deleteTodo}  taggolComplite={taggolComplite} editTodo={editTodo} editTodoComplite={editTodoComplite} />

            {/* {todos.map((todo, index) => {
                <ShowTodo {...todo} key={index} />
                console.log(todo)
            })} */}
        </div>
    )
}

export default Todo
