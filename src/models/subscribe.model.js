import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const SubscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admins'
    },
    reply: {
        type: String,
        required: false,
        default: ''
    },
    status: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment().tz(appSettings.timeZone).format(appSettings.momentFormat)
    },
    repliedAt: {
        type: Date
    },
});

export default mongoose.model('Subscribes', SubscribeSchema);
