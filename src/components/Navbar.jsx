import React, { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Car from './Car';
import { useDispatch, useSelector } from 'react-redux';
import { getcart } from '../store/slices/cart.slice';

const Navbar = () => {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const dispacht = useDispatch()
  

const cart = useSelector(state => state.cart)


  const handleClose = () => setShow(false);
  const handleShow = () => {
    const token = localStorage.getItem("token");
    dispacht(getcart());
    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {

    dispacht(getcart());


}, [dispacht])

    return (
        <div>
         <nav className="menu-container">
  
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  
  <a href="#" className="menu-logo">
    <img src="https://wweb.dev/resources/navigation-generator/logo-placeholder.png" alt="My Awesome Website"/>
  </a>

 
  <div className="menu">
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="#">
          Products
        </a>
      </li>
      <li>
        <a href="#">
          Log out
        </a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#/login">
        <i className="fa-solid fa-user"></i>
        </a>
      </li>
      <li>
        <a href="#/purchases">
        <i className="fa-solid fa-bag-shopping"></i>
        </a>
      </li>
      <li onClick={handleShow}>
        
        <i className="fa-solid fa-cart-shopping"></i>
        
      </li>
    </ul>
  </div>
</nav>

<Car show={show} handleClose={handleClose} cart={cart} />


    


        </div>
    );
};

export default Navbar;