import React, { useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'
import axios from 'axios'
import Slider from "react-slick";
import { Helmet } from 'react-helmet'

export default function ProductDetails() {

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  let { id } = useParams()

  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)

  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    setDetails(data.data);
    setLoading(false);
  }

  useEffect(() => {
    getProductDetails(id)
  }, [])

  return <>
    {loading ?
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>{details.title}</title>
        </Helmet>
        <div className='row align-items-center'>
          <div className='col-md-4'>
            <Slider {...settings}>
              {details.images.map((image, index) => <img src={image} key={index} className='w-100' alt={details.title} />)}
            </Slider>
          </div>
          <div className="col-md-8">
            <div className="details">
              <h3 className='h5'>{details.title}</h3>
              <p className='py-3'>{details.description}</p>
              <span className='font-sm text-main'>{details.category.name}</span>
              <div className="d-flex py-3 justify-content-between align-items-center">
                <span className='font-sm'>{details.price} EGP</span>
                <span className='font-sm'>
                  <i className='fas fa-star rating-color me-1'></i>
                  {details.ratingAverage} </span>
              </div>
              <button className='btn bg-main text-main-light w-100 btn-sm'>Add To Cart</button>
            </div>
          </div>
        </div>
      </>
    }

  </>
}
