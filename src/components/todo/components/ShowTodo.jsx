import EditTodo from './EditTodo';

const ShowTodo = (props) => {

    const editComplite =(index, input)=>{ 
        props?.editTodoComplite(index, input) 
    }

    const deleteTodo = (index)=>{
        props?.delfn(index)
    }

    const del = (index) =>{
        props?.taggolComplite(index)
    }

    const editOn = (index) =>{
        props?.editTodo(index)
    }

    const data = props?.data.map((todo, index) => {
        const data = `${todo.task}`
        const date = `${todo.date}`
        const isdane = todo.isDane
        const isEdit = todo.isEdit

        if (!isEdit) {
            return (
                <div key={index} >
                    <h2 onClick={()=>del(index)}>{isdane? <del>{data}</del>:data}</h2>
                    <div>
                        <p>{date}</p>
                    </div>
                    <div>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                        <button onClick={() => editOn(index)}>Edit</button>
                    </div>
                    <hr />
                </div>
            )
        } else {
            return (
            <div key={index} >
                <br />
                <EditTodo key={index} index={index} editTodoComplite={editComplite}/>
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
