const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tableList = new Schema({
    number_name: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        required: true
    }
});
const Table= mongoose.model('TableList', tableList);
module.exports = Table
