import React, { useEffect } from 'react'
import style from './Categories.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Categories() {

  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  let { data, isLoading, isError, isFetching } = useQuery('categories', getCategories)
  // console.log(data?.data.data)

  //  async function getSubCategories()  {
  //   let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`);
  // }
  // useEffect(() => {
  //   getSubCategories() 
  // }, [])

  return <>


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
      </div> : <>
        <div className='row gy-4 mt-3 '>
          {data?.data.data.map((product, index) =>
            <div key={index} className="col-md-4">
              <div className="product p-2">
                <Link to={`/subcategories`}>
                  <img src={product.image} className='w-100 mb-3' height={300} alt={product.slug} />
                  <h3 className='text-center text-main fw-bold'>{product.name}</h3>
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* <div className='row gy-4 mt-3 '>
          {data?.data.data.map((product, index) =>
            <div key={index} className="col-md-4">
              <div className="product p-2">
                <img src={product.image} className='w-100 mb-3' height={300} alt={product.slug} />
                <h3 className='text-center text-main fw-bold'>{product.name}</h3>
              </div>
            </div>
          )}
        </div> */}
      </>
    }

  </>
}

