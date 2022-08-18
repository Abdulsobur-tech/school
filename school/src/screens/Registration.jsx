
import React, {useState} from 'react'
import axios from 'axios'
import {Container}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'



const Registration = () => {
  const [fullname,setFullname] =useState('')
    const[email,setEmail] = useState()
    const [phone,setPhone] =useState()
    const [address, setAddress] = useState()
    const [password,setPassword] =useState()

const registerUser = async () => {
const data ={
  fullname: fullname,
  email:email,
  phone:phone,
  address:address,
  password:password
}
await axios.post('/api/v1/auth/register',data)
}
// const navigate = useNavigate()

// const handleSubmit = event => {
//   event.preventDefault()
//   navigate('/course/create')
// }


  return (
    <>
    <Container className='mt-5 p-2'>
      <h1 className='text-center'>OUR COURSE PAGE </h1>
      <h3 className='text-center'>Please Register Before You Can Log In</h3>
      <Form onSubmit={registerUser}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fullname</Form.Label>
        <Form.Control 
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        type="text" placeholder="Enter Your Fullname" 
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control 
         value={email}
         onChange={(e) => setEmail(e.target.value)}

        type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
        type="number" placeholder="Enter Your phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control 
         value={address}
         onChange={(e) => setAddress(e.target.value)}
        type="text" placeholder="Enter Your Address" />
        <Form.Label>Password</Form.Label>
        <Form.Control 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder="Enter Your Password" />
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
export default Registration