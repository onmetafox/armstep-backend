/**
 * @author metafox
 * @date 2023-09-18
 * 
 * @description
 * sub router to handle the Subscribe us
 */

import express from 'express';
import { validate } from 'express-validation';
import paramValidation from '../configs/param.validation';
import SubscribeController from '../controllers/subscribe.controller';

const subscribeCtrl = new SubscribeController();

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/subscribe/create - Returns handle result */
router.route('/create')
    .post(subscribeCtrl.create);

export default router;