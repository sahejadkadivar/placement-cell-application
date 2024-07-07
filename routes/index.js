import express from "express";
import passport from "passport";
import HomeController from "../controllers/homeController.js";
import studentRoutes from "./studentRoute.js";
import userRoutes from "./userRoutes.js";
import companyRoutes from './companyRoute.js';

const router = express.Router();
const homeController = new HomeController();

router.get('/', passport.checkAuthentication, homeController.homePage);
router.use('/students', studentRoutes);
router.use('/company', companyRoutes);
router.use('/users', userRoutes);

export default router;
