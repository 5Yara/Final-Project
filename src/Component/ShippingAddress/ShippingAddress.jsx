import React, { useContext } from 'react'
import style from './ShippingAddress.module.css'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import CheckOutSession from '../Context/CartContext.js'

export default function ShippingAddress() {

  let {CheckOutSession} = useContext(CartContext)
  let {cartId} = useParams()

 async function checkOut(values) {
    let {data} = await CheckOutSession(cartId , values)
    if (data.status == 'success'){
      window.location.href = data.session.url
    }
  }

  let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: ''
    }, onSubmit: checkOut
  })

  return <>
    <h2>ShippingAddress</h2>
    <div className="w-75 mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='details'>Details</label>
        <input onChange={formik.handleChange} type='text' id='details' name='details' className='form-control mb-3' />
        <label htmlFor='phone'>Phone</label>
        <input onChange={formik.handleChange} type='tel' id='phone' name='phone' className='form-control mb-3' />
        <label htmlFor='city'>City</label>
        <input onChange={formik.handleChange} type='text' id='city' name='city' className='form-control mb-3' />
        <button type='onSubmit' className='btn bg-main text-light'>Check Out</button>
      </form>
    </div>
  </>
}
