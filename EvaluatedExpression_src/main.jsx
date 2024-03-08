import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

function MyApp()
{
  return(
    <h1>Custom App!</h1>
  );
  
}

// this we cannot render directly like anotherElement bec we do not know React's rendering function code and what type of parameters it expects
//const reactElememt = {
//  type : 'a',
//  props : {
//      href: 'https://google.com',
//      target:'_blank'
//  },
//  children : 'Click me to visit google'
//}


const anotherUser = "Sharwari"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',  target:'_blank'},
  'click me to visit google -> ', 
  anotherUser


)

//this is written in JSX so the bundler will convert it into the type of object that internally React has defined(it will be converted into an object tree)
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(

  //    MyApp() -> this wont work with React Strict Mode

   
    reactElement
   
)
