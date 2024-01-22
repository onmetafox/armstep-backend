import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    detail: {
        type: String
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: this,
        required: false
    },
    childCategory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: this,
        required: true
    }],
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

export default mongoose.model("Categories",CategorySchema);