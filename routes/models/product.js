const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true,
    },
    count: {
        type: Number,
        min: 1,
        max: 1000,
        default: 1,
    },
    price: {
        type: Number,
        default: null,
    },
});