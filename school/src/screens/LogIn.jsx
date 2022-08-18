
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logInUser } from '../api.js';
const { REACT_APP_BASE_URL } = process.env;

 
const LogIn = () => {

    const[email,setEmail] = useState('')
    const [password,setPassword] =useState('')
const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(email,password);
  logInUser(email,password)
}
// const logInUser = async () => {
//   //e.preventDefault()
// const data ={
//   email:email,
//   password:password
// }
// console.log(data);
// try{
//  const data = await axios.post(`${REACT_APP_BASE_URL}/api/v1/auth/login`,data)
//  console.log("data",data);
// return data
// }catch(error){
//   console.log("error",error);
// return error

// }
// }


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
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}
export default LogIn