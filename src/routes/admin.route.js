/**
 * 
 * created metafox 2023-08-11
 * sub router to handle admin apis
 * parameter validation
 * midleware integration
 * 
 */
// libraries
import express from 'express';
import passport from 'passport';
import { validate } from 'express-validation'

// components
import paramValidation from '../configs/param.validation';
import adminCtrl from '../controllers/admin.controller';
import permission from '../services/permission/index';

const router = express.Router();

router.route('/')
    /** Get /api/admins - Get list of the admins : params (start, limit, query, role) */
    .post(passport.authenticate('jwt', {session:false}), /*permission.can("GET_/api/admins"),*/ validate(paramValidation.list), adminCtrl.list);

export default router;