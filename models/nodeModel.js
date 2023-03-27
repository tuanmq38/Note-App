const { timeStamp } = require('console');
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    content:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
}, {
    timeStamp: true
})

module.exports = mongoose.model('Notes', noteSchema);