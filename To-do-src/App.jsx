import "./styles.css"
import {useState} from "react"
import NewTodoForm from "./NewTodoForm.jsx"
import TodoList from "./TodoList"
import { useEffect } from "react"


export default function App()
{
  const today = new Date();
  const person = {
    name : 'Sharwari'
  }
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Items")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos))
  }, [todos])

  function formatDate(date){
  //  console.log("inside formatDate");
    return new Intl.DateTimeFormat(
      'en-IN',
      {weekday: 'long'}
    ).format(date);
  }

  function addTodo(title)
  {
  //  console.log("inside onsubmit");
    setTodos(todos => {
      return [
        ...todos,
        {
          id : crypto.randomUUID(), 
          title, 
          completed : false 
        },
      ]
    });
  }


function toggleCheckbox(idToCheck , completed)
{
  setTodos(todos => {

    return todos.map(todo => {
      if(todo.id === idToCheck){
        return {

          ...todo,
          completed 

        };
      }

      return todo;

    })
  })

}

function handleDelete(idToDelete)
{
  setTodos(todos => {

    return todos.filter(todo => todo.id !== idToDelete);

  });
  
}


    return (
    <> 
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">{person.name}'s Todo List for {formatDate(today)}</h1>
      <TodoList todos={todos} toggleCheckbox={toggleCheckbox} handleDelete={handleDelete}/>
      
    </> 
    );
}
