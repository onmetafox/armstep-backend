/**
 * @author metafox
 * @date 2023-09-18
 * @description
 * 
 * Subscribe controller to handle the urls
 * 
 */


import Subscribe from '../models/subscribe.model';
import AppController from './app.controller';
import Response from '../services/response.service'

class SubscribeController extends AppController{
    /**
    * @param {Model} model The default model object
    * for the controller. Will be required to create
    * an instance of the controller
    */
    constructor(){
        const searchField = [ "name", "email", "comment", "phone"];
        super(Subscribe, searchField);
    }
    create (req, res,next){
        Subscribe.findOne({email:req.body.email}).then((result)=>{
            console.log(result)
            if(result){
                res.json(Response.failure(29))
            }else{
                super.create(req,res,next)
            }
        })
    }
}

export default SubscribeController