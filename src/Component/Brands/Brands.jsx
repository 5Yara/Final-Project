import React, { useEffect } from 'react'
import style from './Brands.module.css'
import { getBrands } from '../../Redux/BrandSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BallTriangle } from 'react-loader-spinner'


export default function Brands() {
  let { brands , isLoading } = useSelector(({ brand }) =>  brand )
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBrands())
  }, [])
  return <>
    {isLoading ?
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
      <div className="row py-5">
        {brands.map(brand =>
        <div key={brand._id} className='col-md-3'>
          <div className="product p-2">
            <img src={brand.image} className='w-100' alt={brand.title}/>
            <p>{brand.name}</p>
          </div>
        </div>
        )}
      </div>
      }

  </>


}
