import TodoItem from "./TodoItem"

export default function TodoList({todos, toggleCheckbox, handleDelete})
{
    return (
        <ul className="list">
        {todos.length === 0 && "No Todos Yet"}
        {todos.map(todo => {
          return (<TodoItem {...todo} key={todo.id} toggleCheckbox={toggleCheckbox} handleDelete={handleDelete}/>)
        })}
    
      </ul>
    ) 
    
}