import axios from "axios";
import { createContext, useState } from "react";

export let WishListContext = createContext();
export default function WishListContextProvider(props) {

    const [wishlistCounter, setWishlistCounter] = useState(0);

    let headers = { token: localStorage.getItem('userToken') }

    async function addToWishList(productId) {
        try { const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            productId
        }
            , {
                headers
            });
            setWishlistCounter(response.count)
            return response ;}
            catch(err){
                return err;
            }
            
    }

    function getWishListItems() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

    function deleteWishListItems(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`
            , {
                headers
            })
            .then((response) => response)
            .catch((err) => err)
    }

    return <WishListContext.Provider value={{ addToWishList , getWishListItems , deleteWishListItems , wishlistCounter}}>
        {props.children}
    </WishListContext.Provider>

}