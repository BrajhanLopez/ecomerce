import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { postbuy } from '../store/slices/cart.slice';


const Car = ({show, handleClose, cart}) => {
  const navigate = useNavigate();
  //console.log(cart.data?.cart.products[0])

  const selectproducts = (r)=>{
    navigate(`/shop/${r.id}`);
    handleClose();
  }
  const dispacht = useDispatch();
const shoping = () => {

  dispacht(postbuy())
navigate('/purchases')


alert('compra realizada')

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
  cart.data?.cart.products.map(r=>(
<li key={r.id} onClick={()=>selectproducts(r) }> {r.title}     
<button>-</button>
</li>

  ))
}
</ul>
<button onClick={shoping}>comprar</button> 

        </Offcanvas.Body>
      </Offcanvas>  


        </div>
    );
};

export default Car;