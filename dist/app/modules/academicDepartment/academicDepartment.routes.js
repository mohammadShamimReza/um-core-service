"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const academicDepartment_validations_1 = require("./academicDepartment.validations");
const router = express_1.default.Router();
router.get('/', academicDepartment_controller_1.AcademicDepartmentController.getAllFromDB);
router.get('/:id', academicDepartment_controller_1.AcademicDepartmentController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(academicDepartment_validations_1.AcademicDepartmentValidation.create), academicDepartment_controller_1.AcademicDepartmentController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(academicDepartment_validations_1.AcademicDepartmentValidation.update), academicDepartment_controller_1.AcademicDepartmentController.updateOneInDB);
router.delete('/:id', academicDepartment_controller_1.AcademicDepartmentController.deleteByIdFromDB);
exports.academicDepartmentRoutes = router;
