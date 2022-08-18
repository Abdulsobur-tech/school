"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../database.config"));
class StudentInstance extends sequelize_1.Model {
}
exports.StudentInstance = StudentInstance;
StudentInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    fullname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    courseTitle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    courseDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    courseImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    coursePrice: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    sequelize: database_config_1.default,
    tableName: "schoolDatabase"
});
