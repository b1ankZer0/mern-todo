import { useState } from 'react';

const EditTodo = ( props ) => {
    const [input, setInput]=useState('')
    const id = props?.id
    const task = props?.task
    const edit =(e)=>{
        e.preventDefault()
        if (input) {
            props.editTodoComplite(id, input);
        }else{
            alert('need to change')
        }
        setInput('')
    }
    return (
        <div>
            <form onSubmit={(e)=>edit(e)}>
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder={task}  />
                <button type='submit' >Edit</button>
            </form>
        </div>
    )
}

export default EditTodo
