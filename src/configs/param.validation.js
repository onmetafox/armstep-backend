/**
 * @author metafox
 * @date 2023-08-11
 * 
 * @description
 * parameter validations
 */

import Joi from "joi";

export default {
    /** Auth parameter validations */
    login: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })
    },
    register: {
        body: Joi.object({
            email: Joi.string().email().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            phone: Joi.string().required(),
            password: Joi.string().required().min(6)
        })
    },

    /** Admin management parameter validation */
    list: {
        body: Joi.object({
          skip: Joi.number().integer().min(0).required(),
          limit: Joi.number().integer().min(1).required(), status: Joi.array(),
          query: Joi.string(),
          filter: Joi.string()
        })
    },

    url: {
        body: Joi.object({
            method: Joi.string(),
            type: Joi.string().required(),
            name: Joi.string().required(),
            path: Joi.string()
        })
    },
    updateUrl : {
        body: Joi.object({
            _id: Joi.string().hex(),
            method: Joi.string(),
            type: Joi.string().required(),
            name: Joi.string().required(),
            path: Joi.string()
        })
    },
    contact:{
        body: Joi.object({
            email:Joi.string().email().required(),
            phone: Joi.string(),
            name: Joi.string().required(),
            comment: Joi.string().required()
        })
    }
}