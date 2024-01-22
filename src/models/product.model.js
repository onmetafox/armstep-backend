import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },
    coverImg: {
        type: String
    },
    images: [{
        type: String
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
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

export default mongoose.model("Products",ProductSchema);