import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
function SignUp() {
const {signUp , currentuser} = useAuth();
const [error , setError] = useState('');
const [loading , setLoading] = useState(false);
const emailRef = useRef();
const passRef =  useRef();
const navigate = useNavigate();
 useEffect(() => {
    if (currentuser) navigate("/store");
  }, [currentuser, navigate]);

async function handleSubmit  (e) {
   e.preventDefault();
   try{
    setLoading(true);
    setError('');
   await signUp(emailRef.current.value , passRef.current.value);
    console.log("Signup successful ✅");
   }catch(err){
    setError(err.message);
   }
   finally {
    setLoading(false);
  }
}
  return (
   <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="shadow-sm border-1">
          <Card.Body>
            <h3 className="text-center mb-4">Create an Account</h3>
            {
              error && <Alert variant='danger'>{error}</Alert>
            }
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" ref={emailRef}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" ref={passRef}/>
              </Form.Group>

              <Button disabled={loading} variant="danger" type="submit" className="w-100 mt-2">
                Register
              </Button>
            </Form>

            <div className="text-center mt-3">
              <span>Already have an account? </span>
              <Link style={{ color: "black" }} to="/login">login</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default SignUp
