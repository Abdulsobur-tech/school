
import React, {useState} from 'react'
import axios from 'axios'
import {Container}  from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




const AddCourse = () => {
  const [title,setTitle] =useState('')
    const[description,setDescription] = useState()
    const [image,setImage] =useState()
    const [price, setPrice] = useState()
    // const [password,setPassword] =useState()

const registerCourse = async () => {
const data ={
  title: title,
  description:description,
  image:image,
  price:price,
  // password:password
}
await axios.post('/course/create',data)
}


  return (
    <>
    <Container className='mt-5 p-2'>
      <h1 className='text-center'>WELCOME</h1>
      <h3 className='text-center'>You Can Create Course Here </h3>
      <Form onSubmit={registerCourse}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" placeholder="Enter Your Course Title" 
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control 
         value={description}
         onChange={(e) => setDescription(e.target.value)}

        type="text" placeholder="Enter Your Course Description" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control 
         value={image}
         onChange={(e) => setImage(e.target.value)}
        type="text" placeholder="Enter Your Image Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control 
         value={price}
         onChange={(e) => setPrice(e.target.value)}
        type="number" placeholder="Enter Your price" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    
    </>
  )
}
export default AddCourse