export default function TodoItem({completed, id, title, toggleCheckbox, handleDelete})
{
    return (
        <li>
            <label>
            <input type="checkbox" onChange={(e) => toggleCheckbox(id, e.target.checked)} checked={completed} 
            />
            {title}
            </label>
          
            <button onClick={() => handleDelete(id)} className="btn btn-danger">Delete</button>
          </li>
    )
}