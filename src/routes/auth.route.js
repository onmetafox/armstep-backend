/**
 * @author metafox
 * @date 2023-08-11
 * 
 * @description
 * sub router to handle the authentication apis
 */

import express from 'express';
import { validate } from 'express-validation';
import passport from '../configs/passport';
import paramValidation from '../configs/param.validation';
import authCtrl from '../controllers/auth.controller';


const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/admin/login - Returns token if correct username and password is provided */
router.route('/admin/login')
    .post(validate(paramValidation.login), authCtrl.adminLogin);

/** POST /api/auth/admin/register */
router.route('/admin/register')
    .post(validate(paramValidation.register), authCtrl.adminRegister);
    
export default router;