import { useContext, useState , useEffect} from "react"
import { ShopContext } from "./App";
import EmptyCart from "./EmptyCart";
import { Link, Outlet, Route, Router } from "react-router-dom";
import './Cart.css';
import CheckoutPage from "./CheckoutPage";

export default function Cart() {
  const { cartItems, setCartItems, totalAmount, setTotalAmount,  } = useContext(ShopContext);
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);


//  const [isDeleted, setIsDeleted] = useState(false);
  console.log('totalAmount', totalAmount);
  console.log('cartItems', cartItems);

  function handleIncrement(id) {
   
  //  console.log('incrementedProduct', incrementedProduct);

      const incrementedProduct = cartItems.find((cartItem) => cartItem.id === id)
      if (incrementedProduct?.quantity) 
      {
        setCartItems((prevCartItems) => {
          const updatedProducts = prevCartItems.map((prevCartItem) =>
            prevCartItem.id === id ? { ...prevCartItem, quantity: prevCartItem.quantity + 1 } : prevCartItem)
          return updatedProducts;
        });
        setTotalAmount((prevTotalAmount) => prevTotalAmount + (incrementedProduct.price));
      }
      else 
      {
        setCartItems((prevCartItems) => {
          const updatedProducts = prevCartItems.map((prevCartItem) => prevCartItem.id === id ? { ...prevCartItem, quantity: 1 } : prevCartItem)
          return updatedProducts;
        });
        setTotalAmount((prevTotalAmount) => prevTotalAmount + (incrementedProduct.price));
      }

  }

  function handleDecrement(id) {
    setCartItems((prevCartItems) => {
      const updatedProducts = prevCartItems.map((prevCartItem) =>
        prevCartItem.id === id ? { ...prevCartItem, quantity: prevCartItem.quantity - 1 } : prevCartItem)
      return updatedProducts;     
    });

    setTotalAmount((prevTotalAmount) => {
      const decrementedProduct = cartItems.find((cartItem)=> cartItem.id === id);
      const updatedAmount = prevTotalAmount - (decrementedProduct.price)
      console.log('updatedAmount', updatedAmount);
      console.log('prevTotalAmount', prevTotalAmount);
      console.log('prevTotalAmount -  (decrementedProduct.price)', prevTotalAmount -  (decrementedProduct.price));
      return updatedAmount;
      
    });    
  }

  function handleRemoveItem(id)
  {
    setCartItems((prevCartItems) => 
    prevCartItems.map((prevCartItem) => prevCartItem.id === id ? {...prevCartItem, quantity : 0 } : prevCartItem));

    setCartItems((prevCartItems) => {
    const updatedProducts =  prevCartItems.filter((prevCartItem)=> prevCartItem.quantity !== 0)
    console.log('updatedProducts :',updatedProducts);
    return updatedProducts;
    });

    setTotalAmount((prevTotalAmount) => {
      const deletedProduct = cartItems.find((cartItem)=> cartItem.id === id);
      const updatedAmount = prevTotalAmount - (deletedProduct.quantity) * (deletedProduct.price)
      console.log('updatedAmount', updatedAmount);
      console.log('prevTotalAmount', prevTotalAmount);
      console.log('prevTotalAmount -  (decrementedProduct.price)', prevTotalAmount -  (deletedProduct.price));
      return updatedAmount
    });
  }

  function handleCheckout()
  {
    alert('Thank You for Shopping!!!!');
    setIsCheckoutClicked(!isCheckoutClicked);
  }

  if (isCheckoutClicked) {
    return (
      <>
        {/*<Link to="/home" ></Link>*/}
        <CheckoutPage />
      </>
    )
  }

  return (
    <>
      {cartItems.map((cartItem) => {
        console.log('totalAmount', totalAmount);
      //  console.log('cartItem',cartItem);
        return (
          <div className="cart" key={cartItem.id}>
            <div className="item-container">
              <img
                className="cart-item-img"
                src={cartItem.images[0]}
                alt={cartItem.title}
                width={100}
                height={100}
              />
              <div className="price-title">
                <div className="cart-item-title">{cartItem.title}</div>
                <div className="cart-item-price">$ {cartItem.price}</div>
              </div>

              <div className="plus-minus-btn">
                <button
                  className="plus-btn"
                  onClick={() => (handleIncrement(cartItem.id))}>+</button>
                <span>{cartItem?.quantity}</span>
                {((cartItem?.quantity) === 1) ?
                  (<button
                    className="minus-btn"
                    disabled
                    onClick={() => handleDecrement(cartItem.id)}
                  >-</button>) : (
                    <button
                      className="minus-btn"
                      onClick={() => handleDecrement(cartItem.id)}
                      style={{ marginLeft: 10 }}
                    > -</button>
                  )}
              </div>

                <button 
                className="delete-btn"
                onClick={() => handleRemoveItem(cartItem.id)}
                ><i className="material-icons">&#xe872;</i>
                </button>
            </div>
          </div>
        )
      })}
      {(totalAmount > 0) &&
          <>
            <hr />
            <div className="total-container">
              <div className="total">
                Total
              </div>
              <div className="amount">
                $ {totalAmount}
              </div>
            </div>

            {/* <Link to="/cart/checkout"> */}
              <button 
              className="checkout-btn"
              onClick={handleCheckout}>Checkout</button>
            {/* </Link> */}
            {/* {isCheckoutClicked && <Outlet></Outlet>} */}
          </>       
      }

      {(totalAmount === null || totalAmount === 0) && <div className="empty-cart"><EmptyCart /></div>}
      
    </>
  )
}