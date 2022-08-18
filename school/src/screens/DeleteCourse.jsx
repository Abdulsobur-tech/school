import React from 'react'
import axios from 'axios'
const DeleteCourse = () => {

  
const dataDelete =(id,e)=>{
  e.preventDefault();
  axios.delete(`/api/v1/course/delete/:${id}`).then(res => console.log('deleted',res)).catch(err => console.log(err))
}


  return (
    <>
    <h1>Course deleted</h1>
    </>
  )
}


export default DeleteCourse