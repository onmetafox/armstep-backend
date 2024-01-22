import mongoose from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";
import { number } from "joi";

const DriverSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    status: {
        type: Number,
        enum: [1,2,3], // 1: pending, 2: active(allowed), 3: "blocked",
        required: true,
        default: 1
    },
    delivering: {
        type: Number,
        default: 1,
        required: true
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

export default mongoose.model("Drivers",DriverSchema);