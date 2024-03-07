import style from './WishList.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { WishListContext } from '../Context/WishListContext.js'

export default function WishList() {
 
  let {  getWishListItems,deleteWishListItems } = useContext(WishListContext)
  const [wishList, setWishList] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getItems() {
    let { data } = await  getWishListItems()
    console.log(data)
    setWishList(data)
    setLoading(false)
  }

  async function deleteItem(id) {
    let { data } = await deleteWishListItems(id)
    setWishList(data)
    setLoading(false)
  }

  useEffect(() => {
    getItems()
  }, [])

  return <>
    <div className="bg-main-light p-2 mt-5">
      <h2>My wish list</h2>
      {loading ?
        <div className='loading'>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center mt-5"
            visible={true}
          />
        </div> :
        wishList ? <>
          {wishList.data.map(data => <div key={data.id} className='row align-items-center p-2 m-0 border-1 border-bottom'>
            <div className="col-md-1">
              <div className="img">
                <img src={data.imageCover} className='w-100' alt={data.title} />
              </div>
            </div>
            <div className="col-md-9">
              <div className="item">
                <h3 className='h5 fw-bold'>{data.title.split(' ').splice(0, 4).join(' ')}</h3>
                <p className='fw-bold text-main'>Price: {data.price} EPG</p>
                <button onClick={() => { deleteItem(data.id) }} className='btn'> <i className='fas fa-trash-can text-main'></i> Remove</button>
              </div>
            </div>
            <div className="col-md-2">
              <div className="count">
                <button className='btn brdr'>Add to Cart</button>
              </div>
            </div>
          </div>)}
        </> : <h2>WishList is empty</h2>
        }
    </div>
  </>
}

