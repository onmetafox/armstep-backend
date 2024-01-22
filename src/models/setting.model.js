import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const SettingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    detail: {
        type: String
    },
    key: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: String,
        required: true
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

export default mongoose.model("Settings",SettingSchema);