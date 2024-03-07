import React from 'react'
import style from './Footer.module.css'

export default function footer() {
  return <>
    <div className="row bg-main m-0 mt-5 p-5">
      <div className="col-md-4">
        <ul>
          <li className='fw-bold'>About</li>
          <li className='fw-bold'>Contacts</li>
          <li className='fw-bold'>Help</li>
        </ul>
      </div>
      <div className="col-md-4">
        <div className="card-body text-center">
          <h3>Follow US </h3>
          <div className="icons mt-3">
            <i className="fa-brands fa-facebook mx-1 border border-1 rounded-circle p-2"></i>
            <i className="fa-brands fa-twitter mx-1 border border-1 rounded-circle p-2"></i>
            <i className="fa-brands fa-linkedin-in mx-1 border border-1 rounded-circle p-2"></i>
            <i className="fa-solid fa-globe mx-1 border border-1 rounded-circle p-2"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h6 className='fw-bold'>Sign up to get 10% off your first order</h6>
        <input placeholder='Enter your email' className='mt-3' />
        <button className='btn btn-light ms-2 btn-sm'>Subscribe</button>
      </div>
    </div>
    <div className=' p-4 bg-black'>
      <p className='text-white text-center'>Copyright © Your Website 2021</p>
    </div>
  </>
}
