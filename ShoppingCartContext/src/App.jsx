import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { createContext } from 'react'
import './App.css'


export const ShopContext = createContext({
    
  products: [],
  cartItems: [],
  totalAmount: 0,
 /* addToCart: () => {}, */
});

function App() {

  const[cartItems, setCartItems] =  useState([]);
  const[products, setProducts] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] =  useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  
 

  useEffect(()=> {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response) =>{ 
      if(response.status >= 400)
      { 
        throw new Error("Error fetching products");
      } 
      return response.json(); 
    })
    .then(json=>{
      setProducts(json);
      console.log(json);
    })
    .catch((error) => {
      setError(error);
    })
    .finally(()=> (setLoading(false)));
  }, [])

  if(error)
  {
    console.log('Error : ', error);
    return (
      <p>A network occured</p>
    )
  }

  if(loading)
  {
    return(
      <div>Let's Shop!</div>
    );
  }

  return (
    <>
      <nav className='header'>
        <Link className="home-link" to="/home"><div className='home-tab'>Home</div></Link>
        <Link className="home-link" to="/favourite"><div className='fav-tab'>&#9825;</div></Link> 
        <Link className="cart-link" to="/cart"><div className='cart-tab'>Cart<span> ({cartItems?.length})</span></div></Link>
      </nav>
    
      <ShopContext.Provider value={{cartItems, setCartItems, products, setProducts, totalAmount, setTotalAmount}}>
        <Outlet></Outlet>
      </ShopContext.Provider>

      
         
    </>
  )
}

export default App;
