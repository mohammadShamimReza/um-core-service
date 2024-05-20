"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentEnrolledCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const studentEnrolledCourse_controller_1 = require("./studentEnrolledCourse.controller");
const studentEnrolledCourse_validations_1 = require("./studentEnrolledCourse.validations");
const router = express_1.default.Router();
router.get('/', studentEnrolledCourse_controller_1.StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', studentEnrolledCourse_controller_1.StudentEnrolledCourseController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(studentEnrolledCourse_validations_1.StudentEnrolledCourseValidation.create), studentEnrolledCourse_controller_1.StudentEnrolledCourseController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(studentEnrolledCourse_validations_1.StudentEnrolledCourseValidation.update), studentEnrolledCourse_controller_1.StudentEnrolledCourseController.updateOneInDB);
router.delete('/:id', studentEnrolledCourse_controller_1.StudentEnrolledCourseController.deleteByIdFromDB);
exports.studentEnrolledCourseRoutes = router;
