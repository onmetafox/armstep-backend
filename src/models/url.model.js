import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const UrlSchema = new mongoose.Schema({
    method: {
        type: String,
        enum: ['GET', 'POST', 'PUT', 'DELETE']
    },
    type: {
        type: String,
        enum: ['API', 'MENU'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    path: {
        type: String
    },
    status: {
        type: Number,
        required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admins',
        required: true
    },
    createdAt: {
        type: Date,
        default: moment().tz(appSettings.timeZone).format(appSettings.momentFormat)
    },
})

export default mongoose.model("Urls", UrlSchema);