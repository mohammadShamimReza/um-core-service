"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const course_controller_1 = require("./course.controller");
const course_validations_1 = require("./course.validations");
const router = express_1.default.Router();
router.get('/', course_controller_1.CourseController.getAllFromDB);
router.get('/:id', course_controller_1.CourseController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(course_validations_1.CourseValidation.create), course_controller_1.CourseController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(course_validations_1.CourseValidation.update), course_controller_1.CourseController.updateOneInDB);
router.delete('/:id', course_controller_1.CourseController.deleteByIdFromDB);
router.post('/:id/assign-faculties', (0, validateRequest_1.default)(course_validations_1.CourseValidation.assignOrRemoveFaculties), course_controller_1.CourseController.assignFaculies);
router.delete('/:id/remove-faculties', (0, validateRequest_1.default)(course_validations_1.CourseValidation.assignOrRemoveFaculties), course_controller_1.CourseController.removeFaculties);
exports.courseRoutes = router;
