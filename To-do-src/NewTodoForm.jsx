import { useState, useRef, useEffect } from "react"

export default function NewTodoForm({ addTodo })
{
    const [newItem, setNewItem] = useState(" ")
//    const [newRow, setNewRow] = useState(1)
//    const [newColumn, setNewColumn] = useState(1)

//   const inputRef = useRef(null)

//    useEffect(() => {
    
//     if(inputRef.current.scrollHeight > inputRef.current.clientHeight)
//     {
//       inputRef.current.scrollTop = inputRef.current.scrollHeight - inputRef.current.clientHeight;
//    }

//  }, [newItem])


    function handleSubmit(e)
  {
    e.preventDefault();

    if(newItem.trim() === "") 
      return;

    addTodo(newItem.trim());

    setNewItem(" ");
  }

/*  function handleKeyDown(e)
  {
    if(e.key === "Enter")
    {
      handleSubmit(e);
    }

  } */

/*  function handleInputChange()
  { 
     e.target.style.height = 'auto';
     e.target.style.height = e.target.scrollHeight + 'px';
     setNewRow((newRow) => newRow + 1);
     setNewColumn ((newColumn) => newColumn + 1);
  }
*/
    return (
        <form onSubmit= {handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <textarea value={newItem} 
          onChange={e => setNewItem(e.target.value)} 
          type="text" 
          id="item" 
          style={{ resize: 'none', overflowY : 'hidden' }}
          rows={5} columns={5}
//        onKeyDown={handleKeyDown}
//        onInput={() => {handleInputChange}}
//        ref={inputRef}
>
         </textarea>
        </div>
        <button 
        className="btn">Add</button>
      </form>
    );
    
}