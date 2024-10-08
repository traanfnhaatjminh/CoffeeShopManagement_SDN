const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableList = new Schema({
    table_id: {
        type: Number,
        required: true,
        unique: true
    },
    number_of_chair: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('TableList', tableList);
