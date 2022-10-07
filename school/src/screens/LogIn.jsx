
import axios from 'axios';
import React, {useState} from 'react'
import {Container}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import { useNavigate } from 'react-router-dom';


const LogIn = () => {
const navigate = useNavigate()
  const[email,setEmail] = useState('')
  const [password,setPassword] =useState('')
  
  const handleSubmit = () =>{
  //e.preventDefault()
  const data ={
    email:email,
    password:password
  }
  axios.post('/api/v1/auth/login', data)
  navigate('/courses')
}

  return (
    <>
    <Container>
      <h1 className='text-center'>Login </h1>

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        value={password}
        onChange={(e) => setPassword(e.target.value)}

        type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}
export default LogIn