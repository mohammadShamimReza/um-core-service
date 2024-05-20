"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentEnrolledCourseMarkRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const studentEnrolledCourseMark_controller_1 = require("./studentEnrolledCourseMark.controller");
const studentEnrolledCourseMark_validations_1 = require("./studentEnrolledCourseMark.validations");
const router = express_1.default.Router();
router.get('/', studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.getAllFromDB);
router.get('/my-marks', studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.getMyCourseMarks);
router.patch('/update-marks', (0, validateRequest_1.default)(studentEnrolledCourseMark_validations_1.StudentEnrolledCourseMarkValidation.updateStudentMarks), studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.updateStudentMarks);
router.patch('/update-final-marks', (0, validateRequest_1.default)(studentEnrolledCourseMark_validations_1.StudentEnrolledCourseMarkValidation.updateStudentMarks), studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkConroller.updateFinalMarks);
exports.studentEnrolledCourseMarkRoutes = router;
