import {DataTypes, Model} from 'sequelize'
import db from '../database.config'
//import {Model} from 'sequelize'

interface CourseAttribute{
    id:string
    title:string
    description:string
    image:string
    price:number
    course_user_id:string
}

export class CourseInstance extends Model<CourseAttribute>{}


CourseInstance.init(
    {
        id:{
            type:DataTypes.UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        price:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        course_user_id: {
            type: DataTypes.UUIDV4,
            references: { model: "TutorsDatabase", key: "id" },
            allowNull: false,
          },
       
        },
        
    {
        sequelize:db,
        tableName:"courseData"
    }
);