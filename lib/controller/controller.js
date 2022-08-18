"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const user_1 = require("../config/model/user");
const course_1 = require("../config/model/course");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TutorController {
    async createUser(req, res) {
        const id = (0, uuid_1.v4)();
        try {
            const record = await user_1.TutorInstance.create({ ...req.body, id });
            return res.json({ record, msg: "Registration Successful" });
        }
        catch (e) {
            return res.json({ msg: "Registration Failed", status: 500, route: "/create" });
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            console.log(req.body);
            const user = await user_1.TutorInstance.findOne({ where: { email } });
            if (!user) {
                return res.status(404).json({ msg: `User does not exist` });
            }
            if (user.password !== password) {
                return res.status(403).json({ msg: `Incorrect Password` });
            }
            const token = jsonwebtoken_1.default.sign({ email: user.email, id: user.id }, "jwtsecret");
            //console.log(res.header());
            res.header("auth-token", token).send(`Logged in, auth-token: ${token}`);
        }
        catch (error) {
            console.log(error);
        }
    }
    async allCourses(req, res) {
        try {
            const limit = req.query?.limit;
            const offset = req.query?.limit;
            const records = await course_1.CourseInstance.findAll({ where: {}, limit, offset });
            return res.json(records);
        }
        catch (e) {
            return res.json({ msg: "Failed to read", status: 500, route: "/read" });
        }
    }
    async createCourse(req, res) {
        try {
            //save course
            const id = (0, uuid_1.v4)();
            const course_user_id = req.user.id;
            const record = await course_1.CourseInstance.create({ ...req.body, id, course_user_id });
            res.status(200).json({ msg: `Success`, data: record });
        }
        catch (e) {
            return res.json({ msg: "Failed to create" });
        }
    }
    async getCourse(req, res) {
        try {
            const { id } = req.params;
            const record = await course_1.CourseInstance.findOne({ where: { id } });
            return res.json(record);
        }
        catch (e) {
            return res.json({ msg: "Failed to read", status: 500, route: "/read/:id" });
        }
    }
    async updateCourse(req, res) {
        try {
            const { id } = req.params;
            const record = await course_1.CourseInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ msg: "No record  for this id" });
            }
        }
        catch (e) {
            return res.json({ msg: "Failed to read", status: 500, route: "/update/:id" });
        }
    }
    async deleteCourse(req, res) {
        try {
            const { id } = req.params;
            const record = await course_1.CourseInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ msg: "No record  for this id" });
            }
            const deleteRecord = await record.destroy();
            return res.json({ record: deleteRecord });
        }
        catch (e) {
            return res.json({ msg: "Failed to read", status: 500, route: "/delete/:id" });
        }
    }
}
exports.default = new TutorController;
