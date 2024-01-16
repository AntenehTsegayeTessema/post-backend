


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = Schema({
    title:{
        type:String,
        reqiured:true
    },
    description:{
        type:String,
        reqiured:true
    },
});

module.exports = mongoose.model('Posts',PostSchema);

