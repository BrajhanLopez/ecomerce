import axios from "axios";
import React from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate();

  const submit = (data) => {

    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
      .then(res => {

        localStorage.setItem("token", res.data.data.token);
        navigate("/");
        alert("sesion iniciada correctamente");
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) {
          alert("Credenciales incorrectas");
        }
      });
  }


  return (
    <div>

      <Card style={{ maxWidth: "500px" }} className="mx-auto">
        <Card.Body>
          <Form onSubmit={handleSubmit(submit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3 className="login-h3">Welcome! Enter your mail and password to continue</h3>
            <div className="text-data">
              <h5 className="login-h5">Test Data</h5>
              <div className="ing-login">
              <i class="fa-solid fa-envelope p-login"></i>
              <p className="p-login">bls@gmail.com</p>
              </div>
              <div  className="ing-login">
              <i class="fa-solid fa-lock p-login"></i>
              <p className="p-login">123456</p>
              </div>
            </div>

              <Form.Label>Email address</Form.Label>
              <Form.Control  {...register("email")} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control {...register("password")} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>


    </div>
  );
};

export default Login;