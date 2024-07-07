import express from 'express';
import passport from '../config/passport-local-strategy.js';
import StudentController from "../controllers/studentController.js";

const router = express.Router();

const studentController = new StudentController();

// Get requests
router.get('/create', passport.checkAuthentication, studentController.createStudentPage);
router.get('/delete/:id', passport.checkAuthentication, studentController.deleteStudent);

// Post requests
router.post('/create-student', passport.checkAuthentication, studentController.createStudent);

export default router;

