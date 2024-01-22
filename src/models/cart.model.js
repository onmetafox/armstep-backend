import mongoose, { mongo } from "mongoose";
import moment from "moment-timezone";
import appSettings from "../configs/settings";

const CartSchema = new mongoose.Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
        addAt: {
            type: Date
        }
    }],
    createdAt: {
        type: Date,
        default: moment().tz(appSettings.timeZone).format(appSettings.momentFormat)
    },
})

export default mongoose.model("Carts",CartSchema);