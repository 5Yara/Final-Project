import React from 'react'
import style from './NotFound.module.css'

export default function notFound() {
  return <>
  
  <div className="container mt-5">
    <h2 className='fw-bold mb-5 largeText text-danger'>Page not found </h2>
    <p className='fw-bold'>Sorry, the page you are looking for doesn't exist.</p>
    <p className='fw-bold mb-5 text'>If you have problems, please contact us. </p>
    <button className='btn btn-warning ms-5 me-5'>Help!</button>
    <button className='btn btn-warning ms-5 me-5'>Go back </button>
  </div>
  
  </>
}
