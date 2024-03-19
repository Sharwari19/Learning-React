export default function TodoItem({completed, id, title, toggleCheckbox, handleDelete})
{
    const renderTitle = () => {
        return (
            completed ? <del>{title}</del> : title 
        )
    }


    return (
        <li>
            <label>
            <input type="checkbox" onChange={(e) => toggleCheckbox(id, e.target.checked)} checked={completed} />
            <span style={{whiteSpace : 'pre-wrap'}}>
            {renderTitle()}
            </span>
            
           </label>
          
            <button onClick={() => handleDelete(id)} className="btn btn-danger">Delete</button>
          </li>
    )
}