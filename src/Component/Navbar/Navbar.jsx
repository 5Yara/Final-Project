import React, { useContext } from 'react'
import style from './Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/images/freshcart-logo.svg'
import { CounterContext } from '../Context/CounterContex'
import { UserContext } from '../Context/UserContext'
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'
import { CartContext } from '../Context/CartContext'
import { WishListContext } from '../Context/WishListContext'


export default function Navbar() {

  // let { count } = useContext(CounterContext)
  let{ cartCounter } = useContext(CartContext)
  let{ wishlistCounter } = useContext(WishListContext)
  let { count } = useSelector(({ counter }) => counter)
  let { userToken, setUserToken } = useContext(UserContext)
  let navigate = useNavigate()

  function logout() {
    localStorage.removeItem('userToken')
    setUserToken(null)
    navigate('/login')
  }

  return <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          <img src={logo} alt="fresh cart" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userToken != null ? <>      <li className="nav-item">
              {/* <Link className="nav-link" to={'/'}>Home {count}</Link> */}
              <Link className="nav-link" to={'/'}>Home</Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to={'cart'}>Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'wishList'}>wish List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'products'}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'categories'}>Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'brands'}>Brands</Link>
              </li> </> : ''}

          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i class="fas fa-shopping-cart me-2 text-main position-relative"><span className='cart-counter'> {cartCounter} </span></i>
              <i className="fa-solid fa-heart text-danger me-2 position-relative"><span className='cart-counter'>{wishlistCounter} </span></i>
              <i className='fab fa-facebook me-2'></i>
              <i className='fab fa-twitter me-2'></i>
              <i className='fab fa-instagram me-2'></i>
              <i className='fab fa-youtube me-2'></i>
            </li>
            {userToken != null ? <>
              <li className="nav-item">
                <span onClick={logout} className="nav-link cursor-pointer" >Logout</span>
              </li>
            </> : <>
              <li className="nav-item">
                <Link className="nav-link" to={'register'}>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'login'}>Login</Link>
              </li>
            </>}


          </ul>
        </div>
      </div>
    </nav>

  </>
}
