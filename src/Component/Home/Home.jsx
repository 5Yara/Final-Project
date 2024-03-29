import React from 'react'
import style from './Home.module.css'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.jsx'
import MainSlider from '../MainSlider/MainSlider.jsx'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider.jsx'
import { Helmet } from "react-helmet";

export default function home() {
  return <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Fresh Cart</title>
    </Helmet>
    <MainSlider />
    <CategoriesSlider />
    <FeaturedProducts />
  </>
}
