const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
        movieId:{
            type: String,
        } 
})

module.exports = mongoose.model('favouriteMovie', favouriteSchema)
