"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_controller_1 = require("./room.controller");
const room_validations_1 = require("./room.validations");
const router = express_1.default.Router();
router.get('/', room_controller_1.RoomController.getAllFromDB);
router.get('/:id', room_controller_1.RoomController.getByIdFromDB);
router.post('/', (0, validateRequest_1.default)(room_validations_1.RoomValidation.create), room_controller_1.RoomController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(room_validations_1.RoomValidation.update), room_controller_1.RoomController.updateOneInDB);
router.delete('/:id', room_controller_1.RoomController.deleteByIdFromDB);
exports.roomRoutes = router;
