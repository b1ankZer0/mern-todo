import axios from 'axios';

export function addTodo(Todo) {
  axios.post('http://localhost:3000/todo/', {
      task: Todo,
      date: new Date(),
      isDane: false, 
      isEdit: false
    })
    // .then(function (response) {
    //   console.log(response);
    // })
    .catch(function (error) {
      console.log(error);
    });
}

export async function gatAllTodo() {
  try {
    const response = await axios.get('http://localhost:3000/todo/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function editTodoC(id, Todo) {
  try {
    const response = await  axios.patch('http://localhost:3000/todo/' + id, { 
      task: Todo,
      isEdit: false,
    });
    if (response.data) {
      const res = await axios.get('http://localhost:3000/todo/');
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function editTodoT(id) {
  try {
    const response = await  axios.patch('http://localhost:3000/todo/' + id, { 
      isEdit: true,
    });
    if (response.data) {
      const res = await axios.get('http://localhost:3000/todo/');
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function toggleC(id, isdane) {
  try {
    const response = await  axios.patch('http://localhost:3000/todo/' + id, { 
      isDane: isdane,
    });
    if (response.data) {
      const res = await axios.get('http://localhost:3000/todo/');
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await  axios.delete('http://localhost:3000/todo/' + id);
    if (response.data) {
      const res = await axios.get('http://localhost:3000/todo/');
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}


