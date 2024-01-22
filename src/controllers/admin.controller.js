import Admins from "../models/admin.model";

/**
 * Get admin list.
 * @property {number} req.query.skip - Number of admins to be skipped.
 * @property {number} req.query.limit - Limit number of admins to be returned.
 * @property {string} req.query.query
 * @returns {Admin[]}
 */

function list(req, res){

}

export default{
    list,
}