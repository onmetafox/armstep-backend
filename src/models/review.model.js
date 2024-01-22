import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";
import { number } from "joi";

const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    votes: {
        type:Number
    },
    denies: {
        type: Number
    },
    status: {
        type: Number,
        required: true,
        default: 1
    },
    createdAt: {
        type: Date,
        default: moment().tz(appSettings.timeZone).format(appSettings.momentFormat)
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles',
        required: false
    }
})

export default mongoose.model("Reviews",ReviewSchema);