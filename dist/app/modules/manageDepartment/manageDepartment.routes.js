"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const manageDepartment_controller_1 = require("./manageDepartment.controller");
const manageDepartment_validations_1 = require("./manageDepartment.validations");
const router = express_1.default.Router();
router.get('/', manageDepartment_controller_1.AcademicDepartmentController.getAllFromDB);
router.get('/:id', manageDepartment_controller_1.AcademicDepartmentController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(manageDepartment_validations_1.AcademicDepartmentValidation.create), manageDepartment_controller_1.AcademicDepartmentController.insertIntoDB);
exports.managementDepartmentRoutes = router;
