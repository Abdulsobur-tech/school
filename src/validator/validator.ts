import { body,query,param } from "express-validator";

class TutorsValidator{
    checkCreateStudent(){
        return[
        body("id").optional().isUUID(4).withMessage("The value should be UUID v4"),
        body("fullname").notEmpty().withMessage("Fullname  must be provided"),
        body("email").notEmpty().withMessage("The email value should not be empty"),
        body("address").notEmpty().withMessage("Address  must be provided")
    ]
    }

    checkLoginStudent(){
        return[
        body("email").notEmpty().withMessage("The email value should not be empty"),
        body("password").notEmpty().withMessage("Password must be provided")
    ]
    }

    checkReadStudent(){
        return[
        //     query('limit').notEmpty().withMessage("The query limit shouldn't be empty")
        //     .isInt({min:1,max:20}).withMessage("The limit value should be number and between 1-10"),
            query("offset").optional().isNumeric().withMessage("The value should be number"),
        ]
    }
    
    checkIdParam(){
        return[
            param("id").notEmpty().withMessage("The value should not be empty").isUUID(4).withMessage("The value should be uuid v4"),
        ]
    }
}

export default new TutorsValidator()