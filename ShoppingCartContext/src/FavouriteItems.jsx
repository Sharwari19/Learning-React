import './FavouriteItems.css';
import { ShopContext } from './App';
import { useContext, useEffect } from 'react';

export default function FavouriteItems()
{
    
    const { products, setProducts} = useContext(ShopContext);

    console.log('products', products);
    
    const favItems = products.filter((product) => product?.isFavourite === true);
    console.log('favItems', favItems);

    function handleRemoveFav(id)
    {
      // const updatedFavItems = favItems.filter((favItem) => favItem.id !== id);
      // console.log('updatedFavItems', updatedFavItems);
      alert('Removed From Favourites');
      setProducts((prevProducts) => 
      {return prevProducts.map((prevProduct) => prevProduct.id === id ? {...prevProduct, isFavourite : !prevProduct.isFavourite} : prevProduct)});
    }

    return(
    <>
        {favItems.length > 0 && 
        favItems.map((favItem) =>
            <div className="cart" key={favItem.id}>
              <div className="item-container">
                <img
                  className="cart-item-img"
                  src={favItem.images[0]}
                  alt={favItem.title}
                  width={100}
                  height={100}
                />
                <div className="price-title">
                  <div className="cart-item-title">{favItem.title}</div>
                  <div className="cart-item-price">$ {favItem.price}</div>
                </div>
  
                  <button 
                  className="delete-btn"
                  onClick={() => handleRemoveFav(favItem.id)}
                  ><i className="material-icons">&#xe872;</i>
                  </button>
              </div>
            </div>
          )}

          {favItems.length === 0 && <div className='empty-wishlist'>Your Wishlist is Empty!</div>}
    </>     
    )
}