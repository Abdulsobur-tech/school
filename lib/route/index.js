"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validator_1 = __importDefault(require("../validator/validator"));
const handleValidation_1 = __importDefault(require("../middleware/handleValidation"));
const controller_1 = __importDefault(require("../controller/controller"));
const authmiddleware_1 = require("../middleware/authmiddleware");
const router = express_1.default.Router();
router.post("/auth/register", validator_1.default.checkCreateStudent(), handleValidation_1.default.handleValidationError, controller_1.default.createUser);
router.post("/auth/login", validator_1.default.checkLoginStudent(), handleValidation_1.default.handleValidationError, controller_1.default.login);
router.post("/course/create", authmiddleware_1.auth, controller_1.default.createCourse);
router.get('/courses', validator_1.default.checkReadStudent(), handleValidation_1.default.handleValidationError, controller_1.default.allCourses);
router.get('/course/:id', validator_1.default.checkIdParam(), handleValidation_1.default.handleValidationError, controller_1.default.getCourse);
//Updating data. COMPLETE IT INSIDE CONTROLLER
router.put('/course/update/:id', validator_1.default.checkIdParam(), handleValidation_1.default.handleValidationError, controller_1.default.updateCourse);
//Deleting data
router.delete('/course/delete/:id', validator_1.default.checkIdParam(), handleValidation_1.default.handleValidationError, authmiddleware_1.auth, controller_1.default.deleteCourse);
exports.default = router;
