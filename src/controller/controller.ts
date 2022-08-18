import  { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid';
import { TutorInstance } from '../config/model/user';
import { CourseInstance } from '../config/model/course';
import jwt from "jsonwebtoken";



class TutorController{
       async createUser(req: Request, res: Response) {
            const id = uuidv4();
            try {
                const record = await TutorInstance.create({ ...req.body, id })
                return res.json({ record, msg: "Registration Successful" });
            } catch (e) {
                return res.json({ msg: "Registration Failed", status: 500, route: "/create" })
            }
    }

    async login(req: Request, res: Response) {
        try{
        const {email, password} = req.body;
        console.log(req.body);
        
        const user: any = await TutorInstance.findOne({where: {email}})
        if(!user) {
            return res.status(401).json({msg: `User does not exist`});
        }
        if(user.password !== password) {
            return res.status(403).json({msg: `Incorrect Password`});
        }

        const token = jwt.sign(
            { email: user.email, id: user.id },
            "jwtsecret"
            );
            //console.log(res.header());

          res.header("auth-token", token).send(`Logged in, auth-token: ${token}`);
        }catch(error){
            console.log(error);
            
        }
    }


    async allCourses(req: Request, res: Response) {
        try {
            const limit=req.query?.limit as number | undefined;
            const offset=req.query?.limit as number | undefined;
          const records = await CourseInstance.findAll({where:{}, limit,offset})
          return res.json(records)
        } catch (e) {
            return res.json({ msg: "Failed to read", status: 500, route: "/read" })
        }
}




async createCourse(req:any, res: Response) {
    try {
        //save course
        const id = uuidv4();
        const course_user_id = req.user.id
        const record = await CourseInstance.create({ ...req.body, id, course_user_id })
        res.status(200).json({msg: `Success`, data: record})

    } catch(e) {
        return res.json({msg: "Failed to create"})
    }
}




async getCourse(req: Request, res: Response) {
    try {
        const {id} =req.params;
      const record =  await CourseInstance.findOne({where:{id}})
      return res.json(record)
     } catch (e) {
         return res.json({ msg: "Failed to read", status: 500, route: "/read/:id" })
     }
}


async updateCourse(req: Request, res: Response) {
    try {
        const {id} =req.params;
        const record = await CourseInstance.findOne({where:{id}})
    
        if(!record){
         return res.json({msg:"No record  for this id"})
        }
    } catch (e) {
         return res.json({ msg: "Failed to read", status: 500, route: "/update/:id" })
     }
}

async deleteCourse(req: Request, res: Response) {
    try {
        const {id} =req.params;
        const record = await CourseInstance.findOne({where:{id}})
        if(!record){
         return res.json({msg:"No record  for this id"})
        }
       const deleteRecord =  await record.destroy()
       return res.json({record: deleteRecord})
     } catch (e) {
         return res.json({ msg: "Failed to read", status: 500, route: "/delete/:id" })
     }
}

}

export default new TutorController