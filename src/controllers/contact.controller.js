/**
 * @author metafox
 * @date 2023-09-18
 * @description
 * 
 * Contact controller to handle the urls
 * 
 */


import Contact from '../models/contact.model';
import AppController from './app.controller';

class ContactController extends AppController{
    /**
    * @param {Model} model The default model object
    * for the controller. Will be required to create
    * an instance of the controller
    */
    constructor(){
        const searchField = [ "name", "email", "comment", "phone"];
        super(Contact, searchField);
    }
}

export default ContactController