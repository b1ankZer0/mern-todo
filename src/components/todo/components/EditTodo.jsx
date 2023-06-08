import { useState } from 'react';

const EditTodo = ( props ) => {
    const [input, setInput]=useState('')
    const index = props?.index
    const edit =(e)=>{
        e.preventDefault()
        props.editTodoComplite(index, input);
        setInput('')
    }
    return (
        <div>
            <form onSubmit={(e)=>edit(e)}>
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}  />
                <button type='submit' >Edit</button>
            </form>
        </div>
    )
}

export default EditTodo
