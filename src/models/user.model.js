import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    verified: {
        type: Number,
        required: true,  // 1: unverified, 2: verified
        default: 1
    },
    verifyCode: {
        type: String,
        trim: true
    },
    status: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment().tz(appSettings.timeZone).format(appSettings.momentFormat)
    },
})

export default mongoose.model("Users",UserSchema);