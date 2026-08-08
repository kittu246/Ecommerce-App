import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const deliveryFee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token,setToken]=useState('');
  const navigate = useNavigate();

  const addTocart = async(itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    let cartCopy = structuredClone(cartItems);

    if (cartCopy[itemId]) {
      if (cartCopy[itemId][size]) {
        cartCopy[itemId][size] += 1;
      } else {
        cartCopy[itemId][size] = 1;
      }
    } else {
      cartCopy[itemId] = {};
      cartCopy[itemId][size] = 1;
    }

    setCartItems(cartCopy);

    if(token){
      try{

        await axios.post(backendUrl+"/api/cart/add",{itemId,size},{headers:{token:token}});

      }
      catch(error){
        console.log(error);
        toast.error(error.message);
      }
  }
}

  const calCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          totalCount += cartItems[items][size];
        }
      }
    }

    return totalCount;
  }


  const updateCount = async(itemId, size, count) => {
    let copyCartData = structuredClone(cartItems);
    copyCartData[itemId][size] = count;

    setCartItems(copyCartData);
    if(token){
      try{

        await axios.post(backendUrl+"/api/cart/update",{itemId,size,quantity:count},{headers:{token:token}});

      }
      catch(error){
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const calTotalPrice = () => {
    let totalPrice = 0;
    for (const items in cartItems) {
      const productInfo = products.find((item) => item._id === items);
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          totalPrice += productInfo.price * cartItems[items][size];
        }
      }
    }
    return totalPrice;
  };

  const getProductsData = async () => {
    try {
        console.log(backendUrl);
      const response = await axios.get(backendUrl + "/api/product/list");
      
      if(response.data.success){
        setProducts(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
  };

  const getUserCart = async(token)=>{

    try{

      const response = await axios.post(backendUrl+"/api/cart/get",{},{headers:{token:token}});
      if(response.data.success){
        setCartItems(response.data.cartData);
      }
      else{
        toast.error(response.data.message);
      }

    }
    catch(error){   
      console.log(error);
      toast.error(error.message);


  }}


  useEffect(() => {
    getProductsData();
  }, []);

    useEffect(() => {
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'));

    }
  }, []);

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addTocart,
    calCartCount,
 
    updateCount,
    calTotalPrice,
    navigate,
    backendUrl,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
