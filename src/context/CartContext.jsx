import { createContext, useContext, useEffect, useState } from "react";
import Cart from "../components/Cart";
const shoppingCartContext = createContext({});


export default function CartContext({ children }) {
    const intialvalue=localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    const [cartitems , setCartItems]= useState(intialvalue);
    const cartQuantity= cartitems.reduce((quantity , item)=> item.quantity + quantity , 0);
    const[isopen , setIsOpen] = useState(false);
    const openCart = () => {
        setIsOpen(true);
    }
    const closeCart = () => {
        setIsOpen(false);
    }
    useEffect(()=>{
localStorage.setItem('cart' , JSON.stringify(cartitems))
    },[cartitems])
     const getItemsCount = (id) => {
    return cartitems?.find((item) => item.id === id)?.quantity || 0;
  };
    const addtoCart=(id)=>{
        setCartItems((prevItem)=>{
            if(prevItem.find(item=> item.id=== id) == null){
                return [...prevItem, {id,price, quantity: 1}];
            }
            else {
                return prevItem.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1};
                    }
                    return item;
                });
            }
        })
    }
    const decreaseCount=(id)=>{
        setCartItems((prevItem)=>{
            if(prevItem.find(item=> item.id=== id) == null){
                return prevItem.filter(item => item.id !== id);
            }
            else {
                return prevItem.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1};
                    }
                    return item;
                });
            }
        })
    }
     const removeFromCart = (id) => {
    setCartItems((Items) => Items.filter((item) => item.id !== id));
  };
  return (
   <shoppingCartContext.Provider value={{cartitems , cartQuantity  , getItemsCount , addtoCart , decreaseCount ,removeFromCart ,openCart ,closeCart }}>
    {children}
    <Cart isOpen={isopen} />
   </shoppingCartContext.Provider>
  );
}


export const useCart= ()=>{
return useContext(shoppingCartContext);
}


