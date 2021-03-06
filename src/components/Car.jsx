import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { deleteprod, getcart, postbuy } from '../store/slices/cart.slice';


const Car = ({ show, handleClose, cart,handleShow }) => {
  const navigate = useNavigate();
  let tot=0;
  //console.log(cart.data?.cart.products[0])

  const selectproducts = (r) => {
    navigate(`/shop/${r.id}`);
    handleClose();
  }
  const dispacht = useDispatch();
  const shoping = () => {

    dispacht(postbuy())
    navigate('/purchases')


    alert('compra realizada')

  }

  const del = (id) =>{
    dispacht(deleteprod(id))
    handleShow()
    handleShow()
    alert('producto eliminado')
  }



  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {
              cart.data?.cart.products.map(r => (
                <div key={r.id}  className='div-cart'>
                  <div>
                  <p className='brand'>{r.brand}</p>
                  <li className='title' onClick={() => selectproducts(r)}> {r.title} </li>
                  <p className='quan'>{r.productsInCart.quantity} </p>
                  </div>
                  <div className='div-trush'>
                  <div  onClick={()=>del(r.id)}> <i className="fa-solid fa-trash-can"></i></div>
                  <p>Total: {Number(r.price)*Number(r.productsInCart.quantity)}</p>
                  <p className='bor'> ya:{tot+=(Number(r.price)*Number(r.productsInCart.quantity))}</p>
                  </div>

                </div>
              ))
            }
          </ul>
          <hr />
          <p className='tod'>Total:{tot}</p>
          <button className='buton-comprar' onClick={shoping}>checkout</button>

        </Offcanvas.Body>
      </Offcanvas>


    </div>
  );
};

export default Car;