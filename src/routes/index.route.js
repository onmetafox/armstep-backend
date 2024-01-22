/**
 * @author metafox
 * @date 2023-08-11
 * 
 * @description
 * This is the main router file and it will mount the sub routers
 */

import express from "express";

import adminRoutes from './admin.route';
import authRoutes from './auth.route';
import urlRoutes from './url.route';
import contactRoutes from './contact.route';
import subscribeRoutes from './subscribe.route';

const router = express.Router();

// all user authencation handle sub router
router.use("/auth", authRoutes)

//dashboard admin handle sub router
router.use("/admins", adminRoutes);

//dashboard url handle sub router
router.use("/urls", urlRoutes);

// user side urls
router.use('/contact', contactRoutes);

// use side subscrive urls
router.use('/subscribe', subscribeRoutes);

export default router;
