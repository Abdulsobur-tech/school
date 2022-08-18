// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import {Container}  from 'react-bootstrap'

// const HomePage = () => {
//   return (
//     <Container className='justify-content-center m-5 p-2'>
//         <h1>Welcome To Our School Page</h1>
//     <Button  href="auth/registration">Sign in</Button> <Button href="auth/login">Login</Button>{' '}
//     </Container>
//   )
// }


// export default HomePage

import React,{useState,useEffect}  from 'react'
import {Container,Col}  from 'react-bootstrap'
import axios from 'axios'
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import book from './book.jpg'
import './getCourse.css'

const HomePage = () => {

const [courses,setCourses] =useState([])

useEffect(() =>{
const  getCourse = async () =>{
  const { data } = await axios.get('/api/v1/courses')
  setCourses(data)
}
getCourse()
},[])

  return (
    <>
    <h1>Here Are Our Courses</h1>
    <Button className='btn' href="auth/registration">Sign in</Button> <Button className='btn' href="auth/login">Login</Button>{' '}
    <Container className="container">



{
  courses.map(course => {
    return<Col className="col">
      
     <ul className='ul'>
     <img className="image" src={book} alt="book" />
      <li key={course.id}>{course.title}</li>
     <li key={course.id}>{course.image}</li>
      <li key={course.id}>{course.description}</li>
      <li key={course.id}>{course.price}</li>
     </ul>
  </Col>
})
}

  </Container>
  </>
  )
}


export default HomePage




