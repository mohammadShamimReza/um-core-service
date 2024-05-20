"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const faculty_controller_1 = require("./faculty.controller");
const faculty_validations_1 = require("./faculty.validations");
const router = express_1.default.Router();
router.get('/', faculty_controller_1.FacultyController.getAllFromDB);
router.get('/my-courses', faculty_controller_1.FacultyController.myCourses);
router.get('/:id', faculty_controller_1.FacultyController.getByIdFromDB);
router.get('/my-course-students', faculty_controller_1.FacultyController.getMyCourseStudents);
router.post('/', 
// validateRequest(FacultyValidation.create),
faculty_controller_1.FacultyController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(faculty_validations_1.FacultyValidation.update), faculty_controller_1.FacultyController.updateOneInDB);
router.delete('/:id', faculty_controller_1.FacultyController.deleteByIdFromDB);
router.post('/:id/assign-courses', (0, validateRequest_1.default)(faculty_validations_1.FacultyValidation.assignOrRemoveCourses), faculty_controller_1.FacultyController.assignCourses);
router.delete('/:id/remove-courses', (0, validateRequest_1.default)(faculty_validations_1.FacultyValidation.assignOrRemoveCourses), faculty_controller_1.FacultyController.removeCourses);
exports.facultyRoutes = router;
