
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filtercategory, filterproducts, getproducts } from '../store/slices/products.slice';
import { postcart } from '../store/slices/cart.slice';

const Home = () => {

    const dispacht = useDispatch();
    const navigate = useNavigate();

    const [seproducts, setseproducts] = useState('')
    const [categories, setcategories] = useState([])

    const products = useSelector(state => state.products)

    useEffect(() => {
        dispacht(getproducts());

        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then(res => setcategories(res.data.data.categories))
    }, [])


    const filterprod = () => {

        dispacht(filterproducts(seproducts))
    }

    const selectcategory = (id) => {
        dispacht(filtercategory(id))
    }


const addcart = (id) =>{
    const cart = {
      id: id,
        quantity: 1,
    };
    dispacht(postcart(cart))
    console.log(id);
}

    //console.log(categories);
    return (
        <div>
            <h1>Home</h1>

            <Row className="g-4">
                <Col lg={3} className="mb-4">
                    <h4>Categorias</h4>
                    <ListGroup>

                        {
                            categories.map(category => (

                                <ListGroup.Item key={category.id} onClick={() => selectcategory(category.id)}> {category.name}


                                </ListGroup.Item>

                            ))

                        }
                    </ListGroup>
                </Col>

                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={e => setseproducts(e.target.value)}
                            value={seproducts}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={filterprod}>
                            Button
                        </Button>
                    </InputGroup>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            products.map((product, index) => (
                                <Col key={index}>
                                    <Card onClick={() => navigate(`/shop/${product.id}`)} >
                                        <Card.Img variant="top" src={product.productImgs[0]} />

                                        {product.title}
                                        <h3>Price {product.price}</h3>

                                    </Card>
                                    <button onClick={()=>addcart(product.id)}>add</button>
                                </Col>
                            ))

                        }
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Home;