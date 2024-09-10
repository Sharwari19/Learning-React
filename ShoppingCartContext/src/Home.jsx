import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./App";
import './Home.css';



export default function Home()
{
    const { products, setProducts, cartItems, setCartItems, totalAmount, setTotalAmount} = useContext(ShopContext);
    const [DescriptionId, setDescriptionId] = useState(null);

    console.log('totalAmount : ', totalAmount);
    console.log('products : ', products);
    
    function handleDescription(id)
    {
        setDescriptionId((prevDescriptionId) => prevDescriptionId === id ? null : id );
    }

    function handleAddCart(id)
    {
      alert('Added to Cart!');
      const existingCartItemIndex = cartItems.findIndex((cartItem) => cartItem.id === id);
      if (existingCartItemIndex !== -1) {
        setCartItems((prevCartItems) => {
          const updatedCartItems = [...prevCartItems];
          updatedCartItems[existingCartItemIndex].quantity += 1;
          return updatedCartItems;
        });
        setTotalAmount((prevTotalAmount) => (prevTotalAmount + cartItems[existingCartItemIndex]?.price));
      } else {
        const newCartItem = products.find((product) => product.id === id);
        setCartItems((prevCartItems)=> [...prevCartItems, { ...newCartItem, quantity : 1 }])
        setTotalAmount((prevTotalAmount) => (prevTotalAmount + newCartItem?.price));
      }
    }

  //   function handleFavourite(id)
  //   {
  //    // setFavouriteId((prevFavId) => prevFavId === id ? null : id)
  //     const favouriteProduct = products.find((product) => product.id === id)
  //     if(favouriteProduct?.isFavourite)
  //     {
  //       setProducts((prevProducts) => {
  //         const updatedProduct = prevProducts.map((prevProduct) => prevProduct.id === id ? { ...prevProduct, isFavourite : !prevProduct.isFavourite } : prevProduct)
  //         return updatedProduct;
  //       });
  //     }
  //     else
  //     {
  //       setProducts((prevProducts)=> {
  //         const updatedProduct = prevProducts.map((prevProduct) => prevProduct.id === id ? {...prevProduct, isFavourite : true} : prevProduct)
  //         return updatedProduct;
  //       });
  //     }

  //     const isFavProduct = products.filter((product) => product.isFavProduct === true);
  //     console.log('isFavProduct', isFavProduct);
  //     console.log('products', products);
      
  //     // setFavouriteItems((prevFavourtieItems) => [...prevFavourtieItems, FavProducts]);
  //     // console.log('favoutriteItems', favouriteItems);

  //    // console.log('prevfavoutriteItems', prevFavouriteItems);


  //  //  setFavouriteItems((prevFavItems) => 
  //  //   prevFavItems.map((prevFavItem) => prevFavItem.id === id ? {...prevFavItem, isFavourite : !prevFavItem.isFavourite} : prevFavItem) );
  //  //  console.log(favouriteItems);
     
  //   }

    function handleFavourite(id) {
      alert('Added to Favourites!');
      const existingFavItem = products.find((product) => product.id === id);
      console.log('existingFavItem', existingFavItem);
      if (existingFavItem?.isFavourite) {
        setProducts((prevProducts) => {
          return prevProducts.map((prevPro) =>prevPro?.id === id ? { ...prevPro, isFavourite: !prevPro?.isFavourite } : prevPro)
        });
      } else {
        setProducts((prevProducts) => {
          return prevProducts.map((prevPro) =>prevPro?.id === id ? { ...prevPro, isFavourite: true } : prevPro)
        });
      }
    }

    return (
      <>
        <h1 className="heading">Products</h1>
        <div className="flex-container">
          {products.map((product) => {
            return(
                <div key={product.id} className="card">
                  <div className="image-container">
                    <img 
                      src={product.images[0]}
                      alt={product.title}
                      width={100}
                      height={100}
                    />
                  </div>

                  <p style={{width: 130}} className="name">{product.title}</p>

                  <div className="card_details">
                    <div className="price-fav">
                      <span className="product-price">${product.price}</span>
                      <span className=" material-icons">
                        <button 
                          style={{color : product.isFavourite === true ? "black" : "#eaeff1", }} 
                          onClick={() => (handleFavourite(product.id))} 
                          className="favourite"
                          >&#9825;
                        </button>   
                      </span>
                    </div>
                    
                    <div className="rating-div">
                      {/*<span className="product-ratings">Rating: {product.rating.rate}</span>*/}
                    </div>

                    <div className="buttons">
                      
                        <button 
                        onClick={() => (handleDescription(product.id))}
                        className="description-btn">
                        {(DescriptionId === product.id) ? 'Hide' : 'Show Description'}
                        </button>
                      
                      {(DescriptionId === product.id) && <div>{product.description}</div>}
                      
                        <button
                        className="add-cart-btn"
                        onClick={()=> handleAddCart(product.id)}
                        >Add to Cart
                        </button>
                      
                    </div>

                  </div>
                </div>
            )
        })}
        </div>
        
      </>
       
    ) 
}