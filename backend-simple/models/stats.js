const mongoose = require('mongoose');

const Stats = mongoose.model('Stats', new mongoose.Schema({
    weight: {
        type: Number,
        required: true,
        
    },
    // completed: {
    //     type: Boolean,
    //     default: false
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    }, {
    timestamps: true
}))


module.exports = Stats