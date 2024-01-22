import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import Admin from '../models/admin.model';
import config from './config';

passport.use(new JwtStrategy({
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}, (credentials, done) => {
    if(credentials.type == "admin"){
        Admin.findOne({email: credentials.email})
        /*.populate({
            path: 'role',
            select: '_id name endpoints',
            populate: {
                path: 'url',
                select: '_id name method type path'
            }
        })*/
        .then((data, err) => {
            if(err){
                return done(err)
            }
            if(data){
                return done(null, data)
            }
        })
    }else if(credentials.type == "user"){

    }
}));

export default passport;
