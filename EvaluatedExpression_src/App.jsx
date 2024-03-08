
import './App.css'

function App() {
  const username = "chai aur code"

  //the username used in curly bracket is called as evaluated expressions
  return (
    <>
      <h1>Chai aur code {username}</h1> 
    </>
  )
}

export default App


//in jsx we can only inject evaluated expressions and not the entire expressions because internally React will store it in the form of an object in the DOM tree and objects do not have expressions, only have key-value pairs
