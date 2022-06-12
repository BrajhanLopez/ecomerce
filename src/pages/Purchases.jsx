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
            <h1>purchases</h1>

            <ul>
            {
                    purchases?.purchases.map((p, index) => (

                        <li key={index}>{p.createdAt}
                        <ul>
                        {
                            p.cart.products.map((m,index)=>(

                                <li key={index} onClick={()=> navigate(`/shop/${m.id}`) }>{m.price}</li>
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