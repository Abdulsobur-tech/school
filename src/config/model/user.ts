import {DataTypes, Model} from 'sequelize'
import db from '../database.config'
//import {Model} from 'sequelize'

interface TutorAttribute{
    id:string
    fullname:string
    email:string
    phone:string
    address:string
    password:string
}

export class TutorInstance extends Model<TutorAttribute>{}


TutorInstance.init(
    {
        id:{
            type:DataTypes.UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        fullname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
             unique:true
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }

        },
        
    {
        sequelize:db,
        tableName:"TutorsDatabase"
    }
);