const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableList = new Schema({
    number_of_chair: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('TableList', tableList);
