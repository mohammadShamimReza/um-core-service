"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const building_controller_1 = require("./building.controller");
const building_validations_1 = require("./building.validations");
const router = express_1.default.Router();
router.get('/', building_controller_1.BuildingController.getAllFromDB);
router.get('/:id', building_controller_1.BuildingController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(building_validations_1.BuildingValidations.create), building_controller_1.BuildingController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(building_validations_1.BuildingValidations.update), building_controller_1.BuildingController.updateOneInDB);
router.delete('/:id', building_controller_1.BuildingController.deleteByIdFromDB);
exports.buildingRoutes = router;
