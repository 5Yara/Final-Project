import React from 'react'
import style from './MainSlider.module.css'
import imageSlider1 from '../../Assets/images/slider-image-1.jpeg';
import imageSlider2 from '../../Assets/images/slider-image-2.jpeg';
import imageSlider3 from '../../Assets/images/slider-image-3.jpeg';
import image1 from '../../Assets/images/grocery-banner.png';
import image2 from '../../Assets/images/grocery-banner-2.jpeg';
import Slider from "react-slick";


export default function MainSlider() {

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

  return <>

    <div className="row my-3 gx-0">
      <div className="col-md-9">
        <Slider {...settings}>
          <img src={imageSlider3} height={400} className='w-100' alt='' />
          <img src={imageSlider2} height={400} className='w-100' alt='' />
          <img src={imageSlider1} height={400} className='w-100' alt='' />
        </Slider>
      </div>
      <div className="col-md-3">
        <div className="images">
          <img src={image1} height={200} className='w-100' alt='' />
          <img src={image2} height={200} className='w-100' alt='' />
        </div>
      </div>
    </div>

  </>
}
