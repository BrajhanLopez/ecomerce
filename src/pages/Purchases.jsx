import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getcar } from '../store/slices/car.slice';

const Purchases = () => {

    const dispacht = useDispatch()
    const navigate = useNavigate()

    const purchases = useSelector(state => state.car.data)

    useEffect(() => {

        dispacht(getcar());


    }, [dispacht])



    return (
        <div>
            <h1 className='p-h1'>My Purchases</h1>

            <ul className='ul-purchases'>

                {
                    purchases?.purchases.map((p, index) => (

                        <li key={index} className='p-fecha'>June - {p.createdAt.split('-')[2].substring(0, 2)}, {p.createdAt.split('-')[0]}
                            <ul className='ul2'>
                                {
                                    p.cart.products.map((m, index) => (
                                        <div key={index} className='li-pro'>
                                            
                                                
                                                <li className='lii-s1 lii-s' onClick={() => navigate(`/shop/${m.id}`)}>{m.title}</li>
                                                <li className='lii-s' onClick={() => navigate(`/shop/${m.id}`)}>{m.productsInCart.quantity}</li>
                                                <li className='lii-s' onClick={() => navigate(`/shop/${m.id}`)}>{m.price}</li>
                                                
                                            
                                        </div>
                                    ))
                                }
                            </ul>
                        </li>

                    ))

                }

            </ul>


        </div>
    );
};

export default Purchases;