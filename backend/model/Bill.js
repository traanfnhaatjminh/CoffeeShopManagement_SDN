const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,  
    },
    created_time: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_time: {
        type: Date,
        required: true,
        default: Date.now
    },
    total_cost: {
        type: Number,
        required: true
    },
    table_id: {
        type: Schema.Types.ObjectId,
        ref: 'TableList'
    },
    payment: String,
    status: Number,
    product_list: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        _id: false
    }]
});

module.exports = mongoose.model('Bill', billSchema);
