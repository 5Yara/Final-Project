import React ,  { useContext, useEffect, useState }from 'react'
import style from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, increaseByAmount } from '../../Redux/CounterSlice'
import axios from 'axios'
import { BallTriangle } from 'react-loader-spinner'
import product from '../Products/Products'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { CartContext } from '../Context/CartContext'
import toast, { Toaster } from 'react-hot-toast'

export default function Products() 

{
  
  function getProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  const [input , setInput] = useState('')

  let { data, isLoading, isError, isFetching } = useQuery('featuredProducts', getProducts)

  let { addToCart } = useContext(CartContext);

  async function postToCart(id) {
    let { data } = await addToCart(id);
    if(data.status == 'success'){
      toast.success(data.message , {
        duration:2000
      })
    }
  }
  
  return <>
     
    <input className='mt-5 mb-3 form-control' placeholder='Search' value={input} onChange={(e) => setInput(e.target.value)}/>
    {isLoading ?
      <div>
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
      <div className='row gy-4'>
        {data?.data.data.map(product =>
          <div key={product.id} className="col-lg-2">
            <div className="product p-2">
              <Link to={`/productdetails/${product.id}`}>
                <img src={product.imageCover} className='w-100' alt={product.title} />
                <span className='font-sm text-main'>{product.category.name}</span>
                <h3 className='h5'>{product.title.split(' ').splice(0, 2).join(' ')}</h3>
                <div className="d-flex py-3 justify-content-between align-items-center">
                  <span className='font-sm'>{product.price} EGP</span>
                  <span className='font-sm'>
                    <i className='fas fa-star rating-color me-1'></i>
                    {product.ratingAverage} </span>
                </div>
              </Link>
              <button onClick={() => postToCart(product.id)} className='btn bg-main text-main-light w-100 btn-sm'>Add To Cart</button>
            </div>
          </div>
        )}
      </div>}

  </>
}

// {

//   let {count} = useSelector(({counter}) => counter)
//   let dispatch = useDispatch()

//   return <>
  
//   <h2>Products {count} </h2>
//   <button onClick={() => dispatch(increase())} className='btn btn-info'>Increase</button>
//   <button onClick={() => dispatch(decrease())} className='btn btn-info mx-3'>Decrease</button>
//   <button onClick={() => dispatch(increaseByAmount(20))} className='btn btn-info mx-3'>IncreaseByAmount</button>
//   </>
    
  
// }
