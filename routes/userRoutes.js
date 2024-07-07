import express from 'express';
import passport from 'passport';
import UserController from '../controllers/userControllers.js';

const userControllers = new UserController();
const router = express.Router();

// GET requests
router.get('/signup', userControllers.signup);
router.get('/signin', userControllers.signin);
router.get('/signout', passport.checkAuthentication, userControllers.signout);
router.get('/download-csv', passport.checkAuthentication, userControllers.downloadCsv);

// POST request
router.post('/create', userControllers.createUser);
router.post('/create-session', passport.authenticate('local', { failureRedirect: '/users/signin' }), userControllers.createSession);

export default router;


