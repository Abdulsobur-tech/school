//import { response } from "express";
import axios from 'axios'
const { REACT_APP_BASE_URL } = process.env;

export const logInUser = async (email,password) => {
    //e.preventDefault()
//   const data ={
//     email:email,
//     password:password
//   }
const data ={
    email,
    password
}
  console.log(data);
  try{
   const response = await axios.post(`${REACT_APP_BASE_URL}/api/v1/auth/login`,data)
   console.log("data",data);
  return {
    data:response,
    error:null
  }
  }catch(error){
    console.log("error",error);
  return {
    data:null,
    error:error
  }
  
  }
  }
  