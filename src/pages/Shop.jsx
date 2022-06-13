import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postcart } from '../store/slices/cart.slice';
import { filtercategory } from '../store/slices/products.slice';

const Shop = () => {

    const { id } = useParams()
    const [prod, setprod] = useState([])
    const [quantity, setquantity] = useState('1')
    const [cont, setcont] = useState(0)


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const prodlist = useSelector(state => state.products)

    useEffect(() => {

        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => setprod(res.data.data.product))

        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/')
            .then(r => {
                const proserch = r.data.data.products.find(ni => ni.id === Number(id))
                setprod(proserch)
                dispatch(filtercategory(proserch.category.id))
            })

    }, [id])

    const plus =() =>{
        setquantity(Number(quantity) +1)
    }


    const men =() =>{
        setquantity(Number(quantity) -1)
    }
    //console.log(prodlist);
    const adcart = () => {
        const cart = {
            id: id,
            quantity: quantity,
        };
        dispatch(postcart(cart))
        console.log(cart);
    }



    return (
        <div >

            <h2>Home - {prod.title}</h2>
            <div className='product-container'>
                <img className='prod-shop' src={prod.productImgs?.[0]} alt="" />
                <div className='detail-prod'>
                    <h2>{prod.title}</h2>
                    <p className='detail-p'>{prod.description}</p>
                    <div className='price-shop'>
                        <div>
                            <h5>Price:</h5>
                            <h5>$ {prod.price}</h5>
                        </div>
                        <div>
                            <span className='mas' onClick={()=> men()}>-</span>
                            <input className='input-shop'  type="text"
                                
                                onChange={e => setquantity(e.target.value)}
                                value={quantity} />
                                <span className='mas' onClick={()=> plus()}>+</span>
                            {/*<button onClick={adcart}>add</button>*/}
                            
                        </div>
                        <div onClick={adcart} className='cart-ico-shop'> Agregar al carrito<i className="fa-solid fa-cart-arrow-down"></i></div>
                    </div>
                </div>
            </div>
            <h5 className='img-h5' >Discover similar items</h5>
            <div className='img-similar'>
            {

                prodlist.map(nwi => (
                    <div key={nwi.id}>
                   <Card className='product-p' onClick={() => navigate(`/shop/${nwi.id}`)}>
                    
                    <Card.Img  variant="top" src={nwi.productImgs[0]} className="img-list" />
                    <li   className='li-ii'>{nwi.title}</li>
                    <h5>price:</h5>
                    <h5>{nwi.price}</h5>
                    </Card>
                    </div>

                ))



            }
</div>

        </div>
    );
};

export default Shop;