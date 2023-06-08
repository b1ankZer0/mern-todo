import { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState('')

    const add = (e) => {
        e.preventDefault()
        if (input.length > 0) {
            addTodo(input);
        }
        setInput('')
    }

    return (
        <div>
            <form onSubmit={(e)=>add(e)}>
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}  />
                <button type='submit' >add new</button>
            </form>
        </div>
    )
}

export default TodoForm
