"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_controller_1 = require("./admin.controller");
const admin_validations_1 = require("./admin.validations");
const router = express_1.default.Router();
router.get('/', admin_controller_1.AdminController.getAllFromDB);
router.get('/:id', admin_controller_1.AdminController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(admin_validations_1.AdminValidation.create), admin_controller_1.AdminController.insertIntoDB);
exports.adminRoutes = router;
