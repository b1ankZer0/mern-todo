const mongoose = require('mongoose')
const validator = require('validator');

const c_todo = new mongoose.Schema({
    task:{
        type:String,
        required:true,
        valedat(value){
            if (value == null) {
                throw new Error('add todo');
            }
        }
    },
    date:{
        type:Date,
        required:true,
        default: Date.now(),
        valedat(value){
            if (value == null && !validator.isDate(value)) {
                throw new Error('add date');
            }
        }
    },
    isDane:{
        type:Boolean,
        required: true,
        default: false,
        valedat(value){
            if (value == null && !validator.isBoolean(value)) {
                throw new Error('add isDane');
            }
        }
    },
    isEdit:{
        type:Boolean,
        required: true,
        default: false,
        valedat(value){
            if (value == null && !validator.isBoolean(value)) {
                throw new Error('add isEdit');
            }
        }
    }
})

module.exports = mongoose.model('c_todo',c_todo)