const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    pid: {
        type: Number,
        required: true,
        unique: true
    },
    pname: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    unit: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: String,
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    discount: Number,
    status: Number
});

module.exports = mongoose.model('Product', productSchema);
