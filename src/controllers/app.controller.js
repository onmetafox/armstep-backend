import Response from '../services/response.service';
import httpStatus from 'http-status';
import appSettings from '../configs/settings';
import moment from 'moment-timezone';
import { filter } from 'compression';
class AppController {
    /**
    * @param {Model} model The default model object
    * for the controller. Will be required to create
    * an instance of the controller
    */
    constructor(model, searchField){
        this._model = model;
        this._search = searchField;
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.list = this.list.bind(this);
    }

    /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
    create(req, res, next){
        let object = new this._model(req.body);
        object.createdAt = moment().tz(appSettings.timeZone).format(appSettings.momentFormat);
        if(req.user)
            object.admin = req.user._id;
        object.status = 1;
        object.save().then((data, err) => {
            if(err){
                res.json(Response.failure(err))
            }else{
                res.json(Response.success(data))
            }
        })
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e));

    }

    /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
    // createFromUser(req, res, next){
    //     let object = new this._model(req.body);
    //     object.createdAt = moment().tz(appSettings.timeZone).format(appSettings.momentFormat);
    //     object.status = 1;
    //     object.save().then((data, err) => {
    //         if(err){
    //             res.json(Response.failure(err))
    //         }else{
    //             res.json(Response.success(data))
    //         }
    //     })
    //     .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e));

    // }
    /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
    update(req, res, next){
        this._model.findOneAndUpdate({_id: req.body._id}, req.body)
        .then((data, err)=>{
            if(err){
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err)
            }
            if(data){
                res.json(Response.success(data))
            }
        })
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e));
    }

    /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
    list(req, res, next){
        let matchQuery = this.where(req);
        console.log(matchQuery)
        this._model.find(matchQuery)
        .skip(Number(req.body.skip))
        .limit(Number(req.body.limit))
        .then((data, err)=>{
            if(err){
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err)
            }
            if(data){
                res.json(Response.success(data))
            }
        })
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).json(e));
    }

    /**
    * @param {Object} req The request object
    * @param {Object} res The response object
    * @param {function} next The callback to the next program handler
    * @return {Object} res The response object
    */
    fine(req, res, next){
        
    }

    searchQuery (str){
        var result = []
        this._search.forEach(el => {
            if(el != ""){
                let temp = {[el]: new RegExp(str, 'i')}
                result.push(temp);
            }
        });
        return {$or : (result)};
    }

    getFilter (filters){
        var result = [];
        
        filters.forEach((item) => {
            for (const [key, value] of Object.entries(item)){
                let temp = {[key]: value}
                result.push(temp);
            }
        });
        return {$and : (result)};
    }

    where(req){
        let param = JSON.parse(req.body.filter);
        let filters, query, matchQuery;
        console.log(param.length, req.body.query);
        if(param.length > 0 && req.body.query != ""){
            filters = this.getFilter(JSON.parse(req.body.filter));
            query = this.searchQuery(req.body.query);
            matchQuery = {$and: [filters, query]};
        }else if(param.length > 0 && req.body.query == ""){
            filters = this.getFilter(JSON.parse(req.body.filter));
            matchQuery = {$and: [filters]}
        }else if(param.length == 0 && req.body.query != ""){
            query = this.searchQuery(req.body.query);
            matchQuery = query;
        }else{
            matchQuery = {};
        }
        return matchQuery;
    }

}

export default AppController;