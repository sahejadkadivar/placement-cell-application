import express from 'express';
import passport from 'passport';
import CompanyController from '../controllers/companyController.js';

const router = express.Router();
const companyController = new CompanyController();

// GET requests
router.get('/home', passport.checkAuthentication, companyController.companyPage);
router.get('/allocate', passport.checkAuthentication, companyController.allocateInterview);

// POST requests
router.post('/schedule-interview', passport.checkAuthentication, companyController.scheduleInterview);
router.post('/update-status/:id', passport.checkAuthentication, companyController.updateStatus);

export default router;