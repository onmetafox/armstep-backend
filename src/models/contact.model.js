import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    comment: {
        type: String,
        required: true,
        default: ''
    },
    is_seen: {
        type: Boolean,
        required: false,
        default: false
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

export default mongoose.model('Contacts', ContactSchema);
