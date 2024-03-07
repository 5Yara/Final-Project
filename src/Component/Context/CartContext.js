import axios from "axios";
import { createContext, useState } from "react";

export let CartContext = createContext();
export default function CartContextProvider(props) {

    const [cartCounter, setCartCounter] = useState(0);

    let headers = { token: localStorage.getItem('userToken') }

    function CheckOutSession(cartId, shippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
            shippingAddress
        }
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

   async function addToCart(productId) {
        try { const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId
        }
            , {
                headers
            });
            setCartCounter(response.data.numOfCartItems)
            return response;}
            catch(err){
                return err;
            }
            
    }

    function getCartItems() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

    function getCartItems() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

    function deleteCartItems(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

    function updateCartItems(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
            , {
                count
            },
            {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

    return <CartContext.Provider value={{ addToCart, getCartItems, deleteCartItems, updateCartItems, CheckOutSession, cartCounter }}>
        {props.children}
    </CartContext.Provider>
}