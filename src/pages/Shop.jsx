import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postcart } from '../store/slices/cart.slice';
import { filtercategory } from '../store/slices/products.slice';

const Shop = () => {

const {id} = useParams()
const [prod, setprod] = useState([])
const [quantity, setquantity] = useState('')

const dispatch = useDispatch()

const navigate =  useNavigate()

const prodlist = useSelector(state => state.products)

useEffect(()=>{

axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
.then(res =>    setprod(res.data.data.product))

axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/')
.then(r => {
    const proserch = r.data.data.products.find(ni => ni.id === Number(id))
    setprod(proserch)
    dispatch( filtercategory(proserch.category.id) )
})

},[id])

//console.log(prodlist);
const adcart=()=> {
    const cart = {
        id: id,
        quantity: quantity,
    };
    dispatch(postcart(cart))
    console.log(cart);
}



    return (
        <div>
            <h1>shop</h1>
            <img src={prod.productImgs?.[0]} alt="" />
           <h2>{prod.title}</h2>
           <input type="text" 
           placeholder='ingrese cantidad' 
           onChange={e=>setquantity(e.target.value)}
           value={quantity}/>
            <button onClick={adcart}>add</button>
           {

prodlist.map(nwi =>(
   
    <li key={nwi.id} onClick={()=> navigate(`/shop/${nwi.id}`)}>{nwi.title}</li>
    
    
))



}


        </div>
    );
};

export default Shop;