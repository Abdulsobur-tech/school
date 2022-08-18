import express from 'express'
import TutorsValidator from '../validator/validator'
import Middleware from '../middleware/handleValidation'
import TutorController from '../controller/controller'

import { auth } from '../middleware/authmiddleware'

const router = express.Router()


router.post("/auth/register",
 TutorsValidator.checkCreateStudent(),
 Middleware.handleValidationError,
 TutorController.createUser
 )

 router.post("/auth/login",
  TutorsValidator.checkLoginStudent(),
  Middleware.handleValidationError,
  TutorController.login
  )
  
 
 router.post("/course/create", 
 auth,
 TutorController.createCourse
 )

router.get('/courses',
TutorsValidator.checkReadStudent(),
Middleware.handleValidationError,
TutorController.allCourses
)


router.get('/course/:id', 
TutorsValidator.checkIdParam()
,Middleware.handleValidationError,
TutorController.getCourse
 )

//Updating data. COMPLETE IT INSIDE CONTROLLER
router.put('/course/update/:id', 
TutorsValidator.checkIdParam(),
Middleware.handleValidationError,
TutorController.updateCourse
)


//Deleting data
router.delete('/course/delete/:id', 
TutorsValidator.checkIdParam(),
Middleware.handleValidationError,
auth,
TutorController.deleteCourse
)

export default router;
