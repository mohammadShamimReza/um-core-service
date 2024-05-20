"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.semesterRegistrationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const semesterRegistration_controller_1 = require("./semesterRegistration.controller");
const semesterRegistration_validations_1 = require("./semesterRegistration.validations");
const router = express_1.default.Router();
router.get('/get-my-registration', semesterRegistration_controller_1.SemesterRegistrationController.getMyRegistration);
router.get('/', semesterRegistration_controller_1.SemesterRegistrationController.getAllFromDB);
router.get('/get-my-semsester-courses', semesterRegistration_controller_1.SemesterRegistrationController.getMySemesterRegCouses);
router.get('/:id', semesterRegistration_controller_1.SemesterRegistrationController.getByIdFromDB);
router.post('/enroll-into-course', (0, validateRequest_1.default)(semesterRegistration_validations_1.SemesterRegistrationValidation.enrollOrWithdrawCourse), semesterRegistration_controller_1.SemesterRegistrationController.enrollIntoCourse);
router.post('/start-registration', semesterRegistration_controller_1.SemesterRegistrationController.startMyRegistration);
router.post('/', (0, validateRequest_1.default)(semesterRegistration_validations_1.SemesterRegistrationValidation.create), semesterRegistration_controller_1.SemesterRegistrationController.insertIntoDB);
router.patch('/:id', (0, validateRequest_1.default)(semesterRegistration_validations_1.SemesterRegistrationValidation.update), semesterRegistration_controller_1.SemesterRegistrationController.updateOneInDB);
router.delete('/:id', semesterRegistration_controller_1.SemesterRegistrationController.deleteByIdFromDB);
router.post('/withdraw-from-course', (0, validateRequest_1.default)(semesterRegistration_validations_1.SemesterRegistrationValidation.enrollOrWithdrawCourse), semesterRegistration_controller_1.SemesterRegistrationController.withdrawFromCourse);
router.post('/confirm-my-registration', semesterRegistration_controller_1.SemesterRegistrationController.confirmMyRegistration);
router.post('/:id/start-new-semester', semesterRegistration_controller_1.SemesterRegistrationController.startNewSemester);
exports.semesterRegistrationRoutes = router;
