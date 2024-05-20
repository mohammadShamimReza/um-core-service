"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicFaculty_contoller_1 = require("./academicFaculty.contoller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const router = express_1.default.Router();
router.get('/', academicFaculty_contoller_1.AcademicFacultyController.getAllFromDB);
router.get('/:id', academicFaculty_contoller_1.AcademicFacultyController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.create), academicFaculty_contoller_1.AcademicFacultyController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.update), academicFaculty_contoller_1.AcademicFacultyController.updateOneInDB);
router.delete('/:id', academicFaculty_contoller_1.AcademicFacultyController.deleteByIdFromDB);
exports.academicFacultyRoutes = router;
