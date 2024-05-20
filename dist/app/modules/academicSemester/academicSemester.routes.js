"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemeterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemster_controller_1 = require("./academicSemster.controller");
const academicSemster_validation_1 = require("./academicSemster.validation");
const router = express_1.default.Router();
router.get('/', academicSemster_controller_1.AcademicSemeterController.getAllFromDB);
router.get('/:id', academicSemster_controller_1.AcademicSemeterController.getDataById);
router.post('/', (0, validateRequest_1.default)(academicSemster_validation_1.AcademicSemesterValidation.create), academicSemster_controller_1.AcademicSemeterController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(academicSemster_validation_1.AcademicSemesterValidation.update), academicSemster_controller_1.AcademicSemeterController.updateOneInDB);
router.delete('/:id', academicSemster_controller_1.AcademicSemeterController.deleteByIdFromDB);
exports.AcademicSemeterRoutes = router;
