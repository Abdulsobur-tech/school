"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TutorsValidator {
    checkCreateStudent() {
        return [
            (0, express_validator_1.body)("id").optional().isUUID(4).withMessage("The value should be UUID v4"),
            (0, express_validator_1.body)("fullname").notEmpty().withMessage("Fullname  must be provided"),
            (0, express_validator_1.body)("email").notEmpty().withMessage("The email value should not be empty"),
            (0, express_validator_1.body)("address").notEmpty().withMessage("Address  must be provided")
        ];
    }
    checkLoginStudent() {
        return [
            (0, express_validator_1.body)("email").notEmpty().withMessage("The email value should not be empty"),
            (0, express_validator_1.body)("password").notEmpty().withMessage("Password must be provided")
        ];
    }
    checkReadStudent() {
        return [
            //     query('limit').notEmpty().withMessage("The query limit shouldn't be empty")
            //     .isInt({min:1,max:20}).withMessage("The limit value should be number and between 1-10"),
            (0, express_validator_1.query)("offset").optional().isNumeric().withMessage("The value should be number"),
        ];
    }
    checkIdParam() {
        return [
            (0, express_validator_1.param)("id").notEmpty().withMessage("The value should not be empty").isUUID(4).withMessage("The value should be uuid v4"),
        ];
    }
}
exports.default = new TutorsValidator();
