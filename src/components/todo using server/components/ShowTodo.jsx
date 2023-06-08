import EditTodo from './EditTodo';

const ShowTodo = (props) => {

    const editComplite =(index, input)=>{ 
        props?.editTodoComplite(index, input) 
    }

    const deleteTodo = (index)=>{
        props?.delfn(index)
    }

    const del = (id, isdane) =>{
        props?.toggleComplite(id, isdane)
    }

    const editOn = (index) =>{
        props?.editTodo(index)
    }

    const data = props?.data.map((todo, index) => {
        const id = todo._id
        const data = `${todo.task}`
        const date = `${todo.date}`
        const isdane = todo.isDane
        const isEdit = todo.isEdit

        if (!isEdit) {
            return (
                <div key={index} >
                    <h2 onClick={()=>del(id, !isdane)}>{isdane? <del>{data}</del>:data}</h2>
                    <div>
                        <p>{date}</p>
                    </div>
                    <div>
                        <button onClick={() => deleteTodo(id)}>Delete</button>
                        <button onClick={() => editOn(id)}>Edit</button>
                    </div>
                    <hr />
                </div>
            )
        } else {
            return (
            <div key={index} >
                <br />
                <EditTodo key={index} id={id} task={data} editTodoComplite={editComplite}/>
                <br />
                <br />
                <hr />
            </div>
            )
        }   

    })

    return (
        <div>
            <h1>show todo</h1>
            <hr />
            {data}
        </div>
    )
}

export default ShowTodo
