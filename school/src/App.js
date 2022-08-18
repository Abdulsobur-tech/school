import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './screens/HomePage'
import AddCourse from './screens/AddCourse'
import EditCourse from './screens/EditCourse'
import LogIn from './screens/LogIn'
 import GetCourse from './screens/GetCourse'
 import Registration from './screens/Registration'
import DeleteCourse from './screens/DeleteCourse'




const App = () => {
  return (
    <>
   <Router>
    <Routes>
        <Route exact path='/home' element={<HomePage/>}/>
       <Route exact path='/courses' element={<GetCourse/>}/>
      <Route exact path='/auth/registration' element={<Registration/>}/>
      <Route exact path='/auth/login' element={<LogIn/>}/>
      <Route exact path='/course/create' element={<AddCourse/>}/>
      <Route exact path='/course/update/:id' element={<EditCourse/>}/>
      <Route exact path='/course/delete/:id' element={<DeleteCourse/>}/>
    </Routes>
   </Router>
   </>
  )
}


export default App