/**
 * @author metafox
 * @date 2023-09-18
 * 
 * @description
 * sub router to handle the Contact us
 */

import express from 'express';
import { validate } from 'express-validation';
import paramValidation from '../configs/param.validation';
import ContactController from '../controllers/contact.controller';

const contactCtrl = new ContactController();

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/contact/create - Returns handle result */
router.route('/create')
    .post(validate(paramValidation.contact), contactCtrl.create);

export default router;