"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const offeredCourse_controller_1 = require("./offeredCourse.controller");
const offeredCourse_validation_1 = require("./offeredCourse.validation");
const router = express_1.default.Router();
router.get('/', offeredCourse_controller_1.OfferedCourseController.getAllFromDB);
router.get('/:id', offeredCourse_controller_1.OfferedCourseController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(offeredCourse_validation_1.OfferedCourseValidations.create), offeredCourse_controller_1.OfferedCourseController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(offeredCourse_validation_1.OfferedCourseValidations.update), offeredCourse_controller_1.OfferedCourseController.updateOneInDB);
router.delete('/:id', offeredCourse_controller_1.OfferedCourseController.deleteByIdFromDB);
exports.offeredCourseRoutes = router;
