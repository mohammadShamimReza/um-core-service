"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredCourseSectionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const offeredCourseSection_controller_1 = require("./offeredCourseSection.controller");
const offeredCourseSection_validation_1 = require("./offeredCourseSection.validation");
const router = express_1.default.Router();
router.get('/', offeredCourseSection_controller_1.OfferedCourseSectionController.getAllFromDB);
router.get('/:id', offeredCourseSection_controller_1.OfferedCourseSectionController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(offeredCourseSection_validation_1.OfferedCourseSectionValidation.create), offeredCourseSection_controller_1.OfferedCourseSectionController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(offeredCourseSection_validation_1.OfferedCourseSectionValidation.update), offeredCourseSection_controller_1.OfferedCourseSectionController.updateOneInDB);
router.delete('/:id', offeredCourseSection_controller_1.OfferedCourseSectionController.deleteByIdFromDB);
exports.offeredCourseSectionRoutes = router;
