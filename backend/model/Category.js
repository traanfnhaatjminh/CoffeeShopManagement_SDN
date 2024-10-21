const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({

    group_name: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    _id: false
});

module.exports = mongoose.model('Category', categorySchema);
