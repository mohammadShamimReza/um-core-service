"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSemesterPaymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const studentSemesterPayment_controller_1 = require("./studentSemesterPayment.controller");
const router = express_1.default.Router();
router.get('/', studentSemesterPayment_controller_1.StudentSemesterPaymentController.getAllFromDB);
router.get('/my-semester-payments', studentSemesterPayment_controller_1.StudentSemesterPaymentController.getMySemesterPayments);
router.post('/initiate-payment', studentSemesterPayment_controller_1.StudentSemesterPaymentController.initiatePayment);
router.post('/complete-payment', studentSemesterPayment_controller_1.StudentSemesterPaymentController.completePayment);
exports.studentSemesterPaymentRoutes = router;
