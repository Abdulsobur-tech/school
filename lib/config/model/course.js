"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../database.config"));
class CourseInstance extends sequelize_1.Model {
}
exports.CourseInstance = CourseInstance;
CourseInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    course_user_id: {
        type: sequelize_1.DataTypes.UUIDV4,
        references: { model: "TutorsDatabase", key: "id" },
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: "courseData"
});
