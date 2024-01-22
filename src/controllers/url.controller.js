/**
 * @author metafox
 * @date 2023-08-11
 * @description
 * 
 * Url controller to handle the urls
 * 
 */


import Url from '../models/url.model';
import AppController from './app.controller';

class UrlController extends AppController{
    /**
    * @param {Model} model The default model object
    * for the controller. Will be required to create
    * an instance of the controller
    */
    constructor(){
        const searchField = [ "type", "method", "path", "name"];
        super(Url, searchField);
    }
}

export default UrlController