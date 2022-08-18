import React,{useState,useEffect}  from 'react'
import {Container,Col}  from 'react-bootstrap'
import axios from 'axios'
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import book from './book.jpg'
import './getCourse.css'
import {useNavigate} from 'react-router-dom'


const GetCourse = () => {

const [courses,setCourses] =useState([])

useEffect(() =>{
const  getCoursedata = async () =>{
  const { data } = await axios.get('/api/v1/courses')
  setCourses(data)
}
getCoursedata()
},[])
  const navigate = useNavigate()
const handleDelete = async(id) =>{
  try{
    await axios.delete(`/api/v1/course/delete/${id}`)
    const deleteData =courses.filter(item => item !== id);
    setCourses(deleteData)
    navigate.push('/home')
  } catch(err){
    console.log(err);
  }
}

  return (
    <>
    <h1>Here Are Our Courses</h1>
    <Button className='btn' href="auth/registration">Sign in</Button> <Button className='btn' href="auth/login">Login</Button>{' '}
    <Button href="course/create">Add Course</Button>
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
      
       <Button>Edit Course</Button>
       <Button onClick={handleDelete}>Delete Course</Button>
     </ul>
  </Col>
})
}

  </Container>
  </>
  )
}


export default GetCourse




