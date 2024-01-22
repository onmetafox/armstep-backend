/**
 * @author metafox
 * @date 2023-08-11
 * @description
 * 
 * Auth controller to handle the authentication and password
 * 
 */

import moment from 'moment-timezone';
import Cryptr from 'cryptr'
import config from '../configs/config';
import Response from '../services/response.service'
import appSettings from '../configs/settings';
import Admin from '../models/admin.model';
import JWTHandler from '../utils/JWTHandler';

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const cryptr = new Cryptr(config.jwtSecret);

function adminLogin(req, res, next){
    Admin.findOne({email: req.body.email.toLowerCase()})
    .select('+password')
    .then((result,err)=> {
        if(err){
            res.json(Response.failure(err));
        }
        if(result){
            if(result.status == 1){
                res.json(Response.failure("User is pending yet!"));
            }else if(result.status == 3){
                res.json(Response.failure("User is blocked"));
            }else{
                if(cryptr.decrypt(result.password) == req.body.password){
                    var email = result.email;
                    JWTHandler.generate({email, type:'admin'}, (err, jwt, expiresIn) => {
                        if (err) {
                          return next(err);
                        }
                        const user = {
                            _id: result._id,
                            email: result.email,
                            firstName: result.firstName,
                            lastName: result.lastName,
                            phone: result.phone,
                            token: jwt,
                            expiredIn: moment().tz(appSettings.timeZone).add(expiresIn.frequency, expiresIn.interval)
                        }
                        res.json(Response.success(user));
                      });
                    // res.json(Response.success(result));
                }else{
                    res.json(Response.failure("Password incorrect"));
                }
            }
        }else{
            res.json(Response.failure("User is not exist"));
        }
        
    })
}

/**
 * register new admin
 * @property {string} req.body.userEmail - The admin user's email.
 * @property {string} req.body.phone - The admin user's mobile phone.
 * @property {string} req.body.firstName - The admin user's first name.
 * @property {string} req.body.lastName - The admin user's last name.
 * @property {string} req.body.password - The admin user's password.
 * @returns {Admin}
 */
function adminRegister(req, res){
    Admin.findOne({email: req.body.email}).then((result) => {
        if(result){
            res.json(Response.failure(29))
        }else{
            const admin = new Admin({
                email: req.body.email.toLowerCase(),
                phone: req.body.phone,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: cryptr.encrypt(req.body.password),
                status: 1,
                createdAt:  moment().tz(appSettings.timeZone).format(appSettings.momentFormat)
            });
            admin.save().then((data, err) => {
                if(err){
                    res.json(Response.failure(err))
                }else{
                    res.json(Response.success(data))
                }
                
            });
        }
    });
}

export default {
    adminRegister,
    adminLogin
}